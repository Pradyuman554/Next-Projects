export default function Layout({
  children,
  notifications,
  revenue,
  users,
  login,
}: {
  children: React.ReactNode;
  notifications: React.ReactNode;
  revenue: React.ReactNode;
  users: React.ReactNode;
  login: React.ReactNode;
}) {

  const isLoggedin = true;

  return isLoggedin ? (
    <div className="flex">
      <div>{children}</div>
      <div>{revenue}</div>
      <div>{notifications}</div>
      <div>{users}</div>
    </div>
  ) : (
    login
  );
}
