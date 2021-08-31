import FirstPage from './FirstPage';
import './style.css';

const Cart = ({cart,setCart}) => {
	return(
	<div className = "cart">
	<span style={{fontSize : 30}}> My Cart </span>
	<br />
	<span style={{fontSize : 30}}> Total Price : ₹100 </span>
	<div className="productContainer">
		{
			cart.map((prod) => (
				<FirstPage prod={prod} key={prod.key} cart={cart} setCart={setCart} />
				))
		}
	</div>
	
	</div>
	);
}
export default Cart;