import { MainNav } from "./navbar-main";
import { TopBar } from "./top-bar";

export function Header() {
  return (
    <header className="w-full">
      <TopBar />
      <MainNav />
    </header>
  );
}
