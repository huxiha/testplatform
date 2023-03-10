import ShowTask from './ShowTask';


const Display = ({tasks, showDetails, setShowdetails, versions, searchedBeginTime, searchedEndTime, searchedName, searchedVersion}) => {

    let taskList = tasks;
    taskList = searchedVersion? taskList.filter((task) => {return task.productVersion === searchedVersion}) : taskList;
    taskList = searchedBeginTime? taskList.filter((task) => {return task.qusetStarttime.split(" ")[0] === searchedBeginTime}) : taskList;
    taskList = searchedEndTime? taskList.filter((task) => {return task.qusetEndtime.split(" ")[0] === searchedEndTime}) : taskList;
    taskList = searchedName? taskList.filter((task) => {return task.questName.includes(searchedName)}) : taskList;

    return (
        <div>
            {
                taskList.map((task) => (<ShowTask task={task} versions={versions} setShowdetails={setShowdetails} showDetails={showDetails}/>))
            }
            
        </div>
    );
}
 
export default Display;