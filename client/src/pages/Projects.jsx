import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import PostCard from "../components/PostCard";
import { useEffect, useState } from "react";

export default function Projects() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getPosts");
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div className="min-h-screen max-w-4xl mx-auto flex justify-center gap-8 items-center flex-col p-6">
      <h1 className="text-4xl font-bold text-center">Explore My Blogs</h1>
      <p className="text-lg text-gray-600 text-center max-w-3xl">
        Dive into a collection of fun and engaging projects designed to help you
        learn and master JavaScript, Reactjs, and Nodejs. Whether you're a
        beginner or an experienced an experienced developer, these blogs will
        helps you to improve your skills and inspire creativity. Start building
        today and take your development journey to the next level!
      </p>
      <div className="w-full flex flex-col gap-6">
        <section className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold dark:text-gray-900">
            Why Build Projects ?
          </h2>
          <p className="text-gray-700 mt-2">
            Building projects is one of the best ways to learn programming. It
            allows you to apply theoretical knowledge in a practical way, solve
            real-world problems, and create a portfolio that showcases your
            skills to potential employers or clients.
          </p>
        </section>
        <section className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold dark:text-gray-900">
            What You'll Learn ?
          </h2>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>How to structure HTML for clean and semantic code</li>
            <li>Styling with CSS to create visually appealing designs</li>
            <li>Adding interactivity with JavaScript</li>
            <li>Debugging and problem-solving techniques</li>
            <li>Best practices for responsive and accessible web design</li>
          </ul>
        </section>
      </div>
      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-3">
        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-center">Recent Posts</h2>
            <div className="flex flex-wrap gap-3">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={"/search"}
              className="text-lg text-teal-500 hover:underline text-center"
            >
              View all posts
            </Link>
          </div>
        )}
      </div>

      <CallToAction />
    </div>
  );
}
