import {useState, useEffect, useContext} from 'react';
import FirstPage from './FirstPage';
import './style.css';
import Cart from '../Context';


const CartPage = () => {

const{cart} = useContext(Cart);

const[total,setTotal] = useState();

useEffect(() => {
	setTotal(cart.reduce((acc,curr) => acc + Number(curr.price), 0));

},[cart]); 

	return(
	<div className = "cart">
	<span style={{fontSize : 30}}> My Cart </span>
	<br />
	<span style={{fontSize : 30}}> Total Price : ₹{total} </span>
	<div className="productContainer">
		{
			cart.map((prod) => (
				<FirstPage prod={prod} key={prod.key} />
				))
		}
	</div>
	
	</div>
	);
}
export default CartPage;