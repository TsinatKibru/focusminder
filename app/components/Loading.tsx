const Loading = () => {
    return (
      <div className="flex items-center justify-center fixed inset-0 bg-white bg-opacity-75 z-50">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-gray-900"></div>
      </div>
    );
  };
  
  export default Loading;