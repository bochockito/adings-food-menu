import restaurant from "../data/restaurant.json";

export default function Hero() {
  return (
    <div
        className="h-[400px] bg-cover bg-center relative"
        style={{
            backgroundImage: `url(${import.meta.env.BASE_URL}${restaurant.heroImage})`
        }}
    >
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative flex items-center justify-center h-full">

            <div className="text-center text-white">

                <h2 className="text-5xl font-bold">
                    Lutong Bahay Specials
                </h2>

                <p className="mt-4 text-xl">
                    Masarap • Bago • Sulit
                </p>

            </div>

        </div>
    </div>
    );
}