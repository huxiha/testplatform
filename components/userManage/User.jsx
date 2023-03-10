import { AiFillHome, AiOutlineUserAdd } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { useEffect, useState } from "react";
import Display from "./Display";
import UserDetails from "./UserDetails";

const User = () => {
    const [userInfos, setUserInfos] = useState([]);
    const [departments, setDepartments] = useState([]);
    const [roles, setRoles] = useState([]);
    const [privileges, setPrivileges] = useState([]);
    
    const [searchedUser, setSearchedUser] = useState('');
    const [searchedDept, setSearchedDept] = useState('');
    
    
    const [showDetails,setShowdetails] = useState(null);   

    useEffect(() => {
        async function fetchData() {
            const resRoles = await fetch("http://127.0.0.1:4523/m1/2355117-0-default/userMenge/getRoles");
            const roles = await resRoles.json()
            const resPriv = await fetch("http://127.0.0.1:4523/m1/2355117-0-default/userMenge/getPrivilege")
            const privs = await resPriv.json();
            const resUser = await fetch("http://127.0.0.1:4523/m1/2355117-0-default/userManage/info");
            const userInfos = await resUser.json();
            const resDept = await fetch("http://127.0.0.1:4523/m1/2355117-0-default/userMenge/getDepartment");
            const departments = await resDept.json();
            
            setRoles(roles.roleName);
            setPrivileges(privs.privName);
            setUserInfos(userInfos.Data);
            setDepartments(departments.deptName)
        }
        fetchData();
        

      
    }, []);
    
    
    return (
       
        <div className={`px-8 py-4`} style={{height: "90%"}}>


            {
                showDetails === "add" && (
                    <UserDetails user={{
                        "userName": "",
                        "userPrivilege": [],
                        "userDepartment": "",
                        "userResume": "",
                        "userRoles": [],
                        "userAccount": ""
                      }} roles={roles} privileges={privileges} departments={departments} setShowdetails={setShowdetails}/>
                )
            }

             {/* 标题部分 */}
            <h2 className="mb-4 text-2xl font-bold">用户管理</h2>
            <div className="flex items-center mb-4 space-x-2 text-sm text-gray-400">
                <AiFillHome />
                <p> {'->'} </p> 
                <p className="text-gray-700">用户管理</p>
            </div>              
             {/* 筛选部分  */}
            <div className="flex items-center justify-between">
                <select className="px-2 py-2 mr-4 rounded-md outline-none" onChange={(e) => {setSearchedDept(e.target.value)}}>
                    <option value="">部门查询</option>
                    {
                        departments.map((department) => (<option key={department} value={department}>{department}</option>))
                    }
                </select>
                
                <div className="flex items-center space-x-4">
                    <div className="flex items-center flex-grow px-2 py-1 bg-white rounded-md">
                        <AiOutlineSearch />
                        <form>
                            <input 
                                type='text' 
                                name='搜索用户' 
                                placeholder="搜索用户" 
                                className="flex-grow px-4 py-1 outline-none "
                                onChange={(e) => {setSearchedUser(e.target.value)}}></input>
                        </form>
                    </div>
                    
                    <div 
                    className="px-1 py-1 text-3xl font-bold text-white bg-blue-500 rounded-md hover:cursor-pointer active:bg-blue-300"
                    onClick={() => setShowdetails("add")}
                    >
                        <AiOutlineUserAdd />
                    </div>
                </div>                    
                
            </div>

            {/* 用户列表展示 */}
           
            <div className="mt-8 overflow-y-scroll bg-white rounded-xl" style={{height: "75%"}}>
                <div className='grid w-full grid-cols-12 gap-4 px-10 py-6'>
                    <p className="col-span-2">用户账号</p>
                    <p className="col-span-2 ">用户名</p>
                    <p className="col-span-2 ">部门名称</p>
                    <p className="col-span-5 ">备注</p>
                    <p className="col-span-1">操作</p>
                </div>
                <div>
                    <Display 
                    users={userInfos} 
                    showDetails={showDetails} 
                    setShowdetails={setShowdetails} 
                    roles={roles}
                    departments={departments}
                    privileges={privileges}
                    searchedDept={searchedDept}
                    searchedUser={searchedUser}
                    />
                </div>
                
            </div>            
         
        </div>
     );
}
 
export default User;
