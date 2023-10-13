import { MENU, TypeMenuItem } from '../../../data/menu';
import MenuSection from './MenuSection/MenuSection';
import './Shop.css';

export default function Shop() {
  return (
    <section id="coffee-shop">
      <div className="container">
        <h2 className="section-heading">Coffee shop</h2>
        <p className="shop__text">
          In our library, we have of cozy coffee shop, welcoming in customers
          with frothy cappuccinos and friendly conversation. You can get a
          favorite book and read in coffee shop. Our barista to cook you best
          coffee, and also you can try desserts from bakery.
        </p>
        <div className="shop__menu">
          <div className="shop__menu-section">
            <h3 className="shop__menu-heading">Coffee & Tea</h3>
            {MENU['Coffee & Tea'].map((item: TypeMenuItem) => (
              <MenuSection
                key={item.name}
                name={item.name}
                price={item.price}
              />
            ))}
          </div>
          <div className="shop__menu-section">
            <h3 className="shop__menu-heading">Desserts & Cakes</h3>
            {MENU['Desserts & Cakes'].map((item: TypeMenuItem) => (
              <MenuSection
                key={item.name}
                name={item.name}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
