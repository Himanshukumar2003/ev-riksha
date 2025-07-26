import BlogDetailPageClient from "./BlogDetailPageClient";
import blogs from "./data";
export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  console.log({ params });
  return <BlogDetailPageClient slug={slug} />;
}
