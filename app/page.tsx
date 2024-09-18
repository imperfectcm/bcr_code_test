import CsvFormContainer from "@/components/CsvFormContainer";
import SearchContainer from "@/components/SearchContainer";
import { connectToDatabase } from "@/services/database.service";
import { dbService } from "@/services/DatabaseService";
import Image from "next/image";

export default async function Home() {

  await connectToDatabase();
  // await dbService.getAllKeys();

  return (
    <main>
      <CsvFormContainer />
      <SearchContainer />
    </main>
  );
}
