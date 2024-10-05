import Logo from "./Logo";
import NavMenu from "./NavMenu";
import UserMenu from "./UserMenu";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Logo />
        <NavMenu />
        <UserMenu />
      </div>
    </header>
  );
}

export default Header;
