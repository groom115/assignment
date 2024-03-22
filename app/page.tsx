import Image from "next/image";
import { columns } from "./user-table/columns";
import { DataTable } from "./user-table/data-table";
import { fetchData } from "./api/fetch-user";
import { UserButton } from "@clerk/nextjs";

export default async function Home() {
  const data = await fetchData();

  return (
    <main className="flex min-h-screen flex-col items-center  p-24 bg-black">
      <div className="flex flex-row gap-3 items-center">
        <h1 className="text-white">Profile</h1>
        <UserButton />
      </div>

      {data && <DataTable columns={columns} data={data.results} />}
    </main>
  );
}
