type items = {
  title: string;
  img?: string;
};

export default function Marquee({ items }: { items: items[] }) {
  return (
    <div className="relative flex w-full overflow-x-hidden border-b-2 border-t-2 border-black bg-[#dfe5f2] dark:bg-zinc-900 font-bold">
      <div className="animate-marquee whitespace-nowrap py-12">
        {items.map((item) => {
          return (
            <span key={item.title} className="mx-4 text-4xl">
              {item.title}
            </span>
          );
        })}
      </div>

      <div className="absolute top-0 animate-marquee2 whitespace-nowrap py-12">
        {items.map((item) => {
          return (
            <span key={item.title} className="mx-4 text-4xl">
              {item.title}
            </span>
          );
        })}
      </div>

      {/* must have both of these in order to work */}
    </div>
  );
}
