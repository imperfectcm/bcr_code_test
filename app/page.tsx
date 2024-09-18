import CsvFormContainer from "@/components/CsvFormContainer";
import Searchbar from "@/components/Searchbar";
import { connectToDatabase } from "@/services/database.service";
import { dbService } from "@/services/DatabaseService";
import Image from "next/image";

export default async function Home() {

  await connectToDatabase();
  // await dbService.getAllKeys();

  return (
    <main>
      <CsvFormContainer />
      <Searchbar />
    </main>
  );
}
