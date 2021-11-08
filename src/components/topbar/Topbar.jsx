import { Language, NotificationsNone, Settings } from '@material-ui/icons'
import React from 'react'
import './topbar.css'
const Topbar = () => {
    return (
        <div className="topbar">
           <div className="topbarWrapper">
                <div className="topbarLeft">
                    <span className="logo">
                        Administrator
                    </span>
                    </div>
                <div className="topbarRight">
                    <div className="topbarIcon">
                        <NotificationsNone/>
                        <span className="topbarIconBadge">
                            2
                        </span>
                    </div>


                    <div className="topbarIcon">
                     <Language/>
                        <span className="topbarIconBadge">
                            2
                        </span>
                    </div>


                    <div className="topbarIcon">
                        <Settings/>
                        <span className="topbarIconBadge">
                            2
                        </span>
                    </div>

<img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className='topAvatar' />
                    </div>
           </div>
        </div>
    )
}

export default Topbar
