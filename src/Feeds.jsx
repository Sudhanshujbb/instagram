import React from "react";
import Feed from "./Feed";
import { useEffect, useState } from "react";
import "./feed.css";

const Feeds = () =>{
    const [dat, setData] = useState([]);
    useEffect(()=>{
        fetch('https://graph.instagram.com/me/media?fields=id,caption&access_token=IGQVJVMHBBUVU2cUh5WWl0b2Ntb0d3aHN5a2YyWXAtb2gxd1Myb0xEZAVhsUHRzMnJpZAWY4UU5DNDlrZADZAXQ3NUdXlUOGJ4S1BITGU3bjZA0R3BsVmxabG41WnBXWHF6R19pX21raDhB')
        .then((response)=>{
            if(response.ok){
                return response.json();
            }
            throw response;
        })
        .then ((res)=>{
            
            const ar = res.data
            // console.log(ar);
            setData(ar);
        })
        .catch((error)=>{
            console.error("Error Fetching Data", error);
            
        })   
    }, []);

//    dat.map((curValue)=>{
//     console.log(curValue);
//    })

    return (
        <>
           <div className="gallery">
            {dat.map((curVal, ind)=>{
                return(<Feed id={curVal.id} key ={ind}/>);
            }) }
            </div>
        </>
    );
}

export default Feeds;