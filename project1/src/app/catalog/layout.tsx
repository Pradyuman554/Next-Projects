export default function Layout({
  children,
  model,
}: {
  children: React.ReactNode;
  model: React.ReactNode;
}) {

  return <div>
    {model}
    {children}
  </div>;

}