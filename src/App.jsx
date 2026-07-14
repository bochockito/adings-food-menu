import { useState } from "react";

import menu from "./data/menu.json";

import Header from "./components/Header";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import MenuCard from "./components/MenuCard";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

function App() {
    const [search, setSearch] = useState("");

    const filteredMenu = menu.filter(item =>
    item.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );

    const handleOrder = () => {
    document
        .getElementById("contact")
        .scrollIntoView({
        behavior: "smooth"
        });
    };

    return (
        <div>
            <Header />
            <Hero />

            <main className="max-w-7xl mx-auto px-6 py-10">
                <SearchBar
                    value={search}
                    onChange={setSearch}
                />
                <div className="grid md:grid-cols-3 gap-6 mt-10">
                    {filteredMenu.map(item => (
                    <MenuCard
                        key={item.id}
                        item={item}
                        onOrder={handleOrder}
                    />
                    ))}
                </div>
            </main>

            <ContactUs />
            <Footer />
        </div>
    );
}

export default App;