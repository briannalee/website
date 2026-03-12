import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';
import { Clock, User, Tag } from 'lucide-react';

export function BlogListPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="section-title text-center">Mental Health Blog</h1>
        <p className="section-subtitle text-center">
          Evidence-based insights, tips, and resources for your mental health journey
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="card flex flex-col">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              
              <div className="flex-1 flex flex-col">
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                  <span className="flex items-center gap-1">
                    <User size={16} />
                    {post.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={16} />
                    {post.readTime} min read
                  </span>
                </div>

                <h2 className="text-xl font-bold mb-2 text-gray-900">
                  <Link to={`/blog/${post.slug}`} className="hover:text-indigo-600 transition">
                    {post.title}
                  </Link>
                </h2>

                <p className="text-gray-600 mb-4">{post.excerpt}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="flex items-center gap-1 text-xs bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full"
                    >
                      <Tag size={12} />
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto">
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="text-indigo-600 font-semibold hover:text-indigo-700 inline-block transition"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* SEO Content Section */}
        <section className="mt-20 px-6 py-12 bg-blue-50 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">Mental Health Resources</h2>
          <div className="grid md:grid-cols-2 gap-8 text-gray-700">
            <div>
              <h3 className="font-semibold mb-2">Popular Topics</h3>
              <ul className="space-y-2 text-sm">
                <li>• Anxiety treatment and management</li>
                <li>• Depression therapy and support</li>
                <li>• CBT techniques for everyday use</li>
                <li>• Mindfulness meditation practices</li>
                <li>• Sleep hygiene and insomnia relief</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Therapy Modalities</h3>
              <ul className="space-y-2 text-sm">
                <li>• Cognitive Behavioral Therapy (CBT)</li>
                <li>• Dialectical Behavior Therapy (DBT)</li>
                <li>• Interpersonal Therapy (IPT)</li>
                <li>• Psychodynamic Therapy</li>
                <li>• Acceptance and Commitment Therapy</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
