import React,{useState} from 'react'
import axios from 'axios'

export default function Admin() {
    const [name,setName] = useState()
    const [price,setPrice] = useState()
    const [desc,setDesc] = useState()
    const [url,setUrl] = useState()
    const api = "http://localhost:8080/"
    const addProducts = async () =>{
        await axios.post(api,{name:name,desc:desc,price:price,url:url})
    }
  return (
    <div>
        <p>
        <input type="text" onChange = {(e)=>setName(e.target.value)} placeholder='enter the name'></input>
        </p>
        <p>
        <input type="text"  onChange = {(e)=>setDesc(e.target.value)} placeholder='enter the desc'></input>
        </p>
        <p>
        <input type="text" onChange = {(e)=>setPrice(e.target.value)} placeholder='enter the price'></input>
        </p>
        <p>
        <input type="text" onChange = {(e)=>setUrl(e.target.value)} placeholder='enter the url'></input>
        </p>
        
        <button onClick = {addProducts}>save</button>
    </div>
  )
}
