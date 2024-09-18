

interface ResultDataContainerProps {
    resultData: any;
}

const ResultDataContainer = (props: ResultDataContainerProps) => {

    if (props.resultData.length > 0) {

        let resultData = props.resultData.map((result: any, index: number) => {
            return (
                <div key={index} className="col-span-1 flex-1 flex flex-col place-items-center scale-95 hover:scale-100 duration-200 rounded-lg data-card py-5">
                    <div className="text-lg font-bold text-cyan-100">Competition:</div>
                    <div>{result.competition_name}</div>
                    <div className="text-lg font-bold text-cyan-100">Start Time:</div>
                    <div>{result.fixture_datetime.replace(":00.000", "")}</div>
                    <div className="text-lg font-bold text-cyan-100">Home Team:</div>
                    <div>{result.home_team}</div>
                    <div className="text-lg font-bold text-cyan-100">Away Team:</div>
                    <div>{result.away_team}</div>
                </div>
            )
        })


        return (
            <section className="lg:w-full grid lg:grid-cols-4 sm:grid-cols-3 grid-flow-dense gap-3">
                {resultData}
            </section>
        )
    }
}

export default ResultDataContainer;