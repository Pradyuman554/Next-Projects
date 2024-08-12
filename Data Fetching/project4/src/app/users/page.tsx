type Users = {
  id: number;
  name: string;
  phone: string;
};

export default async function Users() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
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
              <p>{user.phone}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
