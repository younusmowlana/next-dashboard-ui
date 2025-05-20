import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 ">
      {/* Search Bar*/}
      <div className="hidden md:flex items-center bg-white rounded-full px-4 py-2 shadow-sm border border-gray-200 focus-within:border-purple-500 focus-within:ring-1 focus-within:ring-purple-500 transition-all duration-200">
        <Image 
          src="/search.png" 
          alt="Search" 
          width={14} 
          height={14} 
          className="mr-2 opacity-60" 
        />
        <input 
          type="text" 
          placeholder="Search..." 
          className="outline-none text-sm w-64 placeholder-gray-400"
        />
      </div>

      {/* Icons and User*/}
      <div className="flex items-center gap-5">
        <div className="bg-white rounded-full w-9 h-9 flex items-center justify-center cursor-pointer shadow-sm hover:bg-gray-100 transition-colors duration-200">
          <Image src="/message.png" alt="Messages" width={18} height={18} />
        </div>
        
        <div className="bg-white rounded-full w-9 h-9 flex items-center justify-center cursor-pointer shadow-sm hover:bg-gray-100 transition-colors duration-200 relative">
          <Image src="/announcement.png" alt="Notifications" width={18} height={18} />
          <div className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs font-medium">1</div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="flex flex-col text-right"> 
            <span className="text-sm font-medium text-gray-800">Younus</span>
            <span className="text-xs text-gray-500">Admin</span>
          </div>
          <Image 
            src="/avatar.png" 
            alt="User Avatar" 
            width={40} 
            height={40} 
            className="rounded-full cursor-pointer border-2 border-white shadow-sm hover:border-purple-200 transition-colors duration-200"
          />
        </div>
      </div> 
    </div>
  );
};

export default Navbar;