// biome-ignore lint/style/useImportType: <explanation>
import React from "react";

const UnderConstruction: React.FC = () => {
  return (
    <div className="bg-gray-800 shadow-lg rounded-lg p-8 max-w-md text-center">
      <h1 className="text-3xl font-bold mb-4 text-yellow-500">
        🚧 Under Construction 🚧
      </h1>
      <p className="text-gray-400 mb-6">
        We are working hard to bring you a great experience. Check back soon!
      </p>
    </div>
  );
};

export default UnderConstruction;
