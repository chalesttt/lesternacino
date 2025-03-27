import React from 'react';
import Tag from './Tag';
import { ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: "How to Build Performant React Applications",
      date: "May 15, 2023",
      excerpt: "Explore advanced techniques for optimizing React applications to improve loading times and user experience.",
      tags: ["React", "Performance", "Web Development"]
    },
    {
      title: "The Future of Frontend Development in 2023",
      date: "April 2, 2023",
      excerpt: "Examining emerging trends and technologies that will shape the future of frontend development.",
      tags: ["Frontend", "Trends", "Web Development"]
    },
    {
      title: "Mastering CSS Grid for Complex Layouts",
      date: "March 10, 2023",
      excerpt: "A comprehensive guide to using CSS Grid for building responsive and complex web layouts.",
      tags: ["CSS", "Layout", "Responsive Design"]
    }
  ];

  return (
    <div className="opacity-0 animate-fadeIn animate-delay-600 section-container" style={{ backgroundColor: '#161616'}}>
      <h2 className="section-title text-sm sm:text-base md:text-lg lg:text-xl">Recent Blog Posts</h2>
      
      <div className="space-y-6 mt-4">
        {blogPosts.map((post, index) => (
          <div key={index} className="glass-card p-4 sm:p-5 shimmer">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
              <h3 className="text-lg font-medium text-white">{post.title}</h3>
              <span className="text-xs text-gray-400 mt-1 sm:mt-0">{post.date}</span>
            </div>
            <p className="text-gray-300 mb-3 text-sm">{post.excerpt}</p>
            
            <div className="flex flex-wrap mb-3">
              {post.tags.map((tag, i) => (
                <Tag key={i} className="text-xs mr-2 mb-2">{tag}</Tag>
              ))}
            </div>
            
            <a 
              href="#" 
              className="inline-flex items-center text-sm text-highlight hover:underline"
            >
              Read More
              <ArrowRight size={14} className="ml-1" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
