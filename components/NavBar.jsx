import { signOut } from "next-auth/react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsBell } from "react-icons/bs";
import { GoSignOut } from "react-icons/go"

const NavBar = ({name}) => {

    const handleSignOut = ()=> {
        signOut();
    }

    return ( 
        <div className="flex items-center justify-between flex-grow px-8 py-4 space-x-10 text-base tracking-wider text-center text-gray-500 bg-white">
            <p>welcome to the Automated Test Platform</p>
            <div className="flex items-center flex-grow px-2 py-1 border border-gray-500 rounded-md">
                <AiOutlineSearch />
                <input type="search" placeholder="search for something..." className="flex-grow px-4 py-1 outline-none "></input>
            </div>            
            <div className="relative">
                <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full "></div>
                <div className="text-xl">
                    <BsBell />
                </div>
            </div>
            <div className="flex items-center space-x-4">
                <p>{`Hello, ${name}`}</p>
                <div className="text-xl focus:cursor-pointer" onClick={()=>handleSignOut()}>
                    <GoSignOut />
                </div>
                
            </div>

            
        </div>
     );
}
 
export default NavBar;