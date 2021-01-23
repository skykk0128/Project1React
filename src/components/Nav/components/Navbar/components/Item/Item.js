const NavbarItem = ({
  href,
  children,
}) => (
    <a href={href} className="navbar__menuitems" id="homepage" data-id="1">{children}</a>
);
