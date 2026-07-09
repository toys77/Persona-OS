import { NavLink, useLocation, useNavigate } from "react-router-dom";

export function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const canGoBack = location.pathname !== "/";
  const iconSrc = `${import.meta.env.BASE_URL}icons/persona-os-icon-64.png`;

  return (
    <header className="app-header">
      <div className="app-header__top">
        {canGoBack ? (
          <button className="header-back" onClick={() => navigate(-1)} type="button">
            戻る
          </button>
        ) : (
          <span className="header-spacer" aria-hidden="true" />
        )}
        <NavLink className="app-header__brand" to="/">
          <span className="app-header__brand-mark" aria-hidden="true">
            <img src={iconSrc} alt="" />
          </span>
          <span>Persona OS</span>
        </NavLink>
      </div>
    </header>
  );
}
