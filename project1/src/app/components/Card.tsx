export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-black text-xl text-black-500 items-center flex justify-center m-10 border-[8px] border-black">
      {children}
    </div>
  );
}