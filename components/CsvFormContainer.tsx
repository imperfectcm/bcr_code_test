"use client";

import Papa from "papaparse";
import { useState } from "react";
import CsvForm from "./CsvForm";
import CsvFormBtn from "./CsvFormBtn";
import { Flip, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


// csv form acceptable file
const acceptableFileTypes = ".csv";

const CsvFormContainer = () => {

    const [csvData, setCsvData] = useState<any[]>([]);
    const [fileName, setFileName] = useState<string>("");
    const [fileSize, setFileSize] = useState<string>("");
    const [isUploading, setIsUploading] = useState(false);
    const [hasFile, setHasFile] = useState<boolean>(false);


    // csv upload file change
    const onFileChangeHandler = (acceptedFiles: File[]) => {
        const file = acceptedFiles[0];

        try {
            if (file) {
                Papa.parse(file, {
                    skipEmptyLines: true,
                    header: true,
                    complete: function (result) {
                        setCsvData(result.data);
                    }
                })
            }
        } catch (error: any) {
            return { error: error.message };
        }
    }


    // success toast reminder
    const toastPop = async (data: any) => {
        toast(`${data.message}`, {
            position: "top-center",
            autoClose: 2000,
            pauseOnHover: false,
            transition: Flip,
            onClose: () => location.reload()
        })
    }


    // fail toast reminder
    const errorToastPop = async (data: any) => {
        toast.error(`${data.message}`, {
            position: "top-center",
            autoClose: 2000,
            pauseOnHover: false,
            transition: Flip,
            onClose: () => location.reload()
        })
    }


    const onFileSubmitHandler = async () => {

        setIsUploading(true);

        try {
            const res = await fetch("/api/all-data", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(csvData),
            })

            if (!res.ok) {
                const data = await res.json();
                await errorToastPop(data)
                return ({ message: "Failed to upload files." })
            }

            const data = await res.json();

            setIsUploading(false);

            await toastPop(data);

            return data;

        } catch (error: any) {
            return { error: error.message }
        };
    }


    return (
        <article className="mb-5 flex flex-col items-center">
            <CsvForm
                acceptableFileTypes={acceptableFileTypes}
                onFileChangeHandler={onFileChangeHandler}
                fileName={fileName}
                setFileName={setFileName}
                fileSize={fileSize}
                setFileSize={setFileSize}
                setHasFile={setHasFile}
            />
            <CsvFormBtn
                hasFile={hasFile}
                onFileSubmitHandler={onFileSubmitHandler}
                isUploading={isUploading}
            />
        </article>
    )
}

export default CsvFormContainer;