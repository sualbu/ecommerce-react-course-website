import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useCart } from '../contexts/CartContext.js';
import { getProductById } from '../data/products';

function ProductPage() {
	const { id } = useParams();
	const [product, setProduct] = useState(null);
	const { addToCart, getCartQtyLabel } = useCart();
	const navigate = useNavigate();

	useEffect(() => {
		const productFound = getProductById(id);

		function setFoundProduct(productFound) {
			setProduct(productFound);
		}

		if (!productFound) {
			navigate('/');
			return;
		}

		setFoundProduct(productFound);
	}, [id, navigate]);

	if (!product) {
		return <h1>Loading...</h1>;
	}

	return (
		<div className="page">
			<div className="container">
				<div className="product-detail">
					<div className="product-detail-image">
						<img src={product.image} alt={product.name} />
					</div>
					<div className="product-detail-content">
						<h1 className="product-detail-name">{product.name}</h1>
						<p className="product-detail-price">${product.price}</p>
						<p className="product-detail-description">{product.description}</p>
						<button
							className="btn btn-primary"
							onClick={() => addToCart(product.id)}
						>
							Add to Cart{getCartQtyLabel(product.id)}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProductPage;
