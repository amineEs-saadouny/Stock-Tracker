import react from "react";
import "../CSS/Dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsersGear,
  faUsers,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";

function Dashboard() {
  return (
    <div className="dashboard-page-container">
      <div className="dashboard-page-left-side">
        <ul className="dashboard-top-menu">
          <li>
            <span className="fa fa-home"></span> Home
          </li>
          <li>
            <span className="fa fa-shopping-basket"></span> Orders
          </li>
          <li>
            <span className="fa fa-tag"></span> Products
          </li>
          <li>
            <FontAwesomeIcon icon={faUsers} /> Customers
          </li>
          <li>
            <FontAwesomeIcon icon={faUsersGear} /> Workers
          </li>
          <li>
            <span className="fa fa-pie-chart"></span> Analytics
          </li>
        </ul>
        <ul className="dashboard-bottom-menu">
          <li>
            <img
              className="dashboard-bottom-menu-img"
              src="https://avatars.githubusercontent.com/u/77685808?s=400&u=11eaeaabbfec5b1e45f5020018c58047603569e9&v=4"
            />
            Amine Es-saadouny <FontAwesomeIcon icon={faEllipsis} />
          </li>
        </ul>
      </div>
      <div className="dashboard-page-main"></div>
    </div>
  );
}

export default Dashboard;
