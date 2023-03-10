import { AiFillHome } from "react-icons/ai";
import { MdAdd } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { useEffect, useState } from "react";
import Display from "./Display";


const Resource = () => {

    const [serverList, setServerList] = useState([]);
    const [searchedIp, setSearchedIp] = useState("");
    const [showDetails,setShowdetails] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const resServers = await fetch("http://127.0.0.1:4523/m1/2355117-0-default/resourceManege/info");
            const servers = await resServers.json();
            setServerList(servers.Data);
        } 
        fetchData();
    },[])
    
    return (
       
        <div className={`px-8 py-4`} style={{height: "90vh"}}>


            {/* {
                showDetails === "add" && (
                    <FeatureDetails 
                    server={{
                        "featureResume":"",
                        "featureType":"",
                        "featureName":"",
                        "featureId":0,
                        "productVersion":""
                      }}
                    versions={productVersList}
                    setShowdetails={setShowdetails}/>
                )
            } */}

             {/* 标题部分 */}
            <h2 className="mb-4 text-2xl font-bold">资源管理</h2>
            <div className="flex items-center mb-4 space-x-2 text-sm text-gray-400">
                <AiFillHome />
                <p> {'->'} </p> 
                <p className="text-gray-700">资源管理</p>
            </div>              
             {/* 筛选部分  */}
            <div className="flex items-center space-x-4">
                <div className="flex items-center px-2 py-1 bg-white rounded-md">
                    <AiOutlineSearch />
                    <form>
                        <input 
                            type='text' 
                            name='搜索服务器ip' 
                            placeholder="搜索服务器ip" 
                            className="px-4 py-1 outline-none "
                            onChange={(e) => {setSearchedIp(e.target.value)}}
                            ></input>
                    </form>
                </div>
                
                <div 
                className="px-1 py-1 text-3xl font-bold text-white bg-blue-500 rounded-md hover:cursor-pointer active:bg-blue-300"
                onClick={() => setShowdetails("add")}
                >
                    <MdAdd />
                </div>
            </div>                    
                
            

            {/* 资源列表展示 */}
            <div className="my-4 overflow-y-scroll bg-white rounded-xl" style={{height: "75%"}}>
                <Display servers={serverList} searchedIp={searchedIp}/>
            </div>
                      
         
        </div>
     );
}
 
export default Resource;
