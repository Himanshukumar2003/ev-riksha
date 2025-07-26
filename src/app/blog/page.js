"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Calendar, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useDebounce } from "@/hooks/use-debounce";
import { blogs } from "./[slug]/data";
import Breadcrumb from "@/components/breadcrumb";

export default function BlogMainPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = new Set();
    blogs.forEach((blog) => {
      blog.tags?.forEach((tag) => tags.add(tag));
    });
    return Array.from(tags);
  }, []);

  // Filter blogs based on search and tag
  const filteredBlogs = useMemo(() => {
    let filtered = blogs;

    if (debouncedSearchTerm.trim()) {
      const searchLower = debouncedSearchTerm.toLowerCase();
      filtered = filtered.filter(
        (blog) =>
          blog.blogTitle?.toLowerCase().includes(searchLower) ||
          blog.tags?.some((tag) => tag.toLowerCase().includes(searchLower))
      );
    }

    if (selectedTag) {
      filtered = filtered.filter((blog) => blog.tags?.includes(selectedTag));
    }

    // Sort by date, newest first
    filtered.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    return filtered;
  }, [debouncedSearchTerm, selectedTag]);

  // Generate description from sections
  const getDescription = (blog) => {
    if (blog.sections && blog.sections.length > 0) {
      const firstSection = blog.sections[0];
      if (firstSection.summary) {
        if (typeof firstSection.summary === "string") {
          return firstSection.summary.slice(0, 150) + "...";
        } else if (
          Array.isArray(firstSection.summary) &&
          firstSection.summary.length > 0
        ) {
          const firstSummary = firstSection.summary[0];
          if (typeof firstSummary === "string") {
            return firstSummary.slice(0, 150) + "...";
          }
        }
      }
    }
    return "Discover the latest insights about Mac Auto's electric vehicles and sustainable mobility solutions.";
  };

  // Get estimated reading time
  const getReadingTime = (blog) => {
    let wordCount = 0;
    blog.sections?.forEach((section) => {
      if (typeof section.summary === "string") {
        wordCount += section.summary.split(" ").length;
      } else if (Array.isArray(section.summary)) {
        section.summary.forEach((item) => {
          if (typeof item === "string") {
            wordCount += item.split(" ").length;
          } else if (item.points) {
            item.points.forEach((point) => {
              wordCount += point.split(" ").length;
            });
          }
        });
      }
    });
    const readingTime = Math.ceil(wordCount / 200);
    return readingTime;
  };

  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <Breadcrumb title="Blogs" />

      <div className="mx-auto max-w-7xl px-4 py-12">
        {/* Filter Tags */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-semibold text-gray-800">
            Filter by Tags
          </h3>
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedTag === "" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedTag("")}
              className={`rounded-full ${
                selectedTag === ""
                  ? "border border-green-600 text-green-600"
                  : ""
              }`}
            >
              All
            </Button>
            {allTags.map((tag) => (
              <Button
                key={tag}
                variant={selectedTag === tag ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTag(tag)}
                className={`rounded-full ${
                  selectedTag === tag
                    ? "border border-green-600 text-green-600"
                    : ""
                }`}
              >
                {tag}
              </Button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredBlogs.length} of {blogs.length} blog posts
            {selectedTag && ` in "${selectedTag}"`}
            {debouncedSearchTerm && ` matching "${debouncedSearchTerm}"`}
          </p>
        </div>

        {/* Blog Cards Grid */}
        {filteredBlogs.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredBlogs.map((blog) => (
              <Card
                key={blog.slug}
                className="group pt-0 overflow-hidden border-0 bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={
                      blog.mainImage ||
                      "/placeholder.svg?height=250&width=400&query=blog image"
                    }
                    alt={blog.blogTitle}
                    width={400}
                    height={250}
                    className="w-full  max-h-[250px] transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                <CardContent>
                  {/* Tags */}
                  <div className="mb-3 flex flex-wrap gap-1">
                    {blog.tags?.slice(0, 2).map((tag, index) => (
                      <span
                        key={index}
                        className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700"
                      >
                        {tag}
                      </span>
                    ))}
                    {blog.tags?.length > 2 && (
                      <span className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
                        +{blog.tags.length - 2}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h2 className="mb-3 text-xl font-bold text-gray-900 line-clamp-2 group-hover:text-green-600 transition-colors">
                    {blog.blogTitle}
                  </h2>

                  {/* Description */}
                  <p className="mb-4 text-gray-600 line-clamp-3 leading-relaxed">
                    {getDescription(blog)}
                  </p>

                  {/* Meta Info */}
                  <div className="mb-4 flex items-center text-sm text-gray-500">
                    <Calendar className="mr-1 h-4 w-4" />
                    <span>{formatDate(blog.date)}</span>
                    <span className="mx-2">•</span>
                    <span>{getReadingTime(blog)} min read</span>
                  </div>

                  {/* Read More Button */}
                  <Link href={`/blog/${blog.slug}`}>
                    <Button className="btn  w-full">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          /* No Results */
          <div className="text-center py-12">
            <div className="mx-auto max-w-md">
              <div className="mb-4 text-6xl">📝</div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                No blogs found
              </h3>
              <p className="text-gray-600 mb-4">
                {debouncedSearchTerm || selectedTag
                  ? "Try adjusting your search or filter criteria."
                  : "No blog posts are available at the moment."}
              </p>
              {(debouncedSearchTerm || selectedTag) && (
                <Button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedTag("");
                  }}
                  variant="outline"
                >
                  Clear Filters
                </Button>
              )}
            </div>
          </div>
        )}

        {/* Load More Button (if needed) */}
        {filteredBlogs.length > 0 && filteredBlogs.length >= 9 && (
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" className="px-8 bg-transparent">
              Load More Posts
            </Button>
          </div>
        )}
      </div>

   
    </div>
  );
}
