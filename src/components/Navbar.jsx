import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { setCountry, setLanguage, setQuery } from "../redux/slices/newsSlice";

export default function Navbar() {

    const dispatch = useDispatch()
    const { country, language, query } = useSelector((state) => state.news)

    const categories = ["Business", "Sports", "Entertainment", "Financials"];
    const countries = { "India": 'in', "USA": 'usa', "China": 'cn', "Pakistan": 'pk' };

    return (
        <div className="w-screen h-1/8 bg-zinc-400 flex flex-col items-center border-b-4 backdrop-blur-3xl">
            <div className="upper-nav-bar flex justify-between flex-col md:flex-row items-center p-10 w-full h-1/2 bg-white gap-6 md:gap-0">
                <div className="logo">
                    <h1 className="text-4xl font-extrabold">N<span className="text-orange-400">e</span>ws <span className="text-orange-400">Ji</span></h1>
                </div>
                <div className="flex justify-between w-full md:w-1/2 items-center md:gap-10 ">
                    <form className="searchbar">
                        <input
                            type="search"
                            name="category"
                            className="outline-none border-2 border-black rounded-md px-3 py-1 w-60 md:w-100"
                            placeholder="Search..."
                            onChange={(e) => dispatch(setQuery(e.target.value))}
                        />
                    </form>
                    <div className="language flex gap-8 justify-center md:justify-normal">
                        <NavLink to={"/english"} className={`cursor-pointer font-semibold ${language === 'en' ? 'text-orange-400' : ''}`} onClick={() => dispatch(setLanguage('en'))}>
                            English (en)
                        </NavLink>
                        <NavLink to={"/hindi"} className={`cursor-pointer font-semibold ${language === 'hi' ? 'text-orange-400' : ''}`} onClick={() => dispatch(setLanguage('hi'))}>
                            Hindi (हि)
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className="lower-nav-bar bg-white flex flex-col-reverse md:flex-row gap-2 md:gap-0 justify-between w-full h-1/2 px-10 items-center">
                <div className="category flex gap-x-10 font-semibold">
                    {categories.map((category) => (
                        <button key={category} onClick={() => dispatch(setQuery(category.toLowerCase()))} className={`hover:text-orange-400 ${query === category.toLowerCase() ? 'text-orange-400' : ''}`}>
                            {category}
                        </button>
                    ))}
                </div>
                <div className="country flex gap-x-4 font-semibold">
                    {Object.keys(countries).map((ct) =>
                        <button
                            key={ct}
                            onClick={() => dispatch(setCountry(countries[ct]))}
                            className={`hover:text-orange-400 ${country === countries[ct] ? 'text-orange-400' : ''}`}
                        >{ct}</button>
                    )}
                </div>
            </div>
        </div>
    );
}
