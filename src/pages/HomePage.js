import { SimpleGrid, Spinner, VStack } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";



const HomePage = () => {
    const[products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError]= useState('');
    const [sort, setsort]= useState('ascending');
    const [category, setCategory]= useState('');

    useEffect{() => {
        const fetchProducts = async ()=> {
            try{
                const response = await axios.get('/api/products');
                setProducts(response.data);
                setLoading(false);
            } catch(error) {
                setError('Error Fetching products')
                setLoading(false);
            }
        };
        fetchProducts();
    }, [] };
    const sortedProducts = category
    ? sortedProducts.filter((product) => product.category === category)
    : sortedProducts;

    if (loading) return <Spinner/>
    if (error) return <Text>{error}</Text>

    return {
        <VStack spacing={4}>
         <select placeholder = "Sort By Price " on change={(e)=> setsort={e.target.value}}>
         <option value="Men">Men</option>
         <option value="Women">Women</option>
         <option value="Kids">Kids</option>
         <option value="Home Decor">Home decor</option>
         </select>

         <SimpleGrid column={{ sm:1, md: 2, lg: 3 }}
    }
}