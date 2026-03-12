import { useParams, Link, useNavigate } from 'react-router-dom';
import { blogPosts } from '../data/blogData';
import { Clock, User, Tag, ChevronLeft } from 'lucide-react';

export function BlogDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="pt-24 pb-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
        <Link to="/blog" className="text-indigo-600 hover:underline">
          Back to Blog
        </Link>
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <button
          onClick={() => navigate('/blog')}
          className="flex items-center gap-2 text-indigo-600 mb-8 hover:text-indigo-700"
        >
          <ChevronLeft size={20} />
          Back to Blog
        </button>

        <article>
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-96 object-cover rounded-xl mb-8"
          />

          <h1 className="text-5xl font-bold mb-4 text-gray-900">{post.title}</h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8 py-6 border-y border-gray-200">
            <span className="flex items-center gap-2">
              <User size={20} />
              <span>By {post.author}</span>
            </span>
            <span className="flex items-center gap-2">
              <Clock size={20} />
              <span>{post.readTime} min read</span>
            </span>
            <span className="text-sm">
              {new Date(post.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </span>
          </div>

          <div className="prose prose-lg max-w-none mb-8">
            {post.content.split('\n\n').map((paragraph, i) => (
              <p key={i} className="text-gray-700 mb-4 leading-relaxed">
                {paragraph.split('\n').map((line, j) => (
                  <span key={j}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            ))}
          </div>

          <div className="bg-blue-50 p-6 rounded-lg mb-12">
            <h3 className="font-semibold text-gray-900 mb-3">Key Takeaways:</h3>
            <ul className="text-gray-700 space-y-2">
              <li>✓ {post.excerpt}</li>
              <li>✓ Professional guidance and support make a significant difference</li>
              <li>✓ Consistency and patience are key to seeing results</li>
            </ul>
          </div>

          <div className="mb-12">
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Tags</h3>
            <div className="flex flex-wrap gap-3">
              {post.tags.map((tag) => (
                <span 
                  key={tag}
                  className="flex items-center gap-1 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm"
                >
                  <Tag size={14} />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-8 rounded-xl mb-12 text-center">
            <h3 className="text-2xl font-bold mb-3 text-gray-900">Ready to Transform Your Mental Health?</h3>
            <p className="text-gray-700 mb-6">
              Connect with a licensed therapist today and take the first step toward lasting change.
            </p>
            <Link to="/appointments" className="btn-primary">
              Book Your First Session
            </Link>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Related Articles</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.slug}`}
                    className="card group hover:shadow-xl transition"
                  >
                    <img 
                      src={relatedPost.image} 
                      alt={relatedPost.title}
                      className="w-full h-40 object-cover rounded-lg mb-3"
                    />
                    <h4 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition">
                      {relatedPost.title}
                    </h4>
                    <p className="text-sm text-gray-600 mt-2">{relatedPost.readTime} min read</p>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </article>
      </div>
    </div>
  );
}
