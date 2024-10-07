interface ButtonProps {
  text: string;
  width: number;
  height: number;
}

export default function StandardButton({ text, width, height }: ButtonProps) {
  return (
    <button
      className={`h-[${height}rem] w-[${width}rem] bg-[#7e3af2] hover:bg-[#6929e3] text-white font-semibold py-2 px-4 rounded-md w-full
      text-xs`}
    >
      {text}
    </button>
  );
}
