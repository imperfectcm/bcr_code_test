

interface SearchResultListProps {
    searchResult: any;
}

const SearchResultList = (props: SearchResultListProps) => {

    if (props.searchResult) {

        let displayResults = props.searchResult.map((result: any, index: number) => {
            return (
                <div key={index} className="w-full grid grid-rows-2 grid-cols-3 sm:grid-cols-5 gap-1 border border-slate-500 px-1 py-3">
                    <div className="row-start-1 col-start-1 sm:col-start-2 col-span-3 flex justify-between">
                        <span>
                            <div className="sm:text-xl font-bold">Competition:</div>
                            <div>{result.competition_name}</div>
                        </span>
                        <span className="flex flex-col items-end">
                            <div className="sm:text-xl font-bold">Start Time:</div>
                            <div>{result.fixture_datetime.replace(":00.000", "")}</div>
                        </span>
                    </div>

                    <div className="row-start-2 col-start-1 sm:col-start-2 col-span-3 flex justify-between">
                        <span>
                            <div className="sm:text-xl font-bold">Home Team:</div>
                            <div>{result.home_team}</div>
                        </span>
                        <span className="flex flex-col items-end">
                            <div className="sm:text-xl font-bold">Away Team:</div>
                            <div>{result.away_team}</div>
                        </span>
                    </div>

                </div>
            )
        })

        return (
            <div className="absolute w-full flex flex-col items-center z-40 bg-white">
                {displayResults}
            </div>
        )
    }

}

export default SearchResultList