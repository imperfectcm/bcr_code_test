

interface ResultDataContainerProps {
    resultData: string;
}

const ResultDataContainer = (props: ResultDataContainerProps) => {

    console.log(props.resultData);


    return (
        <div>
            <h2>Search Results:</h2>
            {/* <p>{props.resultData}</p> */}
        </div>
    )
}

export default ResultDataContainer;