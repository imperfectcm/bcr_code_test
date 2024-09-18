"use client";

import React, { Dispatch, FormEventHandler } from "react";
import { ChangeEvent, useEffect, useState } from "react"


interface SearchbarProps {
    input: string;
    setSearchResult: Dispatch<any>;
    handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    handleSubmit: () => void;
}

const Searchbar = (props: SearchbarProps) => {

    return (
        // <form onSubmit={handleSubmit}>
        <>
            <input type="text" value={props.input}
                onChange={e => props.handleInputChange(e)}
                onKeyDown={e => props.handleKeyPress(e)}
                placeholder="Search..." />
            <button type="submit" onClick={props.handleSubmit}>Search</button>
        </>
        // </form>
    )

};

export default Searchbar;