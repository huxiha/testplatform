import { GiHamburgerMenu} from "react-icons/gi"
import { MdOutlineFeaturedPlayList, MdOutlineTask } from "react-icons/md"
import { BsJournalText, BsListTask, BsPencilSquare } from "react-icons/bs"
import { FiCpu, FiDatabase, FiUsers } from "react-icons/fi"
import { TbReportAnalytics } from "react-icons/tb"
import { AiFillBug, AiOutlineHome } from "react-icons/ai"
import { SiKnowledgebase } from "react-icons/si"
import { SlControlPlay } from "react-icons/sl"
import Link from "next/link"
import { useRouter } from "next/router"
 
const NavItem = ({currentLabel, Icon, routeName, currentRoute}) => {
    let className = "flex items-center px-6 py-2 my-3 space-x-6 text-xl tracking-wider text-white";
    if(routeName === currentRoute) {
        className += " bg-dark-200"
    }
    return (
        
        <div className={className}>
            <Icon />
            <div>
                <Link href={routeName}>{currentLabel}</Link>
            </div>
            
        </div>
    );
}

const SideBar = () => {

    const {pathname} = useRouter();

    return ( 
        <div>
            <div className="flex items-center justify-between flex-grow px-6 py-4 font-bold text-white">
                <h1 className="text-xl font-bold text-white">GBASE</h1>
                <GiHamburgerMenu className="text-2xl"/>
            
            </div>
            <div>
                <NavItem currentLabel="HOME" Icon={AiOutlineHome} routeName="/" currentRoute={pathname}/>
                <NavItem currentLabel="产品管理" Icon={FiDatabase} routeName="/productManage" currentRoute={pathname}/>
                <NavItem currentLabel="特性管理" Icon={MdOutlineFeaturedPlayList} routeName="/featureManage" currentRoute={pathname}/>
                <NavItem currentLabel="任务管理" Icon={ BsListTask } routeName="/taskManage" currentRoute={pathname}/>
                <NavItem currentLabel="资源管理" Icon={FiCpu} routeName="/resourceManage" currentRoute={pathname}/>
                <NavItem currentLabel="用例管理" Icon={BsJournalText} routeName="/testcaseManage" currentRoute={pathname}/>
                <NavItem currentLabel="测试计划" Icon={BsPencilSquare} routeName="/testplanManage" currentRoute={pathname}/>
                {/* <NavItem currentLabel="用例执行" Icon={SlControlPlay} routeName="/executeManage" currentRoute={pathname}/> */}
                <NavItem currentLabel="测试报告" Icon={TbReportAnalytics} routeName="/testReport" currentRoute={pathname}/>
                <NavItem currentLabel="用户管理" Icon={FiUsers} routeName="/userManage" currentRoute={pathname}/>
                <NavItem currentLabel="bug管理" Icon={AiFillBug} routeName="/bugManage" currentRoute={pathname}/>
                <NavItem currentLabel="知识库" Icon={SiKnowledgebase} routeName="/knowlegeManage" currentRoute={pathname}/>

            </div>
        </div>
        
     );
}
 
export default SideBar;