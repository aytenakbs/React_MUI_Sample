import React, { useState } from 'react'

function Add() {
    const [companyName, setcompanyName] = useState("")
    const [contactName, setcontactName] = useState("")
    const [contactTitle, setcontactTitle] = useState("")
    const navigate=useNavigate()
    const add=()=>{
        axios.post("https://northwind.vercel.app/api/suppliers",{
            companyName,
            conntactName,
            contactTitle
        })
        .then(res=>{
            navigate("/suppliers"
            )
        })
    }
    return <>
        <h1>AddNew Supplier</h1>
        <div>
            <label htmlFor="">Company Name</label>
            <input type='text' onChange={(e) => setcompanyName(e.target.value)} />
        </div>
        <div>
            <label htmlFor="">Contact Name</label>
            <input type='text' onChange={(e) => setcontactName(e.target.value)} />
        </div>
        <div>
            <label htmlFor="">Contact Title</label>
            <input type='text' onChange={(e) => setcontactTitle(e.target.value)} />
        </div>
        <div>
            <button onClick={add()}>Add</button>
            </div>
    </>
}

export default Add