import React from 'react';

export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-800 flex items-center justify-center z-50">
      <div className="relative">
        <div className="w-20 h-20 border-4 border-white rounded-full animate-spin border-t-transparent"></div>
        <div className="mt-4 text-white text-xl font-bold">DastaanTrails</div>
      </div>
    </div>
  );
}