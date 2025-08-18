import Header from './components/Header.jsx';
import Shop from './components/Shop.jsx';
import Product from './components/Product.jsx';
import CartContextProvider from './store/shopping-cart-context.jsx';
import { DUMMY_PRODUCTS } from './dummy-products.js';

function App() {
  return (
    <CartContextProvider> {/* Provider는 버전 19 이하에서 필수.
    CartContext가 useContext로 받을 기본 값을 value에 항상 정의해야 함. */}
      <Header />
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
        </Shop>
    </CartContextProvider>
  );
}

export default App;
