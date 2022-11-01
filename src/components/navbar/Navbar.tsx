import React from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import images from "../pages/image/285140926_714141883065798_6286832442935790125_n.jpg"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder="Search..."/>
                    <SearchOutlinedIcon/>
                </div>
                <div className="items">
                    <div className="item">
                        <LanguageOutlinedIcon/>
                        English
                    </div>
                    <div className="item">
                        <DarkModeOutlinedIcon/>
                    </div>
                    <div className="item">
                        <FullscreenExitIcon/>
                    </div>
                    <div className="item">
                        <NotificationsNoneIcon/>
                        <div className="counter">1</div>
                    </div>
                    <div className="item">
                        <ChatBubbleOutlineIcon/>
                        <div className="counter">1</div>
                    </div>
                    <div className="item">

                        <ListOutlinedIcon/>
                        <img src={images} alt="" className="avatar"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;