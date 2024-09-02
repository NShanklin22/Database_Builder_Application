import React, { useState } from 'react';
import { Button } from './components/ui/button';
import FileUpload from './FileUpload';
import './index.css';

function App() {
  const [fileData1, setFileData1] = useState<File | null>(null); // Explicitly typing the state

  const handleUpload1 = (data: React.SetStateAction<File | null>) => {
    setFileData1(data);
  };

  return (
    <div className="text-9xl font-bold  bg-blue-600 text-white h-screen flex flex-col items-center justify-center align-middle">
      <div>
        <h1 className='text-5xl text-left flex-grow'>
          ECOSTRUXURE DATABASE BUILDER
        </h1>
      </div>
      <div className='border-white h-3/4 border-8 p-6 rounded-xl m-4 overflow-hidden flex flex-col justify-center w-1/2 items-center align-middle'>
        <h1 className='text-5xl text-left flex-grow'>
          Step 1: Upload engineering equipment file
        </h1>
        <div className="w-3/4 h-3/4 flex">
          <FileUpload handleUpload={handleUpload1} />
        </div>

        <div className='w-full h-10 m-4 flex justify-between items-center'>
          <Button className="w-1/4 h-1/5 rounded-2xl  hover:bg-blue-200 text-4xl p-6 m-4">
            BACK
          </Button>
          <Button className="w-1/4 h-1/5 rounded-2xl hover:bg-blue-200 text-4xl p-6 m-4">
            NEXT
          </Button>
        </div>
      </div>
    </div>

  );
}

// Example compareData function
function compareData(data1: any, data2: any) {
  // Implement your comparison logic here
  // This is just an example
  return data1 === data2 ? 'Files are identical' : 'Files are different';
}

export default App;
