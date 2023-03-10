import { Cascader } from 'antd';
import { AiFillHome, AiOutlineSearch } from "react-icons/ai"
import { MdAdd } from "react-icons/md"
import { useState, useEffect } from 'react';
import Display from './Display';
import TestcaseDetails from './TestcaseDetails';


const Testcase = () => {
    const [testcaseList, setTestcaseList] = useState([]);
    const [baseLineList, setBaseLineList] = useState([]);
    const [featureList, setFeatureList] = useState([]);

    const [searchedBaseline, setSearchedBaseline] = useState("");
    const [searchedFeature, setSearchedFeature] = useState("");
    const [searchedName, setSearchedName] = useState('');

    const options = baseLineList.map((baseline) => {return {
        value: baseline,
        label: baseline,
        children: featureList.map((feature) => {return {
            value: feature,
            label: feature,
            children: [],
        }})
        }
        
    })

    const onChange = (value) => {
        
        if(value){
            setSearchedBaseline(value[0]);
            setSearchedFeature(value[1]);
        }
        else {
            setSearchedBaseline("");
            setSearchedFeature("");
        }
        
    };

    const [showDetails,setShowdetails] = useState(null); 

    useEffect(() => {
        async function fetchData() {
            const restestcases = await fetch("http://127.0.0.1:4523/m1/2355117-0-default/caseManage/info");
            const testcases = await restestcases.json();
            setTestcaseList(testcases.Data);
            setBaseLineList(testcases.Data.map((testcase) => { return testcase.baselineName}));
            setFeatureList(testcases.Data.map((testcase) => { return testcase.featureName}));
        } 
        fetchData();
    },[])
      

    return ( 


        <div className={`px-8 py-4`} style={{height: "90vh"}}>

            {
                showDetails === "add" && (
                    <TestcaseDetails testcase={{
                        "caseId":0,
                        "caseName":"",
                        "caseType":"",
                        "caseResume":"",
                        "userName":"",
                        "baselineName":"",
                        "featureName":"",
                        "casePath":""
                      }} setShowdetails={setShowdetails}/>
                )
            }

             {/* 标题部分 */}
            <h2 className="mb-4 text-2xl font-bold">用例管理</h2>
            <div className="flex items-center mb-4 space-x-2 text-sm text-gray-400">
                <AiFillHome />
                <p> {'->'} </p> 
                <p className="text-gray-700">用例管理</p>
            </div>              
             {/* 筛选部分  */}
            <div className="flex items-center justify-between">

                <Cascader options={options} onChange={onChange} placeholder="请选择基线特性" />
                
                <div className="flex items-center space-x-4">
                    <div className="flex items-center flex-grow px-2 py-1 bg-white rounded-md">
                        <AiOutlineSearch />
                        <form>
                            <input 
                                type='text' 
                                name='搜索用例名称' 
                                placeholder="搜索用例名称" 
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
                    <p className="col-span-2">用例名称</p>
                    <p className="col-span-2 ">特性</p>
                    <p className="col-span-2 ">基线</p>
                    <p className="col-span-4">用例简介</p>
                    <p className="col-span-1">作者</p>
                    <p className="col-span-1">操作</p>
                </div>
                <div>
                    <Display 
                    testcases={testcaseList}
                    searchedFeature={searchedFeature}
                    searchedBaseline={searchedBaseline}
                    searchedName={searchedName}
                    showDetails={showDetails}
                    setShowdetails={setShowdetails}
                    />
                </div>
                
            </div>            
         
        </div>
     );
}
 
export default Testcase
