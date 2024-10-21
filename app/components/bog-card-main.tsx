interface BlogCardProps {
  name: string;
  imageSrc: string;
  tag1: string;
  tag2: string;
  description: string;
  date: string;
}

export default function BlogCardMain({
  name,
  imageSrc,
  tag1,
  tag2,
  description,
  date,
}: BlogCardProps) {
  return (
    <div
      className="hidden w-[36rem] h-[48rem] rounded-lg overflow-hidden relative hover:scale-105 transition-transform
      sm:block"
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className={`absolute inset-0`}>
        <div className="p-6 flex flex-col gap-2 h-full">
          <div className="flex flex-row gap-4 items-start ">
            <div className="text-white text-lg bg-stone-900 px-4 rounded-xl  border border-amber-500">
              {name}
            </div>
            <div className="bg-yellow-500 text-xs font-bold px-4 py-2 rounded">
              Important
            </div>
          </div>
          <div className="flex-grow" /> {/* Spacer */}
          <div className="flex space-x-2 ">
            <span className="bg-blue-500 text-white text-xs font-bold px-4 py-2 rounded">
              {tag1}
            </span>
            <span className="bg-purple-500 text-white text-xs font-bold px-4 py-2 rounded">
              {tag2}
            </span>
          </div>
          <div className="text-white text-sm bg-stone-900 p-4">
            {description}
          </div>
          <div className="mt-2 bg-gray-800 text-white text-lg font-bold rounded px-4 py-2 self-end">
            {date}
          </div>
        </div>
      </div>
    </div>
  );
}
