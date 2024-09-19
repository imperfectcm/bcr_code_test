

interface CsvFormBtnProps {
    onFileSubmitHandler: () => Promise<any>;
    isUploading: boolean;
}

const CsvFormBtn = (props: CsvFormBtnProps) => {

    return (
        <button className="min-w-28 sm:w-1/3 
        bg-gradient-to-r from-slate-800 to-slate-700 
        hover:from-teal-400 hover:to-blue-500
        text-neutral-100 py-3 rounded-lg cursor-pointer"
            type="submit" onClick={props.onFileSubmitHandler}
            aria-disabled={props.isUploading}>{props.isUploading ? "File Is Uploading..." : "Upload File"}</button>
    )
}

export default CsvFormBtn;