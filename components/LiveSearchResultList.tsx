

interface LiveSearchResultListProps {
    liveSearchResult: any;
}

const LiveSearchResultList = (props: LiveSearchResultListProps) => {

    if (props.liveSearchResult) {

        let displayResults = props.liveSearchResult.map((result: any, index: number) => {
            return (
                <div key={index} className="w-full grid grid-rows-2 grid-cols-3 sm:grid-cols-5 gap-1 border border-slate-500 px-1 py-3">
                    <div className="row-start-1 col-start-1 sm:col-start-2 col-span-3 flex justify-between">
                        <span>
                            <div className="text-sm font-bold">Competition:</div>
                            <div className="text-sm">{result.competition_name}</div>
                        </span>
                        <span className="flex flex-col items-end">
                            <div className="text-sm font-bold">Start Time:</div>
                            <div className="text-sm">{result.fixture_datetime.replace(":00.000", "")}</div>
                        </span>
                    </div>

                    <div className="row-start-2 col-start-1 sm:col-start-2 col-span-3 flex justify-between">
                        <span>
                            <div className="text-sm font-bold">Home Team:</div>
                            <div className="text-sm">{result.home_team}</div>
                        </span>
                        <span className="flex flex-col items-end">
                            <div className="text-sm font-bold">Away Team:</div>
                            <div className="text-sm">{result.away_team}</div>
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

export default LiveSearchResultList;