import { GiHamburgerMenu} from "react-icons/gi"
import { MdOutlineFeaturedPlayList, MdOutlineTask } from "react-icons/md"
import { BsJournalText, BsListTask, BsPencilSquare } from "react-icons/bs"
import { FiCpu, FiDatabase, FiUsers } from "react-icons/fi"
import { TbReportAnalytics } from "react-icons/tb"
import { AiFillBug, AiOutlineHome } from "react-icons/ai"
import { SiKnowledgebase } from "react-icons/si"
import { SlControlPlay } from "react-icons/sl"
 
const NavItem = ({currentLabel, Icon}) => {
    let className = "flex items-center px-6 py-2 my-3 space-x-6 text-xl tracking-wider text-white";
    if(currentLabel === "HOME") {
        className += " bg-dark-200"
    }
    return (
        
        <div className={className}>
            <Icon />
            <div>
                {currentLabel}
            </div>
            
        </div>
    );
}

const SideBar = () => {
    return ( 
        <div>
            <div className="flex items-center justify-between flex-grow px-6 py-4 font-bold text-white">
                <h1 className="text-xl font-bold text-white">GBASE</h1>
                <GiHamburgerMenu className="text-2xl"/>
            
            </div>
            <div>
                <NavItem currentLabel="HOME" Icon={AiOutlineHome}/>
                <NavItem currentLabel="产品管理" Icon={FiDatabase}/>
                <NavItem currentLabel="特性管理" Icon={MdOutlineFeaturedPlayList}/>
                <NavItem currentLabel="任务管理" Icon={ BsListTask }/>
                <NavItem currentLabel="资源管理" Icon={FiCpu}/>
                <NavItem currentLabel="用例管理" Icon={BsJournalText}/>
                <NavItem currentLabel="测试计划" Icon={BsPencilSquare}/>
                <NavItem currentLabel="用例执行" Icon={SlControlPlay}/>
                <NavItem currentLabel="测试报告" Icon={TbReportAnalytics}/>
                <NavItem currentLabel="用户管理" Icon={FiUsers}/>
                <NavItem currentLabel="bug管理" Icon={AiFillBug}/>
                <NavItem currentLabel="知识库" Icon={SiKnowledgebase}/>

            </div>
        </div>
        
     );
}
 
export default SideBar;