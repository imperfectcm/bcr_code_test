
import { Dispatch, SetStateAction } from 'react';
import Dropzone from 'react-dropzone'


interface CsvFormProps {
    acceptableFileTypes: string;
    onFileChangeHandler: (e: any) => void | { error: any };
    fileName: string;
    setFileName: Dispatch<SetStateAction<string>>
    fileSize: string;
    setFileSize: Dispatch<SetStateAction<string>>;
}

const CsvForm = (props: CsvFormProps) => {

    const onDropHandler = (acceptedFiles: File[]) => {
        props.onFileChangeHandler(acceptedFiles);
        props.setFileName(acceptedFiles[0].name);
        props.setFileSize((acceptedFiles[0].size / 1024).toFixed(2));
    }

    return (
        <section className='w-full flex flex-col items-center mb-3'>

            <Dropzone accept={{ "text/csv": [".csv"] }} onDrop={onDropHandler} >
                {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
                    <div {...getRootProps()} className='csv-dropzone lg:text-2xl w-full min-h-32 lg:min-h-60'>
                        <input {...getInputProps()} />
                        {isDragActive ? <div>Drop your .csv file here!</div> : <div>Click me or drag a .csv file to upload!</div>}
                        {isDragReject && <div className='text-red-700'>File type not accepted, sorry!</div>}
                    </div>
                )}
            </Dropzone>

            {props.fileName ? <div>{props.fileName} - {props.fileSize}kb</div> : ""}

        </section>
    );
}

export default CsvForm;