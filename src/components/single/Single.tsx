import React from 'react';
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import IMAGE from "../pages/image/photo_2022-08-27_11-48-46.jpg"
import Chart from "../chart/Chart";
import Table from "../table/Table";
import List from "../table/Table";

const Single = () => {
    return (
        <div className="single">
            <Sidebar/>
            <div className="singleContainer">
                <Navbar/>
                <div className="top">
                    <div className="left">
                        <div className="editButton">
                            Edit
                        </div>
                        <h1 className="title">Information</h1>
                        <div className="item">
                            <img src={IMAGE} alt="" className="itemImg"
                            />
                            <div className="details">
                                <h1 className="itemTitle">Suba Dev</h1>
                                <div className="detailItem">
                                    <span className="itemKey">Email:</span>
                                    <span className="itemValue">suba@gmail.com</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Phone:</span>
                                    <span className="itemValue">+996 703 577</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Address:</span>
                                    <span className="itemValue">Kyrgyzstan, Bishkek</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">country:</span>
                                    <span className="itemValue">СОМ</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <Chart aspect={3 / 1} title="User Spending ( Last 6 Months )"/>
                    </div>
                </div>
                <div className="bottom">
                    <List title="Last Transactions"/>
                </div>
            </div>
        </div>
    );
};

export default Single;