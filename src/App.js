import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from "./components/Cart";
import CartItem from "./components/CartItem"
import Header from "./components/Header";
import LoginPage from "./components/LoginPage";
import Products from "./components/Products";
import 'semantic-ui-css/semantic.min.css'

function App() {
    const [products, setProducts] = useState([])
    const [session, setSession] = useState(localStorage.getItem('sessionID'))
    //trying to read cart item  
    const [cart_items, setCart] = useState([])


    useEffect(() => {
        let headers = {
            'Authorization': `Session ${session}`,
          }
        axios.get("http://localhost:8000/products/", { headers:headers, withCredentials: true})
            .then((response) => setProducts(response.data))            
        console.log('use effect called!')
    }, [session])

    //trying reading cart item:
    useEffect(() => {
        let headers = {
            'Authorization': `Session ${session}`,
          }
        axios.get("http://localhost:8000/cart/", { headers:headers, withCredentials: true})
            .then((response) => setCart(response.data))            
        console.log('use effect called!')
    }, [session])

    // this function logs the user in
    function login(user, pass) {
        axios.post('http://localhost:8000/login/', {
            username: user,
            password: pass,
        })
            .then(response => {
                console.log(response.data);
                setSession(response.data.session)
                localStorage.setItem('sessionID', response.data.session)
            })
            .catch(error => {
                console.log(error);
                alert("something went wrong")
            });
    }
    function logout() {
        let headers = {
            'Authorization': `Session ${session}`,
          }
        // fetch("https://shopping-k6qe.onrender.com/products")
        axios.post("http://localhost:8000/logout/", { headers:headers, withCredentials: true})
        localStorage.removeItem('sessionID')
        setSession(null)
        
    }
    
    // async function deleteProduct(id) {
    //     const response = await fetch(`# /localhost:8000/products
    //     /${id}/`, {
    //       method: 'DELETE'
    //     });
    //     if (response.ok) {
    //       console.log('Product deleted successfully');
    //     } else {
    //       console.error('Failed to delete product');
    //     }
    //   }
      

    return (
        <div className="container">
            <BrowserRouter>

                    {session ? <>
                    <Header logout={logout} />
                    {/* <Products products={products} /> */}
                    <Routes>
                    <Route path="/" element={<Products products={products}/>} exact />
                    <Route path="/cart" element={<CartItem cart_items={cart_items} />} />
                    <Route path="/logout" element={<Cart />} />
                    </Routes>
                    </> :
                    <Routes>
                        <Route path="*" element={<LoginPage login={login} />} />
                    </Routes>
                    
                    }
                


            </BrowserRouter>

        </div>
    );
}

export default App;
