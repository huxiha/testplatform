import { AiOutlineCloseSquare } from "react-icons/ai"
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';

const TestcaseDetails = ({testcase, setShowdetails}) => {


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

    const { Dragger } = Upload;
    const props = {
        name: 'file',
        multiple: true,
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        onChange(info) {
          const { status } = info.file;
          if (status !== 'uploading') {
            console.log(info.file, info.fileList);
          }
          if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
          } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
          }
        },
        onDrop(e) {
          console.log('Dropped files', e.dataTransfer.files);
        },
      };

    return (
        <div className='absolute top-0 left-0 z-10 w-screen h-screen py-20' style={{ 
            backgroundColor: "rgba(203,214,216,0.4)"}}>
            <div className="relative w-2/3 px-6 py-2 mx-auto bg-white rounded-md shadow-xl">
                <h2 className="mb-4 text-2xl font-bold">用例信息</h2>
                <form onSubmit={(e) => (handleSubmit())}>
                    <div className="flex items-center mb-4 space-x-8">
                        <div>
                            <p className="mb-2">用例名称</p>
                            <input type="text" placeholder={testcase.caseName} name="caseName" 
                            className="px-2 py-1 border border-gray-300 rounded-md outline-none"></input>
                        </div>
                        <div>
                            <p className="mb-2">用例基线</p>
                            <input type="text" placeholder={testcase.baselineName} name="baselineName" 
                            className="flex-grow px-2 py-1 border border-gray-300 rounded-md outline-none"></input>
                        </div>
                        <div>
                            <p className="mb-2">用例特性</p>
                            <input type="text" placeholder={testcase.featureName} name="featureName" 
                            className="flex-grow px-2 py-1 border border-gray-300 rounded-md outline-none"></input>
                        </div>
                        <div>
                                <p className="mb-2">用例类型</p>
                                <input type="text" placeholder={testcase.caseType} name="caseType" 
                                className="flex-grow px-2 py-1 border border-gray-300 rounded-md outline-none"></input>
                            </div>
                        
                    </div>
                    
                    <div className="w-full mb-4">
                        <div className="flex flex-col items-start justify-start w-full space-y-4">
                            <div className="w-full">
                                <p className="mb-2">用例简介</p>
                                <input type="text" placeholder={testcase.caseResume} name="caseResume" 
                                className="flex-grow w-full px-2 py-1 border border-gray-300 rounded-md outline-none"></input>
                            </div>
                            <div>
                                <p className="mb-2">用例作者</p>
                                <input type="text" placeholder={testcase.userName} name="userName" 
                                className="flex-grow px-2 py-1 border border-gray-300 rounded-md outline-none"></input>
                            </div>
                            
                        </div>
                    </div>
                    
                    
                    <div className="mb-4">
                        <p className="mb-2">上传用例文件</p>
                            
                        <Dragger {...props}>
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined />
                            </p>
                            <p className="ant-upload-text">点击或者拖拽文件到虚线框中上传文件</p>
                            <p className="ant-upload-hint">
                                支持单次和批量上传.
                            </p>
                        </Dragger>
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
 
export default TestcaseDetails;