

import React from 'react';

function Error(props) {
  return (
    <div className="fixed flex justify-center w-full px-4 py-2 transform -translate-x-1/2 top-1/4 left-1/2">
      <div className="relative max-w-md px-10 py-2 mx-auto mt-3 text-white bg-gray-900 border border-gray-900 shadow-lg rounded-xl">
        <div className="flex items-center">
          <svg className="w-6 h-6 mr-3 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
          <strong className="font-semibold">Error!</strong>
        </div>
        <p className="mt-2">{props.message}</p>
      </div>
    </div>
  );
}

export default Error;
