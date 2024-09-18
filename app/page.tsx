import CsvFormContainer from "@/components/CsvFormContainer";
import Searchbar from "@/components/Searchbar";
import { dbService } from "@/services/DatabaseService";
import Image from "next/image";

export default async function Home() {

  return (
    <main>
      <CsvFormContainer />
      <Searchbar />
    </main>
  );
}
