
import { NavLinks } from "./nav-links";
import { NavSearch } from "./nav-search";
// if we make the parent component use client then all its child or nested compoennts
// converted into client components
// to avoid this use client the component in leaf component so only that component is client
export const Navbar = () => {
  console.log(`Navbar rendered`);
  return (
    <div>
      <NavLinks />
      <NavSearch />
    </div>
  );
};

