import React from "react";
import { useEffect, useState } from "react";
import imgr from "./Instagram_Icon.png";
import "./feed.css";

const Banner =() =>{

    // const [data, setData] = useState();

    // useEffect(()=>{
    //     fetch('https://graph.instagram.com/me/media?fields=id,caption&access_token=IGQVJVMHBBUVU2cUh5WWl0b2Ntb0d3aHN5a2YyWXAtb2gxd1Myb0xEZAVhsUHRzMnJpZAWY4UU5DNDlrZADZAXQ3NUdXlUOGJ4S1BITGU3bjZA0R3BsVmxabG41WnBXWHF6R19pX21raDhB')
    //     .then((response)=>{
    //         if(response.ok){
    //             return response.json();
    //         }
    //         throw response;
    //     })
    //     .then ((data)=>{
    //         setData(data);
    //         console.log(data.data[0].id);
    //     })
    //     .catch((error)=>{
    //         console.error("Error Fetching Data", error);
            
    //     })   
    // }, []);

    
    return (
        <>
            <div>
            <img src={imgr} alt="banner Image" className="banner"/>
            </div>
        </>
    );
}

export default Banner;