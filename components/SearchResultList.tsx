

interface SearchResultListProps {
    searchResult: any;
}

const SearchResultList = (props: SearchResultListProps) => {

    if (props.searchResult) {

        let displayResults = props.searchResult.map((result: any, index: number) => {
            return (
                <div key={index}>
                    <div>{result.competition_name}</div>
                    <div>{result.fixture_datetime}</div>
                    <div>{result.home_team}</div>
                    <div>{result.away_team}</div>
                </div>
            )
        })

        // console.log("props.searchResult: ", props.searchResult)
        // console.log("displayResults: ", displayResults)

        return (
            <div>
                {displayResults}
            </div>
        )
    }

}

export default SearchResultList