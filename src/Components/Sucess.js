

import React from 'react';

function Sucess(props) {
  return (
    <div className="fixed flex justify-center w-full px-4 py-2 transform -translate-x-1/2 top-1/4 left-1/2">
      <div className="relative max-w-md px-10 py-2 mx-auto mt-3 text-white bg-gray-900 border border-gray-900 shadow-lg rounded-xl">
      <div className="flex items-center">
          <svg className="w-6 h-6 mr-3 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <strong className="font-semibold">Success!</strong>
        </div>
        <p className="mt-2">{props.message}</p>
      </div>
    </div>
  );
}

export default Sucess;
