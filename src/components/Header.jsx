import restaurant from "../data/restaurant.json";

export default function Header() {
    return (
    <header className="bg-red-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-4">

            <h1 className="text-3xl font-bold">
                {restaurant.restaurantName}
            </h1>

            <p className="text-yellow-200">
                {restaurant.tagline}
            </p>

        </div>
    </header>
    );
}