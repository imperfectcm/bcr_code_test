
import React, { Dispatch, FormEventHandler, SetStateAction } from "react";
import { ChangeEvent, useEffect, useState } from "react"
import Select, { SingleValue } from "react-select";
import SearchResultList from "./SearchResultList";


interface SearchbarProps {
    input: string;
    setInput: Dispatch<SetStateAction<string>>;
    titleList: string[];
    setSelectedTitle: Dispatch<SetStateAction<string>>;
    searchResult: any;
    getDataByValue: () => Promise<any>;
}


const Searchbar = (props: SearchbarProps) => {

    const handleTitleChange = (e: SingleValue<{ value: string; label: string; }>) => {
        if (e) {
            props.setSelectedTitle(e.value);
        }
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.setInput(e.target.value);
    };

    // Event handler to trigger search when Enter key is pressed
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            props.getDataByValue();
        }
    };

    const handleSubmit = () => {
        props.getDataByValue();
    }

    const titleOptions = props.titleList.map((key) => {
        return { value: key, label: key }
    })

    return (
        <div className="relative">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row w-full gap-1 mb-5">
                <Select options={titleOptions} onChange={e => handleTitleChange(e)} className="w-full sm:w-1/4 lg:w-1/5" />

                <div className="flex w-full grow gap-1">
                    <input type="text" value={props.input}
                        onChange={e => handleInputChange(e)}
                        onKeyDown={e => handleKeyPress(e)}
                        placeholder="Search the competition or team..."
                        className="py-2 sm:py-0 grow px-3 rounded-lg" />
                    <button type="submit"
                        className="py-2 sm:py-0 px-5 bg-slate-700 hover:bg-sky-500 hover:duration-200 text-neutral-100 rounded-lg cursor-pointer">Search</button>
                </div>

            </form>

            <SearchResultList
                searchResult={props.searchResult} />

        </div>
    )

};

export default Searchbar;