
import React, { Dispatch, FormEventHandler, SetStateAction } from "react";
import { ChangeEvent, useEffect, useState } from "react"


interface SearchbarProps {
    input: string;
    setInput: Dispatch<SetStateAction<string>>
}

const Searchbar = (props: SearchbarProps) => {

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

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={props.input}
                onChange={e => handleInputChange(e)}
                onKeyDown={e => handleKeyPress(e)}
                placeholder="Search..." />
            <button type="submit">Search</button>
        </form>
    )

};

export default Searchbar;