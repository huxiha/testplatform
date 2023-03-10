import { TbGridDots } from 'react-icons/tb'
import { RiDeleteBinLine } from 'react-icons/ri'
import TestcaseDetails from './TestcaseDetails'

const ShowTestcase = ({testcase, showDetails, setShowdetails}) => {
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

    const handleDetails = (caseId) => {
        setShowdetails(caseId);
    }

    

    return (

        <div>
            
                
            <div className='grid w-full grid-cols-12 gap-4 px-10 py-2 text-sm text-gray-600 border-t-2'>
                    <p className='col-span-2 line-clamp-1'>{testcase.caseName}</p>
                    <p className='col-span-2 line-clamp-1'>{testcase.featureName}</p>
                    <p className='col-span-2 line-clamp-1'>{testcase.baselineName}</p>
                    <p className='col-span-4 line-clamp-1'>{testcase.caseResume}</p>
                    <p className='col-span-1 line-clamp-1'>{testcase.userName}</p>
                    <div className='flex items-center space-x-2 text-xl'>
                        <div
                            onClick={(e) => {handleDetails(testcase.caseId)}}
                            className='hover:text-green-600 hover:text-2xl hover:font-bold hover:cursor-pointer'><TbGridDots /></div> 
                        <div
                            className='hover:font-bold hover: hover:text-red-600 hover:cursor-pointer hover:text-2xl'
                            onClick={(e) => {handleDelete(testcase.caseName)}}>
                            <RiDeleteBinLine />
                        </div>
                
                    </div>
            </div>
                    
                
            
            {
                showDetails === testcase.caseId && (
                    <TestcaseDetails testcase={testcase} setShowdetails={setShowdetails}/>
                )

            }

            
        </div>
        
     );
}
 
export default ShowTestcase;