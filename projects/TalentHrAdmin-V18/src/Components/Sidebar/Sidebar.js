import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,

    SidebarContent,

  } from "react-pro-sidebar";
  //import icons from react icons
import {SiCraftcms} from 'react-icons/si'
import {MdWorkOutline, MdEmail} from 'react-icons/md'
  import { FaUserAlt} from 'react-icons/fa'
  import {AiFillDashboard} from 'react-icons/ai'
import {BsCardChecklist} from 'react-icons/bs'
  import 'react-pro-sidebar/dist/css/styles.css';
  
  import './Sidebar.css'
const Sidebar = () => {
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(true);

    //create a custom function that will change menucollapse state from false to true and true to false

  return (
    <>
    <div id="header">
        {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>

          </SidebarHeader>
          <SidebarContent >
            <Menu iconShape="square" >
              <MenuItem active={true} icon={<FaUserAlt />} onMouseEnter={()=>setMenuCollapse(false)} onMouseLeave={()=>setMenuCollapse(true)}>
               <Link to='/RecruiterMaster' >Recruiter Master</Link> 
              </MenuItem>
              <MenuItem active={true} icon={<AiFillDashboard/>} onMouseEnter={()=>setMenuCollapse(false)} onMouseLeave={()=>setMenuCollapse(true)}>
               <Link to='/Dashbaord'>New JD addition</Link> 
              </MenuItem>
              <MenuItem active={true} icon={<BsCardChecklist />} onMouseEnter={()=>setMenuCollapse(false)} onMouseLeave={()=>setMenuCollapse(true)}>
               <Link to='/JdMaster'>JD master</Link> 
              </MenuItem>
              <MenuItem active={true} icon={<MdWorkOutline />} onMouseEnter={()=>setMenuCollapse(false)} onMouseLeave={()=>setMenuCollapse(true)}>
               <Link to='/useridlevl'>User ID level changes</Link> 
              </MenuItem>
              <MenuItem active={true} icon={<AiFillDashboard />} onMouseEnter={()=>setMenuCollapse(false)} onMouseLeave={()=>setMenuCollapse(true)}>
               <Link to='/userdashboard'>User dashboard</Link> 
              </MenuItem>
              <MenuItem active={true} icon={<SiCraftcms />} onMouseEnter={()=>setMenuCollapse(false)} onMouseLeave={()=>setMenuCollapse(true)}>
               <Link to='/landing-page'>CMS/Landing page edit/content edit </Link> 
              </MenuItem>
              <MenuItem active={true} icon={<AiFillDashboard />} onMouseEnter={()=>setMenuCollapse(false)} onMouseLeave={()=>setMenuCollapse(true)}>
               <Link to='/report'>Offer tracking Sheet</Link> 
              </MenuItem>
              <MenuItem active={true} icon={<MdEmail />} onMouseEnter={()=>setMenuCollapse(false)} onMouseLeave={()=>setMenuCollapse(true)}>
               <Link to='/cpanel.com'>Email Cpanel</Link> 
              </MenuItem>
              <MenuItem active={true} icon={<AiFillDashboard />} onMouseEnter={()=>setMenuCollapse(false)} onMouseLeave={()=>setMenuCollapse(true)}>
               <Link to='/freelance'>Freelance contract agreement filling</Link> 
              </MenuItem>
              <MenuItem active={true} icon={<AiFillDashboard />} onMouseEnter={()=>setMenuCollapse(false)} onMouseLeave={()=>setMenuCollapse(true)}>
               <Link to='/client-agreement'>client agreement filling</Link> 
              </MenuItem>
              <MenuItem active={true} icon={<AiFillDashboard />} onMouseEnter={()=>setMenuCollapse(false)} onMouseLeave={()=>setMenuCollapse(true)}>
               <Link to='/invoicing'>invoicing</Link> 
              </MenuItem>
              <MenuItem active={true} icon={<AiFillDashboard />} onMouseEnter={()=>setMenuCollapse(false)} onMouseLeave={()=>setMenuCollapse(true)}>
               <Link to='/client-master'>Client master</Link> 
              </MenuItem>
              <MenuItem active={true} icon={<AiFillDashboard />} onMouseEnter={()=>setMenuCollapse(false)} onMouseLeave={()=>setMenuCollapse(true)}>
               <Link to='/'>user adhar card/GST registration certificate database</Link> 
              </MenuItem>
              <MenuItem active={true} icon={<AiFillDashboard />} onMouseEnter={()=>setMenuCollapse(false)} onMouseLeave={()=>setMenuCollapse(true)}>
               <Link to='/list-of-candidate'>List of candidates</Link> 
              </MenuItem>
              <MenuItem active={true} icon={<AiFillDashboard />} onMouseEnter={()=>setMenuCollapse(false)} onMouseLeave={()=>setMenuCollapse(true)}>
               <Link to='/create-email'>Create templates for sending emails</Link> 
              </MenuItem>
              <MenuItem active={true} icon={<AiFillDashboard />} onMouseEnter={()=>setMenuCollapse(false)} onMouseLeave={()=>setMenuCollapse(true)}>
               <Link to='/'>User information</Link> 
              </MenuItem>

            </Menu>
          </SidebarContent>
    
    
        </ProSidebar>
      </div>
    </>
  )
}

export default Sidebar