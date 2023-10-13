import { TypeMenuItem } from '../../../../data/menu';
import './MenuSection.css';

export default function MenuSection({ name, price }: TypeMenuItem) {
  return (
    <div className="menu-item">
      <span className="menu-item-name">{name}</span>
      <div className="menu-item-price-container">
        <span className="menu-item-line" />
        <span className="menu-item-price">{`$${price}`}</span>
      </div>
    </div>
  );
}
