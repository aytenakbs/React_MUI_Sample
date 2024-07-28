import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';


function ProductsDataGrid() {
    const [products, setproducts] = useState([])
    useEffect(() => {
        axios.get("https://northwind.vercel.app/api/products")
            .then(res => {
                setproducts(res.data)
            }
            )
    }, [])

    const columns = [
        {
            field:"id",
            headerName:"ID",
            flex:0.25
        },
        {
            field: "name",
            headerName: "Ürün Adı",
            flex: 0.25//toplamı 1 olmalı bu kısımların.
        },
        {
            field:"unitPrice",
            headerName:"Fiyat",
            flex:0.25
        },
        {
            field:"unitsInStock",
            headerName:"Stok",
            flex:0.25
        }


    ]

    return <>
    <div style={{height:400}}>
    <DataGrid 
    rows={products}//datasource
     columns={columns}
     slots={{toolbar:{ showQuickFilter:true}}}
     
     />
     
     </div>
    </>
}

export default ProductsDataGrid