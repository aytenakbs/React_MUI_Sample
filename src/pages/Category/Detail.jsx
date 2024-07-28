import React from 'react'

function Detail() {
  var {id} = useParams()
  const [supplier, setsupplier] = useState({})
  const navigate=useNavigate()
  useEffect(() => {
    axios.get(`https://northwind.vercel.app/api/suppliers/${id}`)
    .then(res=>setsupplier(res.data))
  }, [])
  const goBack=()=>{
    navigate("/suppliers") //or navigate(-1)
  }
  return <>
  <h1>Detail page</h1>
  <button onClick={goBack}>Go Back</button>
  <hr/>
  <h2>Id: {id}</h2>
  <h2>Company Name:{supplier.companName}</h2>
  <h2>Contact Name:{supplier.contactName}</h2>
  <h2>Contact Title:{supplier.contacTitle}</h2>
  
  </>
}

export default Detail