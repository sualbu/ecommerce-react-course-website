import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext.js';

function ProductCard({ product }) {
	const { addToCart, getCartQtyLabel } = useCart();

	return (
		<div className="product-card">
			<img
				className="product-card-image"
				src={product.image}
				alt={product.name}
			/>
			<div className="product-card-content">
				<h3 className="product-card-name">{product.name}</h3>
				<p className="product-card-price">${product.price}</p>
				<div className="product-card-actions">
					<Link className="btn btn-secondary" to={`/product/${product.id}`}>
						View Details
					</Link>
					<button
						className="btn btn-primary"
						onClick={() => addToCart(product.id)}
					>
						Add to Cart{getCartQtyLabel(product.id)}
					</button>
				</div>
			</div>
		</div>
	);
}

export default ProductCard;
