"use client";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Post from "./utils/posts";

const codeString = `
function greet(name) {
  return 'Hello, ' + name + '!';
}
console.log(greet('User'));
`;
const codeString2 = `
async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
`;
const codeString3 = `
function greet(developer) {
  return 'Say hi to your new favorite developer: ' + developer + '!';
}
console.log(greet('developer'));
`;

export default function Home() {
  return (
    <div className="flex flex-col justify-center w-full h-full flex-1 mt-25 px-6">
      <div className="flex flex-col md:flex-row items-center justify-center mb-12">
        <div className=" md:text-left md:w-[30%]">
          <h1 className="flex flex-col w-full text-center">
            <span className="text-3xl text-[var(--greyed)]">Welcome to</span>
            <span className="text-4xl md:text-5xl font-bold mt-2 text-[var(--text-active)] text-glow-active">
              FrostByte Inc.
            </span>
            <span className="text-xl">Web Development Series</span>
            <span className="text-2xl text-[var(--greyed)] mt-4">
              {`>`} Full-Stack Web Development
            </span>
          </h1>
        </div>
        <div className=" hidden md:flex flex-col items-center justify-center gap-6 w-[50%]">
          <SyntaxHighlighter
            language="typescript"
            className="hidden md:flex rounded-lg w-[80%] opacity-50"
            style={oneDark}
          >
            {codeString2}
          </SyntaxHighlighter>
          <SyntaxHighlighter
            language="typescript"
            className="hidden md:flex rounded-lg w-[80%]"
            style={oneDark}
          >
            {codeString}
          </SyntaxHighlighter>
          <SyntaxHighlighter
            language="typescript"
            className="hidden md:flex rounded-lg w-[80%] opacity-50"
            style={oneDark}
          >
            {codeString3}
          </SyntaxHighlighter>
        </div>
      </div>
      {/* Posts Section */}
      <div className="w-full flex flex-col justify-center items-center mb-12">
        <Post
          title="_About Me"
          desc='Learn more about me under the "_about-me" tab'
          link="/dev/aboutme"
        />
        <Post
          title="_Projects"
          desc='Check out some of my projects under the "_projects" tab'
          link="/dev/projects"
        />
        <Post
          title="_Contact Me"
          desc='Feel free to reach out via the "_contact-me" tab'
          link="/dev/contact"
        />
      </div>
    </div>
  );
}
