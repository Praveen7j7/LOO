import React from 'react';
import Image from 'next/image';
import {
    BellIcon,
    CalendarIcon,
    ChatIcon,
    ChevronDownIcon,
    ClockIcon,
    DesktopComputerIcon,
    HomeIcon,
    ShoppingBagIcon,
    UserGroupIcon,
    UsersIcon,
    ViewGridIcon,
} from "@heroicons/react/solid";
import {
    FlagIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline";
import SidebarRow from './SidebarRow';
function Sidebar() {
  return (
    
    <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px] ">
        <div className='flex '>
        <Image 
          // onClick={NaN}
          className="rounded-full cursor-pointer"
          src={"https://drive.google.com/uc?export=view&id=1hy6V3Pwmit0xTvC7hYJeDQOK6L8MwrB7"}
          width="60"
          height="60"
          layout="fixed"
        />
        {/* 1hLXNDXiGjATMkZzJ3fB0nn7smryn4P0u */}
        
        <SidebarRow title={"PVD"}/>
        </div>
        <SidebarRow Icon={UsersIcon} title="Friends" />
        <SidebarRow Icon={UserGroupIcon}title="Groups" />
        <SidebarRow Icon={ShoppingBagIcon} title="Marketplace" />
        <SidebarRow Icon={DesktopComputerIcon} title="Watch" />
        <SidebarRow Icon={CalendarIcon} title="Events" />
        <SidebarRow Icon={ClockIcon} title="Memories" />
        <SidebarRow Icon={ChevronDownIcon} title="See More" />
        
      
    </div>
  )
}

export default Sidebar
