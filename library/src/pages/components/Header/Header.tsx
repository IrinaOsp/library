import ProfileIcon from '../../../assets/images/svg/profile_icon.svg';
import './Header.css';

const navItems: Record<'name' | 'link', string>[] = [
  { name: 'About', link: 'about' },
  { name: 'Favorites', link: 'favorites' },
  { name: 'Coffee shop', link: 'coffee-shop' },
  { name: 'Contacts', link: 'contacts' },
  { name: 'Library Card', link: 'card' },
];

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1 className="header__logo">Brooklyn Public Library</h1>
        <ul className="header__list">
          {navItems.map((item) => (
            <li className="header__item" key={item.name}>
              <a href={`#${item.link}`}>{item.name}</a>
            </li>
          ))}
        </ul>
        <div className="header__profile">
          <img src={ProfileIcon} alt="profile icon" />
        </div>
      </div>
    </header>
  );
}
