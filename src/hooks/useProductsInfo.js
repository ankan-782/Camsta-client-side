import { useEffect, useState } from 'react';

const useProductsInfo = () => {
    const [productsInfo, setProductsInfo] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://fierce-badlands-75560.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProductsInfo(data))
            .finally(() => setLoading(false));
    }, [])
    return [productsInfo, loading];
};

export default useProductsInfo;