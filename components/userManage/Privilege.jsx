import { useState } from "react";

const Privilege = ({privilege, usedPriv, setUsedPriv}) => {
    let className = "px-1 py-1 text-sm text-gray-400 bg-gray-100 rounded-md hover:cursor-pointer";
    if(usedPriv.includes(privilege)){
        className += " bg-green-500 text-white";
    }

    const handleAddPriv = () => {
       if(usedPriv.includes(privilege)) {
        setUsedPriv(usedPriv.filter((priv) => {return priv!==privilege}));
       }else {
        setUsedPriv([...usedPriv, privilege]);
       }
    }
    
    
    return ( 
        <div className={className} onClick={() => handleAddPriv()}>
            <p>{privilege}</p>
        </div>
     );
}
 
export default Privilege;