import { navList } from "@/app/lib/placeholder-data";
import { Icon } from "@iconify/react";
import Link from "next/link";
function NavMenu() {
  return (
    <nav className="nav">
      <ul className="list nav__list">
        {navList.map((item) => (
          <li key={item.id} className="nav__item">
            <Link className="nav__link" href={item.href}>
              <Icon className="nav__link-icon" icon={item.icon} />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavMenu;
