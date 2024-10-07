interface ButtonProps {
  text: string;
}

export default function StandardButton({ text }: ButtonProps) {
  return (
    <button
      className={`bg-[#7e3af2] hover:bg-[#6929e3] text-white font-semibold py-2 px-4 rounded-md w-full
      text-xs`}
    >
      {text}
    </button>
  );
}
