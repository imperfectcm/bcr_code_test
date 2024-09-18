"use client";

import Papa from "papaparse";
import { useEffect, useState } from "react";
import CsvForm from "./CsvForm";
import CsvFormBtn from "./CsvFormBtn";


const acceptableFileTypes = ".csv";

const CsvFormContainer = () => {

    const [csvData, setCsvData] = useState<any[]>([]);
    const [fileName, setFileName] = useState<string>("");
    const [fileSize, setFileSize] = useState<string>("");

    const onFileChangeHandler = (acceptedFiles: File[]) => {
        const file = acceptedFiles[0];
        console.log("file: ", file)

        try {
            if (file) {
                Papa.parse(file, {
                    skipEmptyLines: true,
                    header: true,
                    complete: function (result) {
                        setCsvData(result.data);
                        console.log("Finished: ", csvData)
                    }
                })
            }
        } catch (error: any) {
            return { error: error.message };
        }
    }


    const onFileSubmitHandler = async () => {
        try {
            const res = await fetch("/api/rugby", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(csvData),
            })

            if (!res.ok) {
                return ({ message: "Failed to upload files." })
            }

            const data = await res.json();
            console.log("Response: " + data.message)
            return data;

        } catch (error: any) {
            return { error: error.message }
        };
    }


    return (
        <article>
            <CsvForm
                acceptableFileTypes={acceptableFileTypes}
                onFileChangeHandler={onFileChangeHandler}
                fileName={fileName}
                setFileName={setFileName}
                fileSize={fileSize}
                setFileSize={setFileSize}
            />
            <CsvFormBtn
                onFileSubmitHandler={onFileSubmitHandler}
            />
        </article>
    )
}

export default CsvFormContainer;