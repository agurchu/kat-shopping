import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState("");

  return (
    <div className="section">
      <div className="hidden 800px:h-[50px] 800px:my-[20px] 800px:flex items-center justify-between">
        <div>
          <Link to="/">
            <img className="w-40" src="kj_dev_logo.png" alt="logo" />
          </Link>
        </div>
        {/* search box */}
      </div>
    </div>
  );
}
