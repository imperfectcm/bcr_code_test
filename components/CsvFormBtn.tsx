
interface CsvFormBtnProps {
    onFileSubmitHandler: () => Promise<any>;
}

const CsvFormBtn = (props: CsvFormBtnProps) => {
    return (
        <button className="min-w-28 sm:w-1/3 bg-slate-700 hover:bg-sky-500 hover:duration-200 text-neutral-100 py-3 rounded-lg cursor-pointer"
            type="submit" onClick={props.onFileSubmitHandler}>Upload File</button>
    )
}

export default CsvFormBtn;