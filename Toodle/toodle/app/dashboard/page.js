import Main from "../../components/Main";
import Dashboard from "../../components/Dashboard";

export const metadata = {
  title: "Toodle | DashBoard",
};

export default function DashboardPage() {
  const isAuthenticated = true;
  let children = (
    
  );

  if(isAuthenticated){
    children = (
        <Dashboard/>
    );
  }

  return <Main className="">
    {children}
  </Main>;
}
