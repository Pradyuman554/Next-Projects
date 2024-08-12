export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative font-black text-xl text-black-500 items-center flex justify-center m-10 border-[8px] border-black h-[30vh]">
      {children}
    </div>
  );
}