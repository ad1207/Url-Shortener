import React, { useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export default function Url() {
    const urlParams = useParams()
    useEffect(() => {
        const fetch = async () => {
            let res = await axios.get("http://localhost:5000/"+urlParams.code)
            console.log(res.data)
            window.location.replace(res.data)
        }
        fetch()
    })
    return (
    <div>Redirecting...</div>
    )
}
