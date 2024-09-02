import React, { useState } from 'react';
import { Button } from './components/ui/button';
import FileUpload from './FileUpload';
import './index.css';

function App() {
  const [fileData1, setFileData1] = useState<File | null>(null); // Explicitly typing the state
  const [fileData2, setFileData2] = useState<File | null>(null);
  const [analysisResult, setAnalysisResult] = useState<{
    sizeDifference: number;
    largestFile: string;
    daysSinceCreatedFile1: number;
    daysSinceCreatedFile2: number;
  } | null>(null);

  const handleUpload1 = (data: React.SetStateAction<File | null>) => {
    setFileData1(data);
  };

  const handleUpload2 = (data: React.SetStateAction<File | null>) => {
    setFileData2(data);
  };

  const calculateDaysSinceCreation = (file: never) => {
    const fileDate = file.lastModifiedDate || new Date(file.lastModified);
    const currentDate = new Date();
    const diffInTime = currentDate - fileDate;
    return Math.floor(diffInTime / (1000 * 3600 * 24)); // Convert milliseconds to days
  };

  const compareFiles = () => {
    if (fileData1 && fileData2) {
      const sizeDifference = Math.abs(fileData1.size - fileData2.size)/1000000;
      const largestFile = fileData1.size > fileData2.size ? fileData1.name : fileData2.name;
      const daysSinceCreatedFile1 = calculateDaysSinceCreation(fileData1);
      const daysSinceCreatedFile2 = calculateDaysSinceCreation(fileData2);

      const result = {
        sizeDifference,
        largestFile,
        daysSinceCreatedFile1,
        daysSinceCreatedFile2,
      };

      setAnalysisResult(result); // Store the analysis result in state
    } else {
      console.log('Please upload both files.');
    }
  };

  return (
    <div className="text-9xl font-bold  bg-blue-600 text-white h-screen flex flex-col items-center">
<div className='border-white border-8 p-6 rounded-xl h-full m-4 overflow-hidden flex flex-col w-1/2 items-center'>
  <div className='w-full flex items-center justify-between'>
    <h1 className='text-5xl text-left flex-grow'>
      ECOSTRUXURE DATABASE BUILDER
    </h1>
    <h1 className='text-lg p-4 text-black bg-white rounded-xl ml-4'>
      ?
    </h1>
  </div>


        <div className="w-3/4 h-3/4 flex">
          <FileUpload handleUpload={handleUpload1} />
          <FileUpload handleUpload={handleUpload2} />
        </div>

        <div className="bg-black w-5/6 h-1/2 p-4 rounded-3xl border-white border-8"> 

          {analysisResult?
            <div className="text-xl">
              <p>Size Difference: {analysisResult.sizeDifference} megabytes</p>
              <p>Largest File: {analysisResult.largestFile}</p>
              <p>Days Since Created File 1: {analysisResult.daysSinceCreatedFile1} days</p>
              <p>Days Since Created File 2: {analysisResult.daysSinceCreatedFile2} days</p>
            </div>: <h1 className="text-3xl">Analysis</h1>
          }
        </div>

      <Button onClick={compareFiles} className="w-1/4 h-1/5 rounded-2xl hover:bg-blue-200 text-4xl p-4 m-4">
        ANALYZE NOW
      </Button>
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
