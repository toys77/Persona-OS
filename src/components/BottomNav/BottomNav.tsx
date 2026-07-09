import { NavLink, useLocation } from "react-router-dom";

const navItems = [
  { icon: "home", label: "ホーム", to: "/", match: (path: string) => path === "/" },
  {
    icon: "diagnosis",
    label: "診断",
    to: "/diagnosis",
    match: (path: string) => path.startsWith("/diagnosis"),
  },
  {
    icon: "types",
    label: "タイプ",
    to: "/types",
    match: (path: string) => path === "/types",
  },
  {
    icon: "card",
    label: "カード",
    to: "/result",
    match: (path: string) => path === "/result",
  },
];

export function BottomNav() {
  const location = useLocation();

  return (
    <nav className="bottom-nav" aria-label="メインナビゲーション">
      <div className="bottom-nav__inner">
        {navItems.map((item) => {
          const active = item.match(location.pathname);

          return (
            <NavLink
              className={[
                "bottom-nav__item",
                active ? "bottom-nav__item--active" : "",
              ]
                .filter(Boolean)
                .join(" ")}
              key={item.to}
              to={item.to}
            >
              <span
                className={[
                  "bottom-nav__icon",
                  "bottom-nav__dot",
                  `bottom-nav__dot--${item.icon}`,
                ].join(" ")}
                aria-hidden="true"
              />
              <span className="bottom-nav__label">{item.label}</span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}
