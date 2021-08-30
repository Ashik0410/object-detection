// import './style.css';
const FirstPage = ({prod}) => {
	return(
		<div className="products">
      <img  className = "responsive-img" src={prod.image} alt={prod.name} />
      <div className="productDesc">
        <span style={{ fontWeight: 700 }}>{prod.name}</span>
        <span>₹ {prod.price.substring(0, 3)}</span>
      </div>
      <button> add to cart </button>
      </div>

		);
}
export default FirstPage;