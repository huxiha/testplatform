import { AiOutlineCloseSquare } from "react-icons/ai"
import { DatePicker } from "antd";

const ProductDetails = ({product, setShowdetails}) => {


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
                <h2 className="mb-4 text-2xl font-bold">产品信息</h2>
                <form onSubmit={(e) => (handleSubmit())}>
                    <div className="flex flex-col items-start justify-start mb-4">
                        <div className="flex items-center w-full mb-4 space-x-6">
                            <div className="w-1/3">
                                <p className="mb-2">产品名称</p>
                                <input type="text" placeholder={product.productName} name="productName" 
                                className="w-full px-2 py-1 border border-gray-300 rounded-md outline-none"></input>
                            </div>
                            <div className="w-1/3">
                                <p className="mb-2">版本号</p>
                                <input type="text" placeholder={product.productVersion} name="productVersion" 
                                className="flex-grow w-full px-2 py-1 border border-gray-300 rounded-md outline-none py-1border"></input>
                            </div>
                        </div>
                        <div className="flex items-center w-full mb-4 space-x-6">
                            <div className="w-1/3">
                            <p className="mb-2">产品类型</p>
                                <input type="text" placeholder={product.productType} name="productType" 
                                className="w-full px-2 py-1 border border-gray-300 rounded-md outline-none"></input>
                            </div>
                            <div className="w-1/3">
                                <p className="mb-2">产品路径</p>
                                <input type="text" placeholder={product.productPath} name="productPath" 
                                className="flex-grow w-full px-2 py-1 border border-gray-300 rounded-md outline-none py-1border"></input>
                            </div>
                        </div>
                        <div className="w-full mb-4">
                            <p className="mb-2">产品时间</p>
                            <div className="w-1/3 py-1 bg-white rounded-md ">
                                <DatePicker 
                                    placeholder={product.productTime ? product.productTime.split(" ")[0] : "开始时间"}
                                    size="large"
                                    onChange={(value, dateString) => {handleChangeBegin(value, dateString)}}
                                />
                            </div>
                        </div>
                        
                        <div className="w-full">
                            <p className="mb-2">产品简介</p>
                            <input type="text" placeholder={product.productResume} name="productResume" 
                            className="w-full px-2 py-1 border border-gray-300 rounded-md outline-none "></input>
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
 
export default ProductDetails;