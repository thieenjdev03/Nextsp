import React, { Fragment, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ThemeContext } from "../theme/ThemeContext";
import { AdminLayoutContext } from "./AdminLayoutContext";

const AdminSidebar = (props) => {
  const location = useLocation();
  const navigate = useNavigate();

  const { darkMode } = useContext(ThemeContext);
  const { isSidebarVisible } = useContext(AdminLayoutContext);

  const darkmodeHR = darkMode
    ? "border-gray-600 border-b"
    : "border-gray-200 border-b";
  const darkmodehoverdiv = darkMode ? "bg-gray-600" : "bg-gray-200";
  const darkmodeactive = darkMode
    ? "shadow-inner border-r-4 border-gray bg-gray-800"
    : "shadow-inner border-r-4 border-gray-800 bg-gray-100";
  const shadowSidebar = darkMode ? "#000" : "#aaaa";

  return (
    <Fragment>
      {isSidebarVisible && ( // Only render the sidebar if isSidebarVisible is true
        <div
          style={{ boxShadow: `1px 1px 8px 0.2px ${shadowSidebar}`, transition: 'all 1s ease-out', transform: isSidebarVisible ? 'translateX(0)' : 'translateX(-100%)' }}
        id="sidebar"
          className={`hidden md:block sticky top-0 left-0 h-screen md:w-3/12 lg:w-2/12 sidebarShadow ${
            darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-600"
          }`}
        >
          <div
            onClick={(e) => navigate("/admin/dashboard")}
            className={`${
              location.pathname === "/admin/dashboard" ? darkmodeactive : ""
            } hover:${darkmodehoverdiv} cursor-pointer flex flex-col items-center justify-center py-6`}
          >
            <span>
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </span>
            <span>Dashboard</span>
          </div>
          <hr className={darkmodeHR} />
          <div
            onClick={(e) => navigate("/admin/dashboard/categories")}
            className={`${
              location.pathname === "/admin/dashboard/categories"
                ? darkmodeactive
                : ""
            } hover:${darkmodehoverdiv} cursor-pointer flex flex-col items-center justify-center py-6`}
          >
            <span>
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </span>
            <span>Categories</span>
          </div>
          <hr className={darkmodeHR} />
          <div
            onClick={(e) => navigate("/admin/dashboard/brands")}
            className={`${
              location.pathname === "/admin/dashboard/brands"
                ? darkmodeactive
                : ""
            } hover:${darkmodehoverdiv} cursor-pointer flex flex-col items-center justify-center py-6`}
          >
            <span>
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </span>
            <span>Brands</span>
          </div>
          <hr className={darkmodeHR} />
          <div
            onClick={(e) => navigate("/admin/dashboard/products")}
            className={`${
              location.pathname === "/admin/dashboard/products"
                ? darkmodeactive
                : ""
            } hover:${darkmodehoverdiv} cursor-pointer flex flex-col items-center justify-center py-6`}
          >
            <span>
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                />
              </svg>
            </span>
            <span>Product</span>
          </div>
          <hr className={darkmodeHR} />
          <div
            onClick={(e) => navigate("/admin/dashboard/orders")}
            className={`${
              location.pathname === "/admin/dashboard/orders"
                ? darkmodeactive
                : ""
            } hover:${darkmodehoverdiv} cursor-pointer flex flex-col items-center justify-center py-6`}
          >
            <span>
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                />
              </svg>
            </span>
            <span>Order</span>
          </div>
          <hr className={darkmodeHR} />
        </div>
      )}
    </Fragment>
  );
};

export default AdminSidebar;
