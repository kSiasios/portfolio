const BGDecoration = () => {
  return (
    <div aria-hidden className="opacity-55">
      <div className="w-96 h-52 rounded-full blur-[200px] fixed left-0 top-0 bg-[#A68FFF] opacity-50 animate-spin"></div>
      <div className="w-52 h-96 blur-[200px] fixed left-0 top-0 bg-[#50CAFF] opacity-75 animate-pulse"></div>
      <div className="w-24 h-24 rounded blur-[200px] fixed left-0 top-0 bg-[#50FFC0] animate-pulse"></div>
      {/* <div className="w-52 h-52 rounded-full blur-[200px] fixed right-0 top-0 bg-[#FFCC7E]"><1/div> */}
      <div className="w-96 h-52 rounded-full blur-[200px] fixed right-0 bottom-0 bg-[#DB75FF] opacity-50 animate-spin"></div>
      <div className="w-52 h-96 blur-[100px] fixed right-0 bottom-0 bg-[#FF7EB4] opacity-70 animate-pulse"></div>
      <div className="w-72 h-80 rounded blur-[200px] fixed right-0 bottom-0 bg-[#FF7575] opacity-60"></div>
    </div>
  );
};

export default BGDecoration;
