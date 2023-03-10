import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { MdAdd } from "react-icons/md"
import { DatePicker  } from "antd";
import Display from "./Display";
import { useEffect, useState } from "react";
import TestplanDetails from "./TestplanDetails";

const TestPlan = () => {

    const [testplanList, setTestplanList] = useState([]);
    const [productVersList, setProductVersList] = useState([]);
    const [baselineList, setBaselineList] = useState([]);


    const [searchedBaseline, setSearchedBaseline] = useState('');
    const [searchedCreateTime, setSearchedCreateTime] = useState('');
    const [searchedName, setSearchedName] = useState('');
    
    

    const [showDetails,setShowdetails] = useState(null); 

    useEffect(() => {
        async function fetchData() {
            const resTestplans = await fetch("http://127.0.0.1:4523/m1/2355117-0-default/testplanManege/info");
            const testplans = await resTestplans.json();
            const resProVers = await fetch("http://127.0.0.1:4523/m1/2355117-0-default/productManege/info");
            const proVers = await resProVers.json();
            const resBaselines = await fetch("http://127.0.0.1:4523/m1/2355117-0-default/baselineManage/info");
            const baselines = await resBaselines.json();
            setTestplanList(testplans.Data);
            setProductVersList(proVers.Data.map((ver) => {return ver.productVersion}));
            setBaselineList(baselines.Data);
            
        } 
        fetchData();
    },[])


    return ( 
        <div>
            <div className={`px-8 py-4`} style={{height: "90vh"}}>

                {
                    showDetails === "add" && (
                        <TestplanDetails testplan={{
                            "planName":"",
                            "planResume":"",
                            "planCreatetime":"",
                            "userName":"",
                            "productVersion":"",
                            "planid":0,
                            "planStatus":"",
                            "reportId":"",
                            "planType":"",
                            "caseName":[],
                            "baselineName":""
                        }} 
                        setShowdetails={setShowdetails}
                        productVers={productVersList}
                        baselineList={baselineList}
                        
                        />
                    )
                }

                {/* 标题部分 */}
                <h2 className="mb-4 text-2xl font-bold">测试计划管理</h2>
                <div className="flex items-center mb-4 space-x-2 text-sm text-gray-400">
                    <AiFillHome />
                    <p> {'->'} </p> 
                    <p className="text-gray-700">测试计划</p>
                </div>              
                {/* 筛选部分  */}
                <div className="flex items-center justify-between">

                    <div className="flex items-center space-x-4">   
                        <select className="px-2 py-2 mr-4 rounded-md outline-none" 
                        onChange={(e) => {setSearchedBaseline(e.target.value)}}
                        >
                            <option value="">基线查询</option>
                            {
                                baselineList.map((baseline) => (<option key={baseline.baselineName} value={baseline.baselineName}>{baseline.baselineName}</option>))
                            }
                        </select>

                        <div className="px-2 py-1 bg-white rounded-md">
                            <DatePicker 
                            bordered={false} 
                            placeholder="计划创建时间"
                            onChange={(value, dateString) => setSearchedCreateTime(dateString)}
                            />
                        </div>

                        <select className="px-2 py-2 mr-4 rounded-md outline-none" 
                        // onChange={(e) => {setSearchedVersion(e.target.value)}}
                        >
                            <option value="">状态查询</option>
                            {
                                // productVersionList.map((ver) => (<option key={ver} value={ver}>{ver}</option>))
                            }
                        </select>
                    </div>
                    <div className="flex items-center space-x-4">

                        <div className="flex items-center flex-grow px-2 py-1 bg-white rounded-md">
                            <AiOutlineSearch />
                            <form>
                                <input 
                                    type='text' 
                                    name='搜索计划名称' 
                                    placeholder="搜索计划名称" 
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
                        <p className="col-span-2">测试计划名称</p>
                        <p className="col-span-2 ">版本号</p>
                        <p className="col-span-2 ">创建时间</p>
                        <p className="col-span-3">计划简介</p>
                        <p className="col-span-1">创建人</p>
                        <p className="col-span-1">计划状态</p>
                        <p className="col-span-1">操作</p>
                    </div>
                    <div>
                        <Display 
                        testplans={testplanList}
                        searchedBaseline={searchedBaseline}
                        searchedCreateTime={searchedCreateTime}
                        searchedName={searchedName}
                        productVers={productVersList}
                        baselineList={baselineList}
                        showDetails={showDetails}
                        setShowdetails={setShowdetails}
                        />
                    </div>
                    
                </div>            

            </div>
        </div>
     );
}
 
export default TestPlan;