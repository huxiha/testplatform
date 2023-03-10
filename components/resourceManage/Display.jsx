import ServerCard from "./ServerCard";

const Display = ({servers, searchedIp}) => {

    let serverList = servers;
    serverList = searchedIp? serverList.filter((server) => {return server.resourceIp.includes(searchedIp)}) : serverList;

    
    return (

        <div className="grid grid-cols-4 gap-3 px-2 py-2">
            {
                serverList.map((server) => (
                    <ServerCard  
                    server={server}
                    key={server.resourceId}/>
                ))
                
            }
        </div>

       
     );
}
 
export default Display;