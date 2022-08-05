import React, { useRef, useState } from "react";
import axios from "axios";

export default function Dashboard(){
    const [shortUrl,setUrl] = useState('')
    const url = useRef()
    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            let res = await axios.post('http://localhost:5000/',{longUrl:url.current.value})
            console.log(res.data)
            setUrl(res.data.shortUrl)
        }
        catch(err){
            console.log(err)
        }
        
    }
    return(
        <div>
            <br></br>
            <br></br>
            <form onClick={(e) => handleSubmit(e)}>
                <input type='text' ref={url} placeholder="Enter url"/>
                <br></br>
                <button type="submit">Generate Url</button>
            </form>
            {shortUrl?<><div>Copy this url: {shortUrl}</div></> : <></>}
        </div>
        
    )
}