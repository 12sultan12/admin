import React from 'react';
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import Datatable from "../datatable/Datatabe";

const List = () => {
    return (
        <div className="list">
            <Sidebar/>
            <div className="listContainer">
                <Navbar/>
                <Datatable/>
            </div>
        </div>
    );
};

export default List;