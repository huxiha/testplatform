import Privilege from "./Privilege";
import { AiOutlineCloseSquare } from "react-icons/ai"
import { useState } from "react";

const UserDetails = ({user, roles, privileges, departments, setShowdetails}) => {

    const [usedPriv, setUsedPriv] = useState(user.userPrivilege);
    const [modifyPassWd, setModifyPasswd] = useState(false);
    
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
        <div className='absolute top-0 left-0 z-10 w-screen h-screen py-2' style={{ 
            backgroundColor: "rgba(203,214,216,0.4)"}}>
            <div className="relative w-2/3 px-6 py-2 mx-auto bg-white rounded-md shadow-xl">
                <h2 className="mb-4 text-2xl font-bold">用户信息</h2>
                <form onSubmit={(e) => (handleSubmit())}>
                    <div className="flex items-center mb-4 space-x-4">
                        <div>
                            <p className="mb-2">用户账号</p>
                            <input type="text" placeholder={user.userAccount} name="userAccount" 
                            className="flex-grow px-2 py-1 border border-gray-300 rounded-md outline-none "></input>
                        </div>
                        <div>
                            <p className="mb-2">用户名</p>
                            <input type="text" placeholder={user.userName} name="userName" 
                            className="flex-grow px-2 py-1 border border-gray-300 rounded-md outline-none"></input>
                        </div>
                        <div>
                            <p className="mb-2">部门名称</p>
                            
                            <select className="px-2 py-1 text-gray-400 border border-gray-300 rounded-md">
                                <option value={null}>null</option>
                                {
                                    departments.map((department) => user.userDepartment === department ?
                                    (<option value={department} selected>{department}</option>): (<option value={department}>{department}</option>))
                                }
                            </select>
                        
                        </div>
                        
                    </div>

                    <div className="mb-4">
                        <p className="mb-2">密码</p>
                        <div className="flex items-center space-x-4">
                            <p className="w-1/6 px-2 py-1 text-center bg-gray-300 rounded-md active:bg-white hover:cursor-pointer"
                            onClick={(e) => setModifyPasswd(!modifyPassWd)}
                            >{modifyPassWd ? "点击关闭" :"点击修改密码"}</p>
                            {modifyPassWd ? (<input type="password" placeholder='输入密码' name="userPassword" 
                            className="w-1/3 px-2 py-1 bg-gray-100 rounded-md outline-none"></input>) : <></>}
                        </div>
                    </div>
                    
                    <div>
                        <p className="mb-2">用户角色</p>
                        <div className="flex items-center mb-4 space-x-6">
                            <select className="px-2 py-1 text-gray-400 bg-gray-100 rounded-md">
                                <option value={null}>null</option>
                                {
                                    roles.map((role) => user.userRoles[0] === role ? (<option value={role} selected>{role}</option>): (<option value={role}>{role}</option>))
                                }
                            </select>
                            <select className="px-2 py-1 text-gray-400 bg-gray-100 rounded-md">
                                <option value={null}>null</option>
                                {
                                    roles.map((role) => user.userRoles[1] === role ? (<option value={role} selected>{role}</option>): (<option value={role}>{role}</option>))
                                }
                            </select>
                        </div>
                        
                        
                    </div>
                    <div className="mb-4">
                        <p className="mb-2">用户权限</p>
                        <div className="grid grid-cols-10 gap-2">
                            {
                                privileges.map((privilege) => (<Privilege privilege={privilege} usedPriv={usedPriv} setUsedPriv={setUsedPriv} key={privilege}/>))
                            }
                        </div>
                        
                    </div>
                    <div className="mb-4">
                        <p className="mb-2">备注</p>
                        <input type="text" placeholder={user.userResume} className="w-2/3 px-2 py-1 border border-gray-300 outline-none"></input>
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
 
export default UserDetails;