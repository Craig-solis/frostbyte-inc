import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";


const codeString = `
function greet(name) {
  return 'Hello, ' + name + '!';
}
`;

export default function Home() {
  return (
    <div className="flex flex-col justify-center w-full h-full flex-1 mt-50 ml-6">
      <h1 className="w-full flex flex-col">
        <span className="text-3xl text-[var(--greyed)]">Welcome to</span>
        <span className="text-5xl font-bold mt-2 text-[var(--text-active)] text-glow-active">FrostByte DevSecOps</span>
        <span className="text-2xl text-[var(--greyed)] mt-4"> {`>`} Full-Stack Developments</span>
      </h1>
      <SyntaxHighlighter
        language="typescript"
        className="hidden md:block rounded-lg flex w-[75%] md:w-[50%]"
        style={oneDark}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
}
