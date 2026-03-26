import { useCart } from '../contexts/CartContext.js';
import CheckoutItem from '../components/CheckoutItem';

function CheckoutPage() {
	const { clearCart, getCartItemsWithProducts, getCartTotal } = useCart();
	const cartItems = getCartItemsWithProducts();
	const total = getCartTotal();

	function placeOrder() {
		alert('Successful Order!');
		clearCart();
	}

	return (
		<div className="page">
			<div className="container">
				<h1 className="page-title">Checkout</h1>
				<div className="checkout-container">
					<div className="checkout-items">
						<h2 className="checkout-section-title">Order Summary</h2>
						{cartItems.map((item) => (
							<CheckoutItem item={item} key={item.id} />
						))}
					</div>
					<div className="checkout-summary">
						<h2 className="checkout-section-title">Total</h2>
						<div className="checkout-total">
							<p className="checkout-total-label">Subtotal:</p>
							<p className="checkout-total-value">${total.toFixed(2)}</p>
						</div>
						<div className="checkout-total">
							<p className="checkout-total-label">Total:</p>
							<p className="checkout-total-value checkout-total-final">
								${total.toFixed(2)}
							</p>
						</div>
						<button
							className="btn btn-primary btn-large btn-block"
							onClick={placeOrder}
						>
							Place Order
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CheckoutPage;
