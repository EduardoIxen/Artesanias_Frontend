import { useEffect, useState } from "react";
import axios from "axios";

const useGetProductos = (API) => {
    const [productos, setProductos] = useState([]);

    const fetchData = async () => {
        const config = {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        }

        const response = await axios.get(API, config);
        setProductos(response.data.productos);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return productos;
}

export default useGetProductos;