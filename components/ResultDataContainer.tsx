

interface ResultDataContainerProps {
    resultData: any;
}

const ResultDataContainer = (props: ResultDataContainerProps) => {

    let displayData = props.resultData.map((result: any, index: number) => {
        return (
            <div key={index} className="col-span-1 flex-1 flex flex-col place-items-center 
                scale-95 hover:scale-100 duration-200
                bg-sky-900 text-neutral-100
                rounded-lg py-5">

                <div className="text-base sm:text-lg font-bold text-sky-400">Competition:</div>
                <div className="text-sm mb-2 sm:text-base sm:mb-0 sm:mb-0">{result.competition_name}</div>

                <div className="text-base sm:text-lg font-bold text-sky-400">Start Time:</div>
                <div className="text-sm mb-2 sm:text-base sm:mb-0">{result.fixture_datetime.replace(":00.000", "")}</div>

                <div className="text-base sm:text-lg font-bold text-sky-400">Round:</div>
                <div className="text-sm mb-2 sm:text-base sm:mb-0">{result.fixture_round}</div>

                <div className="text-base sm:text-lg font-bold text-sky-400">Home Team:</div>
                <div className="text-sm mb-2 sm:text-base sm:mb-0">{result.home_team}</div>

                <div className="text-base sm:text-lg font-bold text-sky-400">Away Team:</div>
                <div className="text-sm sm:text-base">{result.away_team}</div>

            </div>
        )
    })


    return (
        <section className="lg:w-full grid lg:grid-cols-4 sm:grid-cols-3 grid-flow-dense gap-3">
            {displayData}
        </section>
    )
}


export default ResultDataContainer;