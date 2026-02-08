export default function MyButton({ text }: { text: string }) {
  return (
    <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-full shadow-lg transform transition hover:scale-105">
      {text}
    </button>
  );
}