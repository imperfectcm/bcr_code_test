"use client";

import { ChangeEvent, useEffect, useState } from "react";
import Searchbar from "./Searchbar";
import SearchResultList from "./SearchResultList";


const SearchContainer = () => {

    const [input, setInput] = useState<string>('');
    const [searchResult, setSearchResult] = useState<any>([]);

    useEffect(() => {

        if (input === "") return setSearchResult([]);

        const liveSearch = async () => {

            const res = await fetch(`/api/search?key=home_team&value=${input}`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                },
            })

            if (!res.ok) {
                return (res.json())
            }

            const data = await res.json();
            console.log("Response: " + data[0].home_team)
            setSearchResult(data);
        }

        liveSearch();
        return () => { };

    }, [input])


    return (
        <article>
            <Searchbar
                input={input}
                setInput={setInput}
            />
            <SearchResultList
                searchResult={searchResult}
            />
        </article>
    )

}

export default SearchContainer;