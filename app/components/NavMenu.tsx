import { navList } from "@/app/lib/placeholder-data";

function NavMenu() {
  return (
    <nav className="nav">
      <ul className="list nav__list">
        {navList.map((item) => (
          <li key={item.id} className="nav__item">
            <a href={item.href} className="nav__link">
              {/* <span className="nav__icon">{item.icon}</span> */}
              <span className="nav__text">{item.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavMenu;
