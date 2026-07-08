import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { getPosts, getPost, getPostSlugs } from "@/lib/cms";
import { compileBlogMDX } from "@/lib/mdx";

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return (
      <>
        <Nav />
        <div className="inner-page">
          <div className="inner-page-hero-section">
            <div className="container">
              <nav className="breadcrumbs mb-6">
                <Link href="/" className="breadcrumb-link">Home</Link>
                <span className="breadcrumb-separator">/</span>
                <Link href="/blog" className="breadcrumb-link">Blog</Link>
                <span className="breadcrumb-separator">/</span>
                <span className="breadcrumb-current">Post Not Found</span>
              </nav>

              <div className="inner-page-header">
                <h1 className="inner-page-title">Post Not Found</h1>
                <p className="inner-page-subtitle">The blog post you're looking for doesn't exist.</p>
                <Link href="/blog" className="btn btn-primary mt-4">
                  ← Back to Blog
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const { content, data } = post;
  const title = (data.title as string) || "Untitled";
  const excerpt = (data.excerpt as string) || "";
  const date = (data.date as string) || "";

  const { content: mdxContent } = await compileBlogMDX(content);

  const allPosts = await getPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  return (
    <>
      <Nav />
      <div className="inner-page">
        <div className="inner-page-hero-section">
          <div className="container">
            <nav className="breadcrumbs mb-6">
              <Link href="/" className="breadcrumb-link">Home</Link>
              <span className="breadcrumb-separator">/</span>
              <Link href="/blog" className="breadcrumb-link">Blog</Link>
              <span className="breadcrumb-separator">/</span>
              <span className="breadcrumb-current">{title}</span>
            </nav>

            <div className="inner-page-header">
              <h1 className="inner-page-title">{title}</h1>
              <p className="inner-page-subtitle">{excerpt}</p>
              <div className="text-sm text-[#a9adb3] mt-4">{date}</div>
            </div>
          </div>
        </div>
        
        <div className="inner-page-main-content">
          <div className="container">
            <article className="inner-page-card blog-post">
              <div className="prose prose-invert prose-lg max-w-none">
                {mdxContent as React.ReactNode}
              </div>
            </article>

            <div className="post-navigation mt-12">
              <div className="flex flex-col md:flex-row gap-6">
                {prevPost && (
                  <Link href={`/blog/${prevPost.slug}`} className="post-nav-card post-nav-prev flex-1">
                    <div className="post-nav-content">
                      <span className="post-nav-label">← Previous</span>
                      <h3 className="post-nav-title">{prevPost.title}</h3>
                      <p className="post-nav-excerpt">{prevPost.excerpt}</p>
                    </div>
                  </Link>
                )}

                <Link href="/blog" className="post-nav-card post-nav-center flex-1 md:flex-none md:w-48">
                  <div className="post-nav-content text-center">
                    <span className="post-nav-label">All Posts</span>
                    <h3 className="post-nav-title">← Blog</h3>
                  </div>
                </Link>

                {nextPost && (
                  <Link href={`/blog/${nextPost.slug}`} className="post-nav-card post-nav-next flex-1">
                    <div className="post-nav-content">
                      <span className="post-nav-label">Next →</span>
                      <h3 className="post-nav-title">{nextPost.title}</h3>
                      <p className="post-nav-excerpt">{nextPost.excerpt}</p>
                    </div>
                  </Link>
                )}
              </div>

              <div className="related-posts mt-12">
                <h3 className="related-posts-title">More Articles</h3>
                <div className="related-posts-grid">
                  {allPosts
                    .filter((p) => p.slug !== slug)
                    .slice(0, 3)
                    .map((p) => (
                      <Link key={p.slug} href={`/blog/${p.slug}`} className="related-post-card">
                        <div className="related-post-content">
                          <h4 className="related-post-title">{p.title}</h4>
                          <p className="related-post-excerpt">{p.excerpt}</p>
                          <span className="related-post-date">{p.date}</span>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
