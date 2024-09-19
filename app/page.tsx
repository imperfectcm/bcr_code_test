import CsvFormContainer from "@/components/CsvFormContainer";
import SearchContainer from "@/components/SearchContainer";


export default async function Home() {

  return (
    <main className="p-5">
      <CsvFormContainer />
      <SearchContainer />
    </main>
  );
  
}
