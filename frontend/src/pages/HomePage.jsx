import React from "react";
import Header from "../components/layout/Header";
import Hero from "../components/route/hero/Hero";
import Categories from "../components/route/categories/Categories.jsx";

export default function HomePage() {
  return (
    <div>
      <Header activeHeading={1} />
      <Hero />
      <Categories />
    </div>
  );
}
