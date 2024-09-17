import CsvForm from "@/components/CsvForm";
import { connectToDatabase } from "@/services/database.service";
import { dbService } from "@/services/DatabaseService";
import Image from "next/image";

export default function Home() {
  connectToDatabase();
  dbService.getDataTest();
  dbService.findLimit();

  return (
    <main>
      <CsvForm />
    </main>
  );
}
