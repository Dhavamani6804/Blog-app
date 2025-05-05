import CallToAction from "../components/CallToAction";

export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className=" max-w-2xl mx-auto p-3 text-center">
        <div>
          <h1 className=" text-3xl font font-semibold text-center my-7">
            About Dhava's Blog
          </h1>
          <div className="text-md text-gray-500 flex flex-col gap-6">
            <p>
              Welcome to Dhava's Blog! I'm a passionate and dedicated software
              developer with a strong foundation in JavaScript, React, and
              Node.js. I have a keen eye for detail and a strong communication
              skills. I can build scalable and maintainable applications.
            </p>
            <p>
              This blog was created by Dhavamani as a personal project to share
              his thoughts and ideas with the world. Dhavamani is a passionate
              developer who loves to write about technology, coding, and
              everything in between.
            </p>
            <p>
              We encourage you to leave comments on our posts and engage with
              other readers. You can like other people's comments and reply to
              them as well. We believe that a community of learners can help
              each other grow and improve.
            </p>
            <p>
              Apart from coding, I’ve also participated in events like a 7-day
              NSS camp, showcasing my teamwork and organizational skills.
              Whether it's optimizing web applications or creating intuitive
              user interfaces, I love turning ideas into reality.
            </p>
          </div>
        </div>
        <div className="mt-10">
          <CallToAction />
        </div>
      </div>
    </div>
  );
}
