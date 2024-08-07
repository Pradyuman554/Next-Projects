export default function Layout({
  children,
  notifications,
  revenue,
  users,
}: {
  children: React.ReactNode;
  notifications: React.ReactNode;
  revenue: React.ReactNode;
  users: React.ReactNode;
}) {
  return (
    <div className="flex">
      <div>{children}</div>
      <div>{revenue}</div>
      <div>{notifications}</div>
      <div>{users}</div>
    </div>
  );
}
