import { AiOutlineCloseSquare } from "react-icons/ai"
import { useState } from 'react';
import { Button, message, Steps, theme } from 'antd';
import { DatePicker  } from "antd";
import SelectFeature from "./SelectFeature";


const TestplanDetails = ({testplan, setShowdetails, productVers, baselineList}) => {


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

    };
    const [selectedBaseline, setSelectedBaseline] = useState(testplan.baselineName);
    const [selectedFeatures, setSelectedFeatures] = useState(testplan.caseName);

//步骤条配置
    const steps = [
        {
          title: '测试计划基本信息',
        //   content: '<div>a</div>',
        },
        {
          title: '选择基线或用例',
        //   content: 'Second-content',
        },
      ];

      const [current, setCurrent] = useState(0);
    
      const next = () => {
        setCurrent(current + 1);
      };
    
      const prev = () => {
        setCurrent(current - 1);
      };

      const items = steps.map((item) => ({ key: item.title, title: item.title }));
    

    return (
        <div className='absolute top-0 left-0 z-10 w-screen h-screen py-20' style={{ 
            backgroundColor: "rgba(203,214,216,0.4)"}}>
            <div className="relative w-3/4 px-6 py-6 mx-auto bg-white rounded-md shadow-xl">
                <h2 className="mb-4 text-lg font-bold">新增/修改测试计划</h2>
                <div className="w-1/2 mx-auto mb-6">
                    <Steps current={current} items={items} />
                </div>
                
                <div className="border border-blue-300 border-dashed">
                    {
                        current === 0 && (
                            <div className="px-6 mx-auto mt-6">
                            
                            
                            <form onSubmit={(e) => (handleSubmit())}>
                                <div className="flex items-center mb-4 space-x-8">
                                    <div>
                                        <p className="mb-2">计划名称</p>
                                        <input type="text" placeholder={testplan.planName} name="planName" 
                                        className="px-2 py-1 border border-gray-300 rounded-md outline-none"></input>
                                    </div>
                                    <div>
                                        <p className="mb-2">版本号</p>
                                        <select className="px-2 py-1 border border-gray-300 rounded-md outline-none" 
                                        // onChange={(e) => {setSearchedVersion(e.target.value)}}
                                        >
                                            <option value="">请选择版本号</option>
                                            {
                                                productVers.map((ver) => ver===testplan.productVersion ? (
                                                <option key={ver} value={ver} selected>{ver}</option>) : (<option key={ver} value={ver}>{ver}</option>))
                                            }
                                        </select>
                                    </div>
                                    <div>
                                        <p className="mb-2">计划创建时间</p>
                                        <DatePicker 
                                        placeholder={testplan.planCreatetime ? testplan.planCreatetime.split(" ")[0] : "请选择时间"}
                                        // onChange={(value, dateString) => setSearchedCreateTime(dateString)}
                                        />
                                    </div>
                                    <div>
                                        <p className="mb-2">计划创建人</p>
                                        <input type="text" placeholder={testplan.userName} name="userName" 
                                        className="flex-grow px-2 py-1 border border-gray-300 rounded-md outline-none"></input>
                                    </div>
                                </div>
                                <div className="w-full mb-4">
                                    <div className="flex flex-col items-start justify-start w-full space-y-4">
                                        <div className="w-full">
                                            <p className="mb-2">计划简介</p>
                                            <input type="text" placeholder={testplan.planResume} name="planResume" 
                                            className="flex-grow w-full px-2 py-1 border border-gray-300 rounded-md outline-none"></input>
                                        </div>
                                        
                                    </div>
                                </div>
                            </form>
                        </div>
                        )
                    }
                    {
                        current === 1 && (
                            <div className="px-6 mx-auto mt-6">

                                <div className="mb-4">
                                    <p className="mb-2">基线选择</p>
                                    <select className="px-2 py-1 border border-gray-300 rounded-md outline-none" 
                                    onChange={(e) => {setSelectedBaseline(e.target.value)}}
                                    >
                                        <option value="">请选择基线</option>
                                        {
                                            baselineList.map((baseline) => (

                                            selectedBaseline === baseline.baselineName ? 
                                            (<option key={baseline.baselineName} value={baseline.baselineName} selected>{baseline.baselineName}</option> ): (
                                            <option key={baseline.baselineName} value={baseline.baselineName}>{baseline.baselineName}</option>)))
                                        }
                                    </select>
                                </div>
                                <div>
                                    <p className="mb-2">特性选择(可选项，不选默认全部特性)</p>
                                    {
                                        selectedBaseline && 
                                        <SelectFeature 
                                        baselineList={baselineList} 
                                        selectedBaseline={selectedBaseline} 
                                        setSelectedFeatures={setSelectedFeatures}
                                        selectedFeatures={selectedFeatures}/>
                                    }
                                </div>

                            </div>
                        )
                    }
                    
                </div>
                <div 
                onClick={() => setShowdetails(null)}
                className="absolute text-2xl text-red-500 top-4 right-4 hover:cursor-pointer active:text-white">
                    <AiOutlineCloseSquare />
                </div>
                <div style={{ marginTop: 24 }}>
                    {current < steps.length - 1 && (
                    <Button className="bg-blue-500 " type="primary" onClick={() => next()}>
                        下一步
                    </Button>
                    )}
                    {current === steps.length - 1 && (
                    <span className="space-x-4">
                        <Button className="bg-blue-500" type="primary" onClick={() =>{message.success('Processing complete!'); setShowdetails(null)}}>
                            保存
                        </Button>
                        <Button className="bg-blue-500" type="primary" onClick={() =>{message.success('Processing complete!'); setShowdetails(null)}}>
                            保存并执行
                        </Button>
                    </span>

                    )}
                    {current > 0 && (
                    <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                        Previous
                    </Button>
                    )}
                </div>
            
            </div>
        </div>
      );
}
 
export default TestplanDetails;