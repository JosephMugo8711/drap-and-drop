import React, {useState, useRef} from 'react'


// Functional component called DragDropFiles
const DragDropFiles = () => {
    // State to hold the selected files
    const [files, setFiles] = useState(null);
    // Reference to the file input element
    const inputRef = useRef();


    // Function to handle the drag over event
    const handleDragOver = (event) => {
        // Prevent the default behavior of drag over
        event.preventDefault();

    }

    //  Function to handle the drop event
    const handleDrop = (event) => {
        //  Prevent the default behavior of drop
        event.preventDefault();
        // Set the selected files from the dataTransfer object of the event
        setFiles(event.dataTransfer.files)
        // console.log(event);

    }

    //  Function to handle the file upload

    const handleUpload = () => {
        // Placeholder function for handling the upload of files
    };


    //  If files are selected, render the list of files with upload and cancel buttons
    if (files) return (
        <div className='uploads'>
            <ul>
                {Array.from(files).map((file, idx) => <li key={idx}>{file.name}</li>)}
            </ul>
            <div className='actions'>
                <button onClick={() => setFiles(null)}>Cancel</button>
                <button onClick={handleUpload}>Upload</button>

            </div>

        </div>
    )

    //  If no files are selected, render the dropzone area and file selection button
  return (
    <>
    {/* Conditional rendering
    if we have selected files
    display name of those files
    if we dont have will display div 
    (dropzone) where user can drop files
     */}
      {
        !files && (
            <div 
                 className='dropzone'
                 onDragOver={handleDragOver}
                 onDrop={handleDrop}
            > 
               <h1>Drag and Drop Files to Upload</h1>
               <h1>Or</h1>
               <input 
                 type='file'
                 multiple
                 onChange={(event) => setFiles(event.target.files)}
                 hidden
                 ref={inputRef}
               
               />
               <button onClick={() => inputRef.current.click()}>Select Files</button>
            </div>
        )
      }
      
    </>
  )
}

export default DragDropFiles
