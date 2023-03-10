
import ShowUser from './ShowUser';

const Display = ({users, roles, showDetails, setShowdetails, departments, privileges, searchedDept, searchedUser}) => {

    let userLists = users;
    userLists = searchedDept? userLists.filter((user) => {return user.userDepartment === searchedDept}) : userLists;
    userLists = searchedUser ? userLists.filter((user) => {return user.userName.includes(searchedUser)}) : userLists;
    

    return (
        <div>
            {
                userLists.map((user) => (
                    <ShowUser 
                    user={user} 
                    roles={roles} 
                    privileges={privileges} 
                    showDetails={showDetails} 
                    setShowdetails={setShowdetails}
                    departments={departments}/>
                ))
            }
        </div>
     );
}
 
export default Display;