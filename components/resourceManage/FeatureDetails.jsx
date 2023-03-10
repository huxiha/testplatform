import { AiOutlineCloseSquare } from "react-icons/ai"
import { useState } from "react";

const FeatureDetails = ({feature, versions,setShowdetails}) => {


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
                <h2 className="mb-4 text-2xl font-bold">特性信息</h2>
                <form onSubmit={(e) => (handleSubmit())}>
                    <div className="flex flex-col w-full mb-4 justify-item">
                        <div className="flex items-center w-full mb-4">
                            <div className="w-1/3">
                                <p className="mb-2">特性名称</p>
                                <input type="text" placeholder={feature.featureName} name="featureName" 
                                className="flex-grow px-2 py-1 border border-gray-300 rounded-md outline-none"></input>
                            </div>
                            <div className="w-1/3">
                                <p className="mb-2">特性类型</p>
                                <input type="text" placeholder={feature.featureType} name="featureType" 
                                className="flex-grow px-2 py-1 border border-gray-300 rounded-md outline-none"></input>
                            </div>
                        </div>
                        
                        <div className="mb-4">
                            <p className="mb-2">版本号</p>
                            <select className="px-2 py-2 mr-4 text-gray-300 border rounded-md outline-none">
                                <option value="">版本号</option>
                                {
                                    versions.map((version) => (version === feature.productVersion ? 
                                    (<option key={version} value={version} selected>{version}</option>) : (<option key={version} value={version}>{version}</option>)))
                                }
                            </select>
                        </div>

                        <div className="w-full mb-4">
                            <p className="mb-2">特性简介</p>
                            <input type="text" placeholder={feature.featureResume} name="featureResume"
                            className="flex-grow w-2/3 px-2 py-1 border border-gray-300 rounded-md outline-none"></input>
                        </div>
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
 
export default FeatureDetails;