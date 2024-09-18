"use client";

import { ChangeEvent, useEffect, useState } from "react";
import Searchbar from "./Searchbar";
import SearchResultList from "./SearchResultList";
import ResultDataContainer from "./ResultDataContainer";


const SearchContainer = () => {

    const [titleList, setTitleList] = useState<[]>([]);
    const [selectedTitle, setSelectedTitle] = useState<string>("");
    const [input, setInput] = useState<string>('');
    const [searchResult, setSearchResult] = useState<any>([]);
    const [showSearchResult, setShowSearchResult] = useState<boolean>(false);
    const [resultData, setResultData] = useState<any>([]);


    useEffect(() => {

        const getAllData = async () => {
            const res = await fetch("/api/rugby", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })

            const data = await res.json();
            setResultData(data);
        }

        getAllData();
        return () => { };

    }, []);


    useEffect(() => {
        if (showSearchResult) return;

        const getAllData = async () => {
            const res = await fetch("/api/rugby", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })

            const data = await res.json();
            setResultData(data);
        }

        getAllData();
        return () => { };

    }, [showSearchResult]);


    useEffect(() => {

        const getAllKeys = async () => {
            const res = await fetch("/api/collection-key", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })

            const titles = await res.json();
            setTitleList(titles);
        }

        getAllKeys();
        return () => { };

    }, [])


    useEffect(() => {

        if (input === "") return setSearchResult([]);

        const liveSearch = async () => {

            const res = await fetch(`/api/search?key=${selectedTitle}&value=${input}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })

            if (!res.ok) {
                return (res.json())
            }

            if (!res) {
                setSearchResult([]);
            }

            const data = await res.json();
            setSearchResult(data);
        }

        liveSearch();
        return () => { };

    }, [input, selectedTitle])


    return (
        <article>
            <Searchbar
                input={input}
                setInput={setInput}
                titleList={titleList}
                setSelectedTitle={setSelectedTitle} />
            <SearchResultList
                searchResult={searchResult} />
            <ResultDataContainer
                resultData={resultData} />
        </article>
    )

}

export default SearchContainer;