import { Button } from "flowbite-react";

export default function CallToAction() {
  return (
    <div className="flex border border-teal-500 p-3 justify-center items-center rounded-tl-3xl rounded-br-3xl flex-col sm:flex-row text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">Want to know more about me!!!</h2>
        <p className="text-gray-500 my-2">
          Check my portfolio website and start building your own projects
        </p>
        <a
          href="https://dhavamani.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="rounded-tl-xl rounded-bl-none bg-gradient-to-r from-blue-800 via-blue-600 to-blue-500 rounded-lg rounded-br-xl w-full hover:from-blue-500 hover:via-blue-600 hover:to-blue-80 transform hover:scale-95 transition duration-300">
            My portfolio
          </Button>
        </a>
      </div>
      <div className="flex-1 p-7">
        <img src="https://miro.medium.com/v2/resize:fit:1400/1*2I6VKSpzBDEdpMiOGIDgFA.jpeg" />
      </div>
    </div>
  );
}
