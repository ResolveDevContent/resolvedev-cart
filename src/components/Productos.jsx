import './productos.css'

import { products as productos} from '../mocks/productos.json'
import { useCart } from '../hook/useCart.js'
// import { AddToCartIcon, RemoveFromCartIcon } from '../icons/Icons.jsx'

export const Productos = () => {
    const { addToCart, removeFromCart, cart } = useCart()

    return (
        <article>
            <ul>
            {productos.map(prod => {
                const inCart = cart.some(item => prod.id == item.id)

                return (
                <li key={prod.id} className="producto">
                    <img
                    src={prod.thumbnail}
                    alt={prod.title}
                    />
                    <div>
                        <div>
                            <strong>{prod.title}</strong><span>- ${prod.price}</span>
                        </div>

                        <footer>
                            <button onClick={() => {
                                inCart ? removeFromCart(prod)
                                       : addToCart(prod)
                                       }}>
                                {/* { 
                                    inCart ? <AddToCartIcon /> 
                                           : <RemoveFromCartIcon /> 
                                } */ 'hola'}
                            </button>
                        </footer>
                    </div>
                </li>
                )
            })}
            </ul>
        </article>
    )
}