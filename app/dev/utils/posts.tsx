import Link from "next/link";

type PostTypes = {
  title: string;
  desc: string;
  link: string;
};

export default function Post({ title, desc, link }: PostTypes) {
  return (
    <Link href={link}>
      <div className="flex mt-6 w-full max-w-sm mx-auto p-6 rounded-lg border border-[var(--greyed)] hover:border-[var(--text-active)] hover:shadow-lg hover:shadow-[var(--text-active)]/20 transition-all duration-300 ease-in-out cursor-pointer flex-col min-h-[140px]">
        <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
          {title}
        </h3>
        <p className="text-[var(--text-secondary)] leading-relaxed flex-1">
          {desc}
        </p>
      </div>
    </Link>
  );
}
