import FeatureDetails from './FeatureDetails'
import { TbGridDots } from 'react-icons/tb'
import { RiDeleteBinLine } from 'react-icons/ri'

const ShowFeature = ({feature, versions, showDetails, setShowdetails}) => {

    const handleDelete = (featureId) => {
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

    const handleDetails = (featureId) => {
        setShowdetails(featureId);
    }

    return (
        <div>
            
                
            <div className='grid w-full grid-cols-12 gap-4 px-10 py-2 text-sm text-gray-600 border-t-2'>
                <p className='col-span-3 line-clamp-1'>{feature.featureName}</p>
                <p className='col-span-2 line-clamp-1'>{feature.productVersion}</p>
                <p className='col-span-2 line-clamp-1'>{feature.featureType}</p>
                <p className='col-span-4 line-clamp-1'>{feature.featureResume}</p>
                <div className='flex items-center space-x-2 text-xl'>
                    <div
                        onClick={(e) => {handleDetails(feature.featureId)}}
                        className='hover:text-green-600 hover:text-2xl hover:font-bold hover:cursor-pointer'><TbGridDots /></div> 
                    <div
                        className='hover:font-bold hover: hover:text-red-600 hover:cursor-pointer hover:text-2xl'
                        onClick={(e) => {handleDelete(feature.featureId)}}
                        >
                        <RiDeleteBinLine />
                    </div>
            
                </div>
            </div>
            
            {
                showDetails === feature.featureId && (
                    <FeatureDetails feature={feature} versions={versions} setShowdetails={setShowdetails}/>
                )

            }

        
        </div>

     );
}
 
export default ShowFeature;