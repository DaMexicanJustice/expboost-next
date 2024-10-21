interface BlogCardProps {
  name: string;
  imageSrc: string;
  tag1: string;
  tag2: string;
  description: string;
  date: string;
}

export default function BlogCard({
  name,
  imageSrc,
  tag1,
  tag2,
  description,
  date,
}: BlogCardProps) {
  return (
    <div
      className="w-72 h-96 rounded-lg overflow-hidden relative hover:scale-105 transition-transform"
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className={`absolute inset-0`}>
        <div className="p-3 flex flex-col gap-1 h-full">
          <div className="flex flex-row gap-2 items-start ">
            <div className="text-white text-lg bg-stone-900 p-2 rounded-xl  border border-amber-500">
              {name}
            </div>
          </div>
          <div className="flex-grow" /> {/* Spacer */}
          <div className="flex space-x-2 ">
            <span className="bg-blue-500 text-white text-xs font-bold p-2 p-1 rounded">
              {tag1}
            </span>
            <span className="bg-purple-500 text-white text-xs font-bold p-2 p-1 rounded">
              {tag2}
            </span>
          </div>
          <div className="text-white text-sm bg-stone-900 p-2">
            {description}
          </div>
          <div className="mt-2 bg-gray-800 text-white text-lg font-bold rounded p-2 p-1 self-end">
            {date}
          </div>
        </div>
      </div>
    </div>
  );
}
