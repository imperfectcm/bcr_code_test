
interface CsvFormBtnProps {
    onFileSubmitHandler: () => Promise<any>;
}

const CsvFormBtn = (props: CsvFormBtnProps) => {
    return (
        <button type="submit" onClick={props.onFileSubmitHandler}>Upload CSV</button>
    )
}

export default CsvFormBtn;