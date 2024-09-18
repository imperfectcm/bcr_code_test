
import React, { Dispatch, FormEventHandler, SetStateAction } from "react";
import { ChangeEvent, useEffect, useState } from "react"
import Select, { SingleValue } from "react-select";


interface SearchbarProps {
    input: string;
    setInput: Dispatch<SetStateAction<string>>;
    titleList: string[];
    setSelectedTitle: Dispatch<SetStateAction<string>>;
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
            console.log("Search triggered with input: ", props.input);
        }
    };

    const handleSubmit = () => {
        console.log("Search with input: ", props.input);
    }

    const titleOptions = props.titleList.map((key) => {
        return { value: key, label: key }
    })

    return (
        <form onSubmit={handleSubmit}>
            <Select options={titleOptions} onChange={e => handleTitleChange(e)} />
            <input type="text" value={props.input}
                onChange={e => handleInputChange(e)}
                onKeyDown={e => handleKeyPress(e)}
                placeholder="Search..." />
            <button type="submit">Search</button>
        </form>
    )

};

export default Searchbar;