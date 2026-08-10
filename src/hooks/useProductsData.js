// import React, { useEffect, useState } from "react";

// export default useProductsData = () => {
//     const [products, setProducts] = useState([]);
//     const [currentPage, setCurrentPage] = useState(0);
//     const [loading, setLoading] = useState(true);

//     const fetchData = async () => {
//         try {
//             setLoading(true);
//             const respose = await fetch("https://dummyjson.com/products?limit=500");
//             const data = await respose.json();
//             setProducts(data.products);
//             //   console.log(data.products);
//         } catch (error) {
//             console.log(error);
//         } 
//         // finally {
//         //     setLoading(false);
//         // }
//     };
//     useEffect(() => {
//         // AbortController cancels pending requests if component unmounts mid-fetch
//         // let controller = new AbortController();
//         // let signal = controller.signal;
//         fetchData();
//         // return () => {
//         //     controller.abort();
//         // }
//     }, []);
//     return { products, setProducts, currentPage, setCurrentPage };
// };


import React, { useEffect, useState } from "react";

// 1. Changed "export default" to a named const export
export const useProductsData = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await fetch("https://dummyjson.com/products?limit=500"); // Fixed typo: respose -> response
            const data = await response.json();
            setProducts(data.products);
        } catch (error) {
            console.log(error);
        } 
        finally {
            setLoading(false); // 2. Uncommented to turn off loading state
        }
    };

    useEffect(() => {
        let controller = new AbortController();
        let signal = controller.signal;

        // Pass the abort signal to your fetch request to prevent memory leaks
        fetchData();

        return () => {
            controller.abort();
        };
    }, []);

    // 3. Added 'loading' to the returned object so your components can use it
    return { products, setProducts, currentPage, setCurrentPage, loading };
};
