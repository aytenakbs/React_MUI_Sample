import React from 'react'

function List() {
    const [suppliers, setsetsuppliers] = useState([])
    
    const navigate = useNavigate()
    useEffect(() => {
        loadData();
      
    }, [])
    const loadData=()=>{
        axios.get("https://northwind.vercel.app/api/suppliers")
        .then(res=>setsetsuppliers(res.data))
    }
    const deleteSupplier=(id)=>{
        axios.delete("https://northwind.vercel.app/api/suppliers"+id)
        .then(res=>{loadData()})
    }
    
  return <>
  <button onClick={()=>navigate('/suppliers/add')}>Add New Supplier</button>
  <hr />
  <table>
    <thead>
        <tr>
            <th>Id</th>
            <th>Company Name</th>
            <th>Contact Name </th>
            <th>Contact Title </th>
            <th>Delete </th>
            <th>Update </th>
        </tr>
    </thead>
    <tbody>
        {suppliers.map(item=><tr><td>{item.id}</td>
            <td>{item.companyName}</td>
            <td>{item.contactName}</td>
            <td>{item.contactTitle}</td>
            <td><Link to={`/category/detail/${item.id}`}>Detail</Link></td>
            <td><button onClick={()=>deleteSupplier(item.id)}>Delete</button></td>
            <td><button onClick={()=>navigate('/suppliers/update/'+item.id)}>Update</button></td>
            </tr>)}
    </tbody>
  </table>
  </>
}

export default List