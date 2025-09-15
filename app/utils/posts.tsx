type PostTypes = {
  title: string;
  desc: string;
};

export default function Post({ title, desc }: PostTypes) {
  return (
    <div className=" flex mt-6 w-full md:w-[50%] p-4 rounded-lg border border-[var(--greyed)] hover:border-[var(--text-active)] hover:shadow-lg hover:shadow-[var(--text-active)] transition-all duration-300 ease-in-out cursor-pointer flex-col">
      <h3 className="flex text-lg text-[var(--text-primary)]">{title}</h3>
      <p className="flex text-[var(--text-secondary)]">{desc}</p>
    </div>
  );
}
