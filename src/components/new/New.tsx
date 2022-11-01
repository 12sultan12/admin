import React from 'react';
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import images from '../pages/image/no-image-icon-0.jpg'
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';

const New = () => {
    return (
        <div className="new">
            <Sidebar/>
            <div className="newContainer">
                <Navbar/>
                <div className="top">
                    <h1>Add New User</h1> </div>
                <div className="bottom">
                    <div className="left">
                        <img src={images} alt=""/>
                    </div>
                    <div className="right">
                        <form>
                            <div className="formInput">
                                <label htmlFor="file">
                                    Image:<DriveFolderUploadOutlinedIcon className="icon"/></label>
                                <input type="file" id="file" style={{display: "none"}}/>
                            </div>
                            <div className="formInput">
                                <label>Username</label>
                                <input type="text" placeholder="suba_dev"/>
                            </div>
                            <div className="formInput">
                                <label>Name Add surname</label>
                                <input type="text" placeholder="Suba dev"/>
                            </div>
                            <div className="formInput">
                                <label>Email</label>
                                <input type="email" placeholder="suba_dev@ghmail.com"/>
                            </div>
                            <div className="formInput">
                                <label>Phone</label>
                                <input type="text" placeholder="+996 703 577 348"/>
                            </div>
                            <div className="formInput">
                                <label>Password</label>
                                <input type="password"/>
                            </div>
                            <div className="formInput">
                                <label>Address</label>
                                <input type="text" placeholder="Kyrgyzstan, Bishkek"/>
                            </div>
                            <div className="formInput">
                                <label>Country</label>
                                <input type="text" placeholder="СОМ"/>
                            </div>
                            <button>Send</button>
                        </form>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default New;