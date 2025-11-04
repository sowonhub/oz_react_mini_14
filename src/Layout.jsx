import { Outlet } from "react-router-dom";
import NavigationBarComponent from "./pages/components/NavigationBarComponent.jsx";

export default function Layout() {
  return (
    <div>
      <div>
        <NavigationBarComponent />
        <Outlet />
      </div>
    </div>
  );
}
