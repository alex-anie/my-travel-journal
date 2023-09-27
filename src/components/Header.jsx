import { Outlet } from "react-router-dom";
import worldLogo from "../assets/fill.svg";

export default function Header(){

    return (
      <>
        <header>
          <main className="header">
            <div className="header-wrapper">
              <img src={worldLogo} alt="" className="world-logo" />
              <span className="header-text">my travel journal.</span>
            </div>
          </main>
        </header>

        <Outlet />
      </>
    );
}
