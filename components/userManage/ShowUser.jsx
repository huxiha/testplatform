import { TbGridDots } from 'react-icons/tb'
import { RiDeleteBinLine } from 'react-icons/ri'
import UserDetails from './UserDetails'

const ShowUser = ({user, roles, privileges, showDetails, setShowdetails, departments}) => {
    const handleDelete = (userAccount) => {
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

    const handleDetails = (user) => {
        setShowdetails(user.userName)
    }

    

    return (



        <div>
            
            {
                showDetails === null && (
                    <div className='grid w-full grid-cols-12 gap-4 px-10 py-2 text-sm text-gray-600 border-t-2'>
                        <p className='col-span-2 line-clamp-1'>{user.userAccount}</p>
                        <p className='col-span-2 line-clamp-1'>{user.userName}</p>
                        <p className='col-span-2 line-clamp-1'>{user.userDepartment}</p>
                        <p className='col-span-5 line-clamp-1'>{user.userResume}</p>
                        <div className='flex items-center space-x-2 text-xl'>
                            <div
                                onClick={(e) => {handleDetails(user)}}
                                className='hover:text-green-600 hover:text-2xl hover:font-bold hover:cursor-pointer'><TbGridDots /></div> 
                            <div
                                className='hover:font-bold hover: hover:text-red-600 hover:cursor-pointer hover:text-2xl'
                                onClick={(e) => {handleDelete(user.userName)}}>
                                <RiDeleteBinLine />
                            </div>
                    
                        </div>
                    </div>
                )
            }   
            
                    
                
            
            {
                showDetails === user.userName && (
                    <UserDetails user={user} roles={roles} privileges={privileges} departments={departments} setShowdetails={setShowdetails}/>
                )

            }

            
        </div>
        
     );
}
 
export default ShowUser;