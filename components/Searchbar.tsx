"use client";

import React, { FormEventHandler } from "react";
import { ChangeEvent, useEffect, useState } from "react"


const Searchbar = () => {
    const [input, setInput] = useState<string>('');

    useEffect(() => {
        return console.log(input);
    }, [input])

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    // Event handler to trigger search when Enter key is pressed
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            console.log("Search triggered with input: ", input);
        }
    };

    const handleSubmit = () => {
        console.log("Search with input: ", input);
    }

    return (
        // <form onSubmit={handleSubmit}>
        <>
            <input type="text" value={input}
                onChange={e => handleInputChange(e)}
                onKeyDown={e => handleKeyPress(e)}
                placeholder="Search..." />
            <button type="submit">Search</button>
        </>
        // </form>
    )

};

export default Searchbar;