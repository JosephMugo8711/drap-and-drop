import React, {useState, useRef} from 'react'


const DragDropFiles = () => {
    // file state
    const [files, setFiles] = useState(null);
    const inputRef = useRef();


    const handleDragOver = (event) => {
        event.preventDefault();

    }

    const handleDrop = (event) => {
        event.preventDefault();
        setFiles(event.dataTransfer.files)
        // console.log(event);

    }

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
