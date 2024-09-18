
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
        <section>

            <Dropzone accept={{ "text/csv": [".csv"] }} onDrop={onDropHandler} >
                {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
                    <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        {isDragActive ? "Drop your .csv file here!" : 'Click me or drag a .csv file to upload!'}
                        {isDragReject && "File type not accepted, sorry!"}
                    </div>
                )}
            </Dropzone>

            {props.fileName ? `${props.fileName} - ${props.fileSize}kb` : ""}

        </section>
    );
}

export default CsvForm;