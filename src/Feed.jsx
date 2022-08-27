import React from "react";
import { useState, useEffect } from "react";
import "./feed.css";

const Feed = (props) =>{
    console.log(props.id);
    const [data, setData] = useState('');
    useEffect(()=>{
        fetch(`https://graph.instagram.com/${props.id}?fields=id,media_type,media_url,username,timestamp&access_token=IGQVJVMHBBUVU2cUh5WWl0b2Ntb0d3aHN5a2YyWXAtb2gxd1Myb0xEZAVhsUHRzMnJpZAWY4UU5DNDlrZADZAXQ3NUdXlUOGJ4S1BITGU3bjZA0R3BsVmxabG41WnBXWHF6R19pX21raDhB`)
        .then((response)=>{
            if(response.ok){
                return response.json();
            }
            throw response;
        })
        .then ((res)=>{
            setData(res.media_url);
            console.log(res.media_url);
        })
        .catch((error)=>{
            console.error("Error Fetching Data", error);
            
        })   
    }, []);

    console.log(data); 
    return(
        <>
            
            <img src={data} alt="post" />
            
        </>
    );
}

export default Feed;