"use client";

import React, { Dispatch, SetStateAction } from "react";
import { ChangeEvent, useEffect, useState } from "react"
import Select, { SingleValue } from "react-select";
import LiveSearchResultList from "./LiveSearchResultList";


interface SearchbarProps {
    defaultData: any[];
    allKeys: any[];
}


const Searchbar = (props: SearchbarProps) => {

    const [searchInput, setSearchInput] = useState<string>("");
    const [titleList, setTitleList] = useState<any[]>([]);
    const [selectedTitle, setSelectedTitle] = useState<string>("");
    const [liveSearchResult, setLiveSearchResult] = useState<any[]>([]);
    const [resultData, setResultData] = useState<any>([]);


    // need to set if for the library react_select
    const id = Date.now().toString();
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => setIsMounted(true), []);


    useEffect(() => {
        console.log(resultData);
        return () => { };
    }, [resultData]);

    useEffect(() => {
        setTitleList(props.allKeys);
        return () => { };
    }, [])


    // search results
    async function getDataByValue() {

        const res = await fetch(`/api/rugby-by-value?key=key=home_team&value=Fijian`)

        setSearchInput("")

        if (!res.ok) {
            return (res.json())
        }

        const data = await res.json();
        console.log("data: " + data)

        setResultData(data);
        return data;
    }


    // live search result list
    useEffect(() => {

        if (searchInput == "" || null) return setLiveSearchResult([]);
        if (searchInput == "" || !selectedTitle) return;

        const liveSearch = async () => {
            const res = await fetch(`/api/search?key=${selectedTitle}&value=${searchInput}`)

            if (!res.ok) {
                return (res.json())
            }

            if (!res) {
                setLiveSearchResult([]);
            }

            const data = await res.json();
            setLiveSearchResult(data);
        }

        liveSearch();
        return () => { };

    }, [selectedTitle, searchInput])



    // search title change
    const handleTitleChange = (option: SingleValue<{ value: string; label: string; }>) => {
        if (option) {
            setSelectedTitle(option.value);
        }
    };


    // search input change
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value);
    };


    // press enter to search
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            getDataByValue();
        }
    };


    // title list options
    const titleOptions = titleList.map((key) => {
        return { value: key, label: key }
    })


    return (
        <section className="relative">
            <form className="flex flex-col sm:flex-row w-full gap-1 mb-5">

                {isMounted ?
                    <Select id={id}
                        options={titleOptions}
                        onChange={(option) => handleTitleChange(option)}
                        className="w-full sm:w-1/4 lg:w-1/5"
                        classNamePrefix="project-edition-select" />
                    : null}

                <div className="flex w-full grow gap-1">
                    <input type="text" value={searchInput}
                        onChange={e => handleInputChange(e)}
                        onKeyDown={e => handleKeyPress(e)}
                        placeholder="Search the competition or team..."
                        className="py-2 sm:py-0 grow px-3 rounded-lg" />

                    <button type="submit" onClick={() => { getDataByValue }}
                        className="py-2 sm:py-0 px-5 bg-slate-700 hover:bg-sky-500 hover:duration-200 text-neutral-100 rounded-lg cursor-pointer">Search</button>

                </div>

            </form>

            <LiveSearchResultList
                liveSearchResult={liveSearchResult} />

        </section>
    )

};

export default Searchbar;