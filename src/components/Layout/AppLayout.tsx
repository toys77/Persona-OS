import { Outlet } from "react-router-dom";
import { BottomNav } from "../BottomNav/BottomNav";
import { Header } from "../Header/Header";
import { ScrollToTop } from "../ScrollToTop/ScrollToTop";

export function AppLayout() {
  return (
    <div className="app-shell">
      <ScrollToTop />
      <Header />
      <main className="app-main">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
}
