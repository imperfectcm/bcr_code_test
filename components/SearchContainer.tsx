import { ChangeEvent, useEffect, useState } from "react";
import Searchbar from "./Searchbar";


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
        <Searchbar
        input={input}
        setSearchResult={setSearchResult}
        handleInputChange={handleInputChange}
        handleKeyPress={handleKeyPress}
        handleSubmit={handleSubmit}
         />
    )

}

export default SearchContainer;