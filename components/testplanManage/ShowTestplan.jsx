import { TbGridDots } from 'react-icons/tb'
import { RiDeleteBinLine } from 'react-icons/ri'
import TestplanDetails from './TestplanDetails'
import { BsPlayCircle } from 'react-icons/bs'
import { BiStopCircle } from "react-icons/bi"
import { useState } from 'react'

const ShowTestplan = ({testplan, showDetails, setShowdetails, productVers, baselineList}) => {

    const [play, setplay] = useState(false);
    const handleDelete = (taskId) => {
        // const option = {
        //     method: "POST",
        //     headers: {'Content-Type':'application/json'},
        //     body: JSON.stringify(userAccount)
        // }
        // fetch("http://127.0.0.1:4523/m1/2355117-0-default/userManage/delete", option).then((res) => {
        //     return res.json();
        // }).then((data) => {
        //     if(data.code === 200) {
        //         alert("删除成功");
        //     }else {
        //         alert("删除失败");
        //     }
        // })
        alert("删除成功");
        
    }


    let colorChange = "col-span-1 line-clamp-1 "
    const changeColor = () => {
        if(testplan.planStatus === "running") {
            return colorChange + "text-yellow-400";
        } else if(testplan.planStatus === "Stoped") {
            return colorChange + "text-Red-400";
        } else {
            return colorChange + "text-green-400";
        }
    }

    return (

        <div>

            <div className='grid w-full grid-cols-12 gap-4 px-10 py-2 text-sm text-gray-600 border-t-2'>
                    <p className='col-span-2 line-clamp-1'>{testplan.planName}</p>
                    <p className='col-span-2 line-clamp-1'>{testplan.productVersion}</p>
                    <p className='col-span-2 line-clamp-1'>{testplan.planCreatetime}</p>
                    <p className='col-span-3 line-clamp-1'>{testplan.planResume}</p>
                    <p className='col-span-1 line-clamp-1'>{testplan.userName}</p>
                    <p className={changeColor()}>{testplan.planStatus}</p>                    
                    <div className='flex items-center space-x-2 text-xl'>
                        <div
                            onClick={(e) => setShowdetails(testplan.planId)}
                            className='hover:text-green-600 hover:text-2xl hover:font-bold hover:cursor-pointer'>
                                <TbGridDots />
                        </div>

                        <div> 
                        {
                            play ? (
                            <div
                                onClick={(e) => setplay(!play)}
                            className='hover:text-green-600 hover:text-2xl hover:font-bold hover:cursor-pointer'>   
                                <BsPlayCircle />
                            </div>) : (
                            <div
                            onClick={(e) => setplay(!play)}
                            className='hover:text-red-600 hover:text-2xl hover:font-bold hover:cursor-pointer'>
                                <BiStopCircle />
                            </div>
                            )
                            
                        }
                        </div>
                        
                        
                        <div
                            className='hover:font-bold hover: hover:text-red-600 hover:cursor-pointer hover:text-2xl'
                            onClick={(e) => {handleDelete(testplan.planName)}}>
                            <RiDeleteBinLine />
                        </div>
                
                    </div>
            </div>
                    
                
            
            {
                showDetails === testplan.planId && (
                    <TestplanDetails testplan={testplan} 
                    setShowdetails={setShowdetails}
                    productVers={productVers}
                    baselineList={baselineList}
                    
                    />
                )

            }

            
        </div>
        
     );
}
 
export default ShowTestplan;