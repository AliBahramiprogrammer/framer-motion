import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HostDessert from "./components/HostDessert";
import Banner from "./components/Banner";
import PopularRecipe from "./components/PopularRecipe";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";

const App = () => {
    return (
        <div className="overflow-x-hidden bg-white2 text-dark">
            <div className="relative overflow-hidden">
                <Navbar />
                <Hero />
            </div>
            <HostDessert />
            <Banner />
            <PopularRecipe />
        <Testimonial />
        <Footer/>
        </div>
    );
};

export default App;
