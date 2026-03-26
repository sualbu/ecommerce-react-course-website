import { useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import { getProductById } from '../data/products.js';

function CartProvider({ children }) {
	const [cartItems, setCartItems] = useState([]);

	function addToCart(productId) {
		const productInCart = getProductInCart(productId);

		if (productInCart === null) {
			setCartItems([...cartItems, { id: productId, quantity: 1 }]);
		}

		if (productInCart !== null) {
			setCartItems(
				cartItems.map((item) =>
					item.id === productId
						? { id: productId, quantity: item.quantity + 1 }
						: item,
				),
			);
		}
	}

	function updateQuantity(productId, quantityNew) {
		if (quantityNew <= 0) {
			removeFromCart(productId);
		}

		if (quantityNew > 0) {
			setCartItems(
				cartItems.map((item) =>
					item.id === productId ? { ...item, quantity: quantityNew } : item,
				),
			);
		}
	}

	function removeFromCart(productId) {
		setCartItems(cartItems.filter((item) => item.id !== productId));
	}

	function clearCart() {
		setCartItems([]);
	}

	function getCartQtyLabel(productId) {
		const productInCart = getProductInCart(productId);

		if (productInCart === null) {
			return '';
		}

		if (productInCart !== null) {
			return ` (${productInCart.quantity})`;
		}
	}

	function getProductInCart(productId) {
		const productInCart = cartItems.find((item) => item.id === productId);

		return productInCart || null;
	}

	function getCartItemsWithProducts() {
		return cartItems
			.map((item) => ({ ...item, product: getProductById(item.id) }))
			.filter((item) => item.product);
	}

	function getCartTotal() {
		const total = cartItems.reduce((totalValue, item) => {
			const product = getProductById(item.id);

			return totalValue + (product ? product.price * item.quantity : 0);
		}, 0);

		return total;
	}

	return (
		<CartContext.Provider
			value={{
				cartItems,
				addToCart,
				updateQuantity,
				removeFromCart,
				clearCart,
				getCartQtyLabel,
				getCartItemsWithProducts,
				getCartTotal,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}

export default CartProvider;
