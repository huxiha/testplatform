import { AiFillHome } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { MdAdd } from "react-icons/md";
import { useEffect, useState } from "react";
import { DatePicker  } from "antd";
import Display from "./Display";
import TaskDetails from "./TaskDetails";

const Task = () => {

    const [tasksList, setTasksList] = useState([]);
    const [productVersList, setProductVersList] = useState([]);

    const [searchedVersion, setSearchedVersion] = useState('');
    const [searchedBeginTime, setSearchedBeginTime] = useState('');
    const [searchedEndTime, setSearchedEndTime] = useState('');
    const [searchedName, setSearchedName] = useState('');
    

    const [showDetails,setShowdetails] = useState(null); 

    useEffect(() => {
        async function fetchData() {
            const restasks = await fetch("http://127.0.0.1:4523/m1/2355117-0-default/questManege/info");
            const tasks = await restasks.json();
            const resProVers = await fetch("http://127.0.0.1:4523/m1/2355117-0-default/productManege/info");
            const proVers = await resProVers.json();
            setTasksList(tasks.Data);
            setProductVersList(proVers.Data.map((ver) => {return ver.productVersion}));
            
        } 
        fetchData();
    },[])
    
    return (
       
        <div className={`px-8 py-4`} style={{height: "90vh"}}>


            {
                showDetails === "add" && (
                    <TaskDetails task={{
                        "questName":"",
                        "questResume":"",
                        "qusetEndtime":"",
                        "qusetStarttime":"",
                        "questList":"",
                        "productType":"",
                        "productVersion":"",
                        "questId":""
                      }} versions={productVersList} setShowdetails={setShowdetails}/>
                )
            }

             {/* 标题部分 */}
            <h2 className="mb-4 text-2xl font-bold">任务管理</h2>
            <div className="flex items-center mb-4 space-x-2 text-sm text-gray-400">
                <AiFillHome />
                <p> {'->'} </p> 
                <p className="text-gray-700">任务管理</p>
            </div>              
             {/* 筛选部分  */}
            <div className="flex items-center justify-between">
                <select className="px-2 py-2 mr-4 text-gray-300 rounded-md outline-none"
                onChange={(e) => {setSearchedVersion(e.target.value)}}
                >
                    <option value="">版本号查询</option>
                    {
                        productVersList.map((version) => (<option key={version} value={version}>{version}</option>))
                    }
                </select>
                <div className="px-2 py-1 bg-white rounded-md">
                    <DatePicker 
                    bordered={false} 
                    placeholder="开始时间"
                    onChange={(value, dateString) => setSearchedBeginTime(dateString)}
                    />
                </div>
                <div className="px-2 py-1 bg-white rounded-md">
                    <DatePicker 
                    bordered={false} 
                    placeholder="结束时间"
                    onChange={(value, dateString) => setSearchedEndTime(dateString)}
                    />
                </div>
                
                <div className="flex items-center space-x-4">
                    <div className="flex items-center flex-grow px-2 py-1 bg-white rounded-md">
                        <AiOutlineSearch />
                        <form>
                            <input 
                                type='text' 
                                name='搜索任务名称' 
                                placeholder="搜索任务名称" 
                                className="flex-grow px-4 py-1 outline-none placeholder:text-gray-300"
                                onChange={(e) => {setSearchedName(e.target.value)}}
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
                
            </div>

            {/* 任务列表展示 */}
           
            <div className="mt-8 overflow-y-scroll bg-white rounded-xl" style={{height: "75%"}}>
                <div className='grid w-full grid-cols-12 gap-4 px-10 py-6'>
                    <p className="col-span-2">任务名称</p>
                    <p className="col-span-2 ">版本号</p>
                    <p className="col-span-2 ">开始时间</p>
                    <p className="col-span-2 ">结束时间</p>
                    <p className="col-span-3">任务简介</p>
                    <p className="col-span-1">操作</p>
                </div>
                <div>
                    <Display 
                    tasks={tasksList} 
                    versions={productVersList} 
                    showDetails={showDetails} 
                    setShowdetails={setShowdetails}
                    searchedBeginTime={searchedBeginTime}
                    searchedEndTime={searchedEndTime}
                    searchedName={searchedName}
                    searchedVersion={searchedVersion}
                    />
                </div>
                
            </div>            
         
        </div>
     );
}
 
export default Task;


