
import SearchbarAndResult from "./SearchbarAndResult";


export async function getAllData() {
    const res = await fetch("http://localhost:3000/api/all-data", { cache: 'no-store' })

    const data = await res.json();

    return data;
}


export async function getAllKeys() {
    const res = await fetch("http://localhost:3000/api/collection-key", { cache: 'no-store' })

    const titles = await res.json();

    return titles;
}


const SearchContainer = async () => {

    const defaultData = await getAllData();
    const allKeys = await getAllKeys();

    return (
        <article>
            <SearchbarAndResult
                defaultData={defaultData}
                allKeys={allKeys} />
        </article>
    )

}

export default SearchContainer;