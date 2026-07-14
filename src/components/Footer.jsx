import restaurant from "../data/restaurant.json";

export default function Footer() {
  return (
    <footer className="bg-red-800 text-white py-5 text-center">

      © 2026 {restaurant.restaurantName}

    </footer>
  );
}