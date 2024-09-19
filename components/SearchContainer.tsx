
import { useEffect, useState } from "react";
import Searchbar from "./Searchbar";
import ResultDataContainer from "./ResultDataContainer";


export async function getAllData() {
    const res = await fetch("http://localhost:3000/api/all-data",{cache: 'force-cache'})

    const data = await res.json();

    return data;
}

export async function getAllKeys() {
    const res = await fetch("http://localhost:3000/api/collection-key",{cache: 'force-cache'})

    const titles = await res.json();

    return titles;
}



const SearchContainer = async () => {

    const defaultData = await getAllData();

    const allKeys = await getAllKeys();



    // const [titleList, setTitleList] = useState<[]>([]);
    // const [selectedTitle, setSelectedTitle] = useState<string>("");
    // const [input, setInput] = useState<string>('');
    // const [searchResult, setSearchResult] = useState<any>([]);
    // const [resultData, setResultData] = useState<any>([]);


    // useEffect(() => {

    //     const getAllData = async () => {
    //         const res = await fetch("/api/all-data", {
    //             method: "GET",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //         })

    //         const data = await res.json();
    //         setResultData(data);
    //     }

    //     getAllData();

    //     return () => { };

    // }, []);


    // useEffect(() => {

    //     const getAllKeys = async () => {
    //         const res = await fetch("/api/collection-key", {
    //             method: "GET",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             }
    //         })

    //         const titles = await res.json();
    //         setTitleList(titles);
    //     }

    //     getAllKeys();
    //     return () => { };

    // }, [])


    return (
        <article>
            <Searchbar
                defaultData={defaultData}
                allKeys={allKeys} />
            <ResultDataContainer
                resultData={defaultData} />
        </article>
    )

}

export default SearchContainer;