import React, { useEffect } from 'react'

function Update() {
    const{id}=useParams()
    const [companyName, setcompanyName] = useState("")
    const [contactName, setcontactName] = useState("")
    const [contactTitle, setcontactTitle] = useState("")
    useEffect(() => {
        axios.get(`https://northwind.vercel.app/api/suppliers/${id}`)
        .then(res=>{
            setcompanyName(res.data.companyName)
            setcontactName(res.data.contactName)
            setcontactTitle(res.data.contactTitle)
        })
    }, [])
    const navigate=useNavigate()
    const update=()=>{
        axios.put("https://northwind.vercel.app/api/suppliers/"+id,{companyName,contactName,contactTitle})
        .then(res=>{
            navigate("/suppliers")
        })
    }
  return <>
  <h1>Update Page</h1>
  <h2>Id:{id}</h2>
  
        <div>
            <label htmlFor="">Company Name</label>
            <input type='text'value={companyName} onChange={(e) => setcompanyName(e.target.value)} />
        </div>
        <div>
            <label htmlFor="">Contact Name</label>
            <input type='text'value={contactName} onChange={(e) => setcontactName(e.target.value)} />
        </div>
        <div>
            <label htmlFor="">Contact Title</label>
            <input type='text'value={contactTitle} onChange={(e) => setcontactTitle(e.target.value)} />
        </div>
        <div>
            <button onClick={update()}>Add</button>
            </div>
  </>
}

export default Update