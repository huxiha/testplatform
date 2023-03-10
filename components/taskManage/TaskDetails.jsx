import { AiOutlineCloseSquare } from "react-icons/ai"
import { useState } from "react";
import { DatePicker } from "antd"

const TaskDetails = ({task, versions, setShowdetails}) => {


    const handleSubmit = () => {
        // e.preventDefault();
        const option =  {
            method: "POST",
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify("")
        };
        // fetch("").then();
        alert("提交成功！");
        setShowdetails(null);

    }

    return (
        <div className='absolute top-0 left-0 z-10 w-screen h-screen py-20' style={{ 
            backgroundColor: "rgba(203,214,216,0.4)"}}>
            <div className="relative w-2/3 px-6 py-2 mx-auto bg-white rounded-md shadow-xl">
                <h2 className="mb-4 text-2xl font-bold">任务信息</h2>
                <form onSubmit={(e) => (handleSubmit())}>
                    <div className="flex items-center mb-4 space-x-8">
                        <div>
                            <p className="mb-2">任务名称</p>
                            <input type="text" placeholder={task.questName} name="taskName" 
                            className="px-2 py-1 border border-gray-300 rounded-md outline-none"></input>
                        </div>
                        <div>
                            <p className="mb-2">任务简介</p>
                            <input type="text" placeholder={task.questResume} name="questList" 
                            className="flex-grow px-2 py-1 border border-gray-300 rounded-md outline-none"></input>
                        </div>
                        
                    </div>
                    
                    <div>
                        <div className="flex items-center mb-4 space-x-6">
                            <div>
                                <p className="mb-2">版本号</p>
                                <select className="px-2 py-2 mr-4 text-gray-300 border rounded-md outline-none">
                                    <option value="">版本号</option>
                                    {
                                        versions.map((version) => (version === task.productVersion ? 
                                        (<option key={version} value={version} selected>{version}</option>) : (<option key={version} value={version}>{version}</option>)))
                                    }
                                </select>
                            </div>
                            <div>
                                <p className="mb-2">产品类型</p>
                                <input type="text" placeholder={task.productType} name="productType" 
                                className="flex-grow px-2 py-1 border border-gray-300 rounded-md outline-none"></input>
                            </div>
                            
                        </div>
                    </div>

                                    
                    <div className="flex items-center mb-4 space-x-6">
                        <div>
                            <p className="mb-2">任务开始时间</p>
                            <div className="px-2 py-1 bg-white rounded-md">
                                <DatePicker 
                                placeholder={task.qusetStarttime ? task.qusetStarttime.split(" ")[0] : "开始时间"}
                                
                                />
                            </div>
                        </div>
                        <div>
                            <p className="mb-2">任务结束时间</p>
                            <div className="px-2 py-1 bg-white rounded-md">
                                <DatePicker 
                                placeholder={task.qusetEndtime ? task.qusetEndtime.split(" ")[0] : "结束时间"}
                                
                                />
                            </div>
                        
                        </div>
                    </div>
                    
                    
                    
                    <div className="mb-4">
                        <p className="mb-2">任务内容</p>
                        <textarea rows={3} cols={50} placeholder={task.questList} className="px-4 py-4 border border-gray-300 outline-none"></textarea>
                    </div>
                
                    <div className="flex justify-center">
                        <button
                        className="px-4 py-2 text-white rounded-md bottom-2 bg-gradient-to-r from-blue-400 to-blue-600 active:bg-graident-r active:from-blue-600 active:to-blue-700">提交</button>
                    </div>
                    
                </form>
                <div 
                onClick={() => setShowdetails(null)}
                className="absolute text-2xl text-red-500 top-4 right-4 hover:cursor-pointer active:text-white">
                    <AiOutlineCloseSquare />
                </div>
            
            </div>
        </div>
      );
}
 
export default TaskDetails;