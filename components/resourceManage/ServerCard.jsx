
const ServerCard = ({server}) => {


    return (
        <div className="px-4 py-6 bg-gray-300 rounded-lg shadow-md">
            <div>
                <h3 className="mb-4 text-lg font-bold">{server.resourceIp}</h3>
                <div className="mb-3">
                    <h4 className="font-bold">CPU</h4>
                    <div>{server.cpuType}</div>
                    <div className="w-2/3 border border-gray-400 rounded-xl">
                        <div className="px-1 bg-green-300 rounded-l-xl" style={{width:"50%"}}>used:50%</div>
                    </div>
                </div>
                <div className="mb-3">
                    <h4 className="font-bold">DISK</h4>
                    <div><span>total: </span>{server.diskTotal}</div>
                    <div className="w-2/3 border border-gray-400 rounded-xl">
                        <div className="px-1 bg-green-300 rounded-l-xl" style={{width:"30%"}}>used:30%</div>
                    </div>
                </div>
                <div>
                    <h4 className="font-bold">MEM</h4>
                    <div><span>total: </span>{server.memTotal}</div>
                    <div className="w-2/3 border border-gray-400 rounded-xl">
                        <div className="px-1 bg-red-300 rounded-l-xl" style={{width:"80%"}}>used:80%</div>
                    </div>
                </div>
                
            </div>

        
        </div>

     );
}
 
export default ServerCard;