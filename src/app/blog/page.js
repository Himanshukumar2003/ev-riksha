import Image from "next/image";
import { Search, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function BlogPage() {
  const categories = [
    "Business",
    "Life Style",
    "News",
    "Social Media",
    "Writing",
  ];

  const recentPosts = [
    {
      id: 1,
      title:
        "The Secret You Will Never Know About Chair That Will Change Your Life",
      image: "/img/reviewer-02.webp",
    },
    {
      id: 2,
      title:
        "The Secret You Will Never Know About Chair That Will Change Your Life",
      image: "/img/reviewer-02.webp",
    },
    {
      id: 3,
      title:
        "The Secret You Will Never Know About Chair That Will Change Your Life",
      image: "/img/reviewer-02.webp",
    },
    {
      id: 4,
      title:
        "The Secret You Will Never Know About Chair That Will Change Your Life",
      image: "/img/reviewer-02.webp",
    },
  ];

  const tags = [
    "Business",
    "Lifestyle",
    "Education",
    "Entertainment",
    "News",
    "Writing",
    "Environment",
  ];

  const galleryImages = [
    "/img/banner2.png",
    "/img/auto.jpg",
    "/img/heo-img.jpg",
    "/img/banner2.png",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Search */}
            <Card className="bg-white shadow-sm border-0">
              <CardContent className="p-4">
                <h3 className="font-semibold mb-3 text-gray-800">Search</h3>
                <div className="relative">
                  <Input
                    placeholder="Search..."
                    className="pr-10 border-gray-300 bg-white text-gray-700 focus:border-green-600 focus:ring-green-600"
                  />
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
              </CardContent>
            </Card>

            {/* Categories */}
            <Card className="bg-white shadow-sm border-0">
              <CardContent className="p-4">
                <h3 className="font-semibold mb-3 text-gray-800">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="flex items-center justify-between text-gray-600 hover:text-green-600 transition-colors py-1"
                      >
                        <span>{category}</span>
                        <ChevronRight className="h-4 w-4" />
                      </a>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Recent Posts */}
            <Card className="bg-white shadow-sm border-0">
              <CardContent className="p-4">
                <h3 className="font-semibold mb-3 text-gray-800">
                  Recent Posts
                </h3>
                <div className="space-y-4">
                  {recentPosts.map((post) => (
                    <div key={post.id} className="flex gap-3">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt="Post thumbnail"
                        width={60}
                        height={60}
                        className="rounded object-cover flex-shrink-0"
                      />
                      <div className="flex-1">
                        <a
                          href="#"
                          className="text-sm text-gray-700 hover:text-green-600 line-clamp-3 leading-tight transition-colors"
                        >
                          {post.title}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tags */}
            <Card className="bg-white shadow-sm border-0">
              <CardContent className="p-4">
                <h3 className="font-semibold mb-3 text-gray-800">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="text-xs bg-white text-gray-600 border-gray-300 hover:bg-blue-50 hover:text-green-600 hover:border-green-300 transition-all duration-200"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-3">
            <Card className="bg-white shadow-sm border-0 py-0">
              <CardContent className="p-0 py-0">
                {/* Hero Image */}
                <div className="relative">
                  <Image
                    src="/img/banner1.png"
                    alt="Wind turbines with electric car charging station"
                    width={800}
                    height={400}
                    className="w-full  object-cover rounded-t-lg"
                  />
                </div>

                {/* Article Content */}
                <div className="p-6">
                  <h2 className=" mb-4">
                    Could Dog Marriage: The Ideal People Who Train Their
                  </h2>

                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-4">
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum. Sed
                      ut perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium doloremque laudantium, totam rem aperiam,
                      eaque ipsa quae ab illo inventore veritatis et quasi
                      architecto beatae vitae dicta sunt explicabo.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit, sed quia consequuntur magni dolores
                      eos qui ratione voluptatem sequi nesciunt. Neque porro
                      quisquam est, qui dolorem ipsum quia dolor sit amet,
                      consectetur, adipisci velit.
                    </p>
                  </div>

                  {/* Where Can I Get Some Section */}
                  <div className="mt-8">
                    <h3 className=" mb-6">Where Can I Get Some?</h3>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      {galleryImages.map((image, index) => (
                        <div key={index} className="aspect-square">
                          <Image
                            src={image || "/placeholder.svg"}
                            alt={`Gallery image ${index + 1}`}
                            width={200}
                            height={200}
                            className="w-full h-full object-cover rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                          />
                        </div>
                      ))}
                    </div>

                    <div className="prose prose-gray max-w-none">
                      <p className="text-gray-700 leading-relaxed mb-4">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        dont look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isnt anything embarrassing hidden in the middle of text.
                      </p>

                      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                        <li>
                          All the Lorem Ipsum generators on the Internet tend to
                          repeat predefined chunks as necessary
                        </li>
                        <li>
                          Making this the first true generator on the Internet
                        </li>
                        <li>
                          It uses a dictionary of over 200 Latin words, combined
                          with a handful of model sentence structures
                        </li>
                        <li>
                          The generated Lorem Ipsum is therefore always free
                          from repetition, injected humour, or
                          non-characteristic words
                        </li>
                      </ul>

                      <blockquote className="border-l-4 border-green-600 pl-4 my-6">
                        <p className="text-green-600 font-semibold italic">
                          Neque Porro Quisquam Est Qui Dolorem Ipsum Quia Dolor
                          Sit Amet, Consectetur, Adipisci Velit...
                        </p>
                      </blockquote>

                      <p className="text-gray-700 leading-relaxed mb-6">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        dont look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isnt anything embarrassing hidden in the middle of text.
                      </p>
                    </div>
                  </div>

                  {/* Bottom Image Section */}
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Image
                          src="/img/heo-img.jpg"
                          alt="Electric car"
                          width={400}
                          height={300}
                          className="w-full h-[300px] object-cover rounded-lg shadow-sm"
                        />
                      </div>
                      <div className="space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                          The standard chunk of Lorem Ipsum used since the 1500s
                          is reproduced below for those interested. Sections
                          1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum
                          by Cicero are also reproduced in their exact original
                          form, accompanied by English versions from the 1914
                          translation by H. Rackham.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. The point of using Lorem Ipsum
                          is that it has a more-or-less normal distribution of
                          letters, as opposed to using Content here, content
                          here, making it look like readable English.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Article Footer */}
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="text-sm text-gray-600">Tags:</span>
                      {["Technology", "Environment", "Innovation"].map(
                        (tag, index) => (
                          <button
                            key={index}
                            variant="outline"
                            size="sm"
                            className="text-xs bg-gray-50 text-gray-600 border-gray-300 hover:bg-blue-50 hover:text-green-600 hover:border-green-300"
                          >
                            {tag}
                          </button>
                        )
                      )}
                    </div>
                    <div className="text-sm text-gray-500">
                      Published on March 15, 2024 • 5 min read
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
