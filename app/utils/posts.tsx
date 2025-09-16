import Link from "next/link";

type PostTypes = {
  title: string;
  desc: string;
  link: string;
};

export default function Post({ title, desc, link }: PostTypes) {
  return (
    <Link href={link}>
      <div className="flex mt-6 md:w-3xl mx-auto p-4 rounded-lg border border-[var(--greyed)] hover:border-[var(--text-active)] transition-all duration-300 ease-in-out cursor-pointer flex-col">
        <h3 className="flex text-lg text-[var(--text-primary)]">{title}</h3>
        <p className="flex text-[var(--text-secondary)]">{desc}</p>
      </div>
    </Link>
  );
}
