

interface CsvFormBtnProps {
    onFileSubmitHandler: () => Promise<any>;
    isUploading: boolean;
}

const CsvFormBtn = (props: CsvFormBtnProps) => {
    
    return (
        <button className="min-w-28 sm:w-1/3 bg-slate-700 hover:bg-sky-500 hover:duration-200 text-neutral-100 py-3 rounded-lg cursor-pointer"
            type="submit" onClick={props.onFileSubmitHandler}
            aria-disabled={props.isUploading}>{props.isUploading ? "File Is Uploading..." : "Upload File"}</button>
    )
}

export default CsvFormBtn;