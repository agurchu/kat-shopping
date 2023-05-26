import React from "react";
import { navItems } from "../../static/data";
import { Link } from "react-router-dom";

export default function Navbar({ active }) {
  return (
    <div className="normalFlex">
      {navItems &&
        navItems.map((item, index) => (
          <div key={index}>
            <Link
              to={item.url}
              className={`${
                active === index + 1 ? "text-[#3423d1]" : "text-[#fff]"
              } font-[500] px-6  cursor-pointer`}
            >
              {item.title}
            </Link>
          </div>
        ))}
    </div>
  );
}
