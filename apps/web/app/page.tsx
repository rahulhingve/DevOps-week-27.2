import { prismaClient } from "db/client";

export default async function Home() {
  const users = await prismaClient.user.findMany();
  return (
    <>
    <div className="p-4"></div>
      <h1 className="text-2xl font-bold mb-4">Users List</h1>
      <div className="grid gap-4">
        {users.map((user) => (
          <div key={user.id} className="border p-4 rounded-lg shadow">
            <div className="grid grid-cols-2 gap-2">
              <p><span className="font-semibold">Username:</span> {user.username}</p>
              <p><span className="font-semibold">Password:</span> {user.password}</p>
              <p><span className="font-semibold">Created:</span> {new Date(user.createdAt).toLocaleString()}</p>
              <p><span className="font-semibold">Updated:</span> {new Date(user.updatedAt).toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>
      </>
  );
}


export const dynamic = "force-dynamic"; 