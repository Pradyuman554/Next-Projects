type Users = {
  id: number;
  name: string;
  email: string;
};

export default async function Users() {
  await new Promise((resolve)=>setTimeout(resolve,2000));
  const response = await fetch("https://jsonplaceholder.typicode.com/users",{
    next:{
      revalidate: 10,
    }
  });
  const users = await response.json();
  console.log(users);
  return (
    <div>
        <h1 className="text-3xl font-black flex justify-center mt-8">Users</h1>
      <br />
      <div>
        {users.map((user: Users) => {
          return (
            <div key={user.id} className="border-[7px] border-green-400 m-8">
              <p>{user.name}</p>
              <p>{user.email}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}