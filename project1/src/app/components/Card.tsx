export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-black text-xl text-green-500">
      {children}
    </div>
  );
}