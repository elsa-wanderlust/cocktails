"use client";
import Link from "next/link";

const TopMenu = () => {
  return (
    <div className="flex gap-20">
      <Link href="/">Cocktail of the day</Link>

      <Link href="/searchByCategory">Search by category</Link>
      <Link href="/searchByGlass">Search by glass</Link>
      <Link href="/searchByIngredient">Search by ingredient</Link>
      <Link href="/searchByName">Search by name</Link>

      <p>Favorites</p>
      <p>Login/Sign up</p>
    </div>
  );
};

export default TopMenu;
