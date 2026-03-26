import { useCart } from '../contexts/CartContext.js';

function CheckoutItem({ item }) {
	const { updateQuantity, removeFromCart } = useCart();

	return (
		<div className="checkout-item">
			<img
				className="checkout-item-image"
				src={item.product.image}
				alt={item.product.name}
			/>
			<div className="checkout-item-details">
				<h3 className="checkout-item-name">{item.product.name}</h3>
				<p className="checkout-item-price">${item.product.price} each</p>
			</div>
			<div className="checkout-item-controls">
				<div className="quantity-controls">
					<button
						className="quantity-btn"
						onClick={() => updateQuantity(item.id, item.quantity - 1)}
					>
						-
					</button>
					<span className="quantity-value">{item.quantity}</span>
					<button
						className="quantity-btn"
						onClick={() => updateQuantity(item.id, item.quantity + 1)}
					>
						+
					</button>
				</div>
				<p className="checkout-item-total">
					${(item.product.price * item.quantity).toFixed(2)}
				</p>
				<button
					className="btn btn-secondary btn-small"
					onClick={() => removeFromCart(item.id)}
				>
					Remove
				</button>
			</div>
		</div>
	);
}

export default CheckoutItem;
