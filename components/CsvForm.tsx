"use client";


const acceptableFileTypes = ".csv";

const CsvForm = () => {

    const onFileChangeHandler = (e: any) => {
        const file = e.target.files[0];
        console.log(file);
        // if (file) {
        //     const reader = new FileReader();
        //     reader.onload = (e: any) => {
        //         const csvData = e.target.result;
        //         // process CSV data here
        //     };
        //     reader.readAsText(file);
        // } else {
        //     console.log('No file selected.');
        // }
    }

    return (
        <section>
            <label htmlFor="csvFileSelector"></label>
            <input type="file" id="csvFileSelector" accept={acceptableFileTypes} onChange={onFileChangeHandler} />
        </section>
    )
}

export default CsvForm;