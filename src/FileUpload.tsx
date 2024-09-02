import React, { useState } from 'react';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';

function FileUpload({ handleUpload }) {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event: { target: { files: any[]; }; }) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    handleUpload(file); // Pass the selected file data to the parent component
  };

  return (
    <div className="flex flex-col items-center w-full h-full p-4 overflow-clip">
      <div className='bg-blue-900 w-full h-full p-2 flex flex-col align-left items-center justify-center rounded-xl overflow-clip'>
        {selectedFile ? (
          <div className='flex w-full'>
            <div className='flex flex-col text-bold h-full'>
              <div className=''>
                <h1 className='text-2xl'>Name:</h1>
                <h1 className='text-xl p-4 h-1/2'>{selectedFile.name}</h1>
              </div>
              <div className=''>
                <h1 className='text-2xl h-1/4'>Size:</h1>
                <h1 className='text-xl p-4 h-1/2'>{selectedFile.size} bytes</h1>
              </div>
              <div className=''>
                <h1 className='text-2xl h-1/4'>Type:</h1>
                <h1 className='text-xl p-4 h-1/2'>{selectedFile.type}</h1>
              </div>
            </div>
          </div>
        ) : (
          <h1 className='text-3xl justify-center items-center'>Please select a file</h1>
        )}
      </div>
      <Input type="file" onChange={handleFileChange} className="m-8" />
    </div>
  );
}

export default FileUpload;
