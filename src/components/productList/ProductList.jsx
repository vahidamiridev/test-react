import axios from "axios"
import React from "react"
import { useNavigate } from "react-router-dom"
import Wrapper from "../../HOC/Wrapper"
import Loading from "../../ui/loading/Loading"
import Product from "../product/Product"



export default ()=>{
    const navigate  = useNavigate()
    const [products , setProducts]= React.useState([])
    const [isLoading ,setIsLoading] = React.useState(false)
    const [isError ,setIsError] = React.useState(false)
        

    React.useEffect(()=>{
      
        const fetchProducts =async ()=>{
                       setIsLoading(true)
                            try {
                                const  response = await axios.get('https://jsonplaceholder.typicode.com/posts')
                               const newProducts = response.data.slice(-5)
                                setProducts(newProducts)
                                setIsLoading(false)
                            } catch (error) {
                                navigate('/login')
                            } 
                }
                
                fetchProducts()

    },[])

    let showProducts = 
        products.map((product , idx)=><Product 
       key={product.id}
       id={product.id}
       title={product.title}
       body={product.body}
       />
        )
       if(isLoading) showProducts = <Loading/>
    

    return (
        <Wrapper>
            {showProducts}
        </Wrapper>

    )
}