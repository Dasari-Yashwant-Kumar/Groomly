import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faHeart, faCircleUser, faMagnifyingGlass, faPersonHalfDress } from "@fortawesome/free-solid-svg-icons";
import Landing from "../../Assets/Landing.png";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "../Data";
import { SalonShimmer } from "../Salons/SalonShimmer"

export const Home = () => {
    const { userLocation, setUserLocation, getUserLocation, displayLocation } = useContext(userContext);
    const navigate = useNavigate();

    const handleExploreSalon = () => {
        if (userLocation) {
            navigate("/Salons")
        } else {
            alert("Please use your location before continuing.. ")
        }
    }
    return (
        <div style={{ backgroundImage: `url(${Landing})` }} className="min-h-screen bg-cover bg-center px-[5rem] w-screen font-semibold">
            <div className="navbar pt-[2rem] text-[#FFFFFF] w-full">
                <div className="logo flex items-center justify-between w-full">
                    <h1 className="text-[1.5rem]">Groomly</h1>
                    <div className="information flex items-center justify-center gap-10 cursor-pointer">
                        <h2>Discover</h2>
                        <h2>Services</h2>
                        <h2>About Us</h2>
                        <h2>Contact</h2>
                    </div>
                </div>

            </div>
            <div className="body pt-[5rem]">
                <div className="flex flex-col gap-7">
                    <p className="text-[#D4AF37]">Find your space. Find your glow</p>
                    <div className="text-[3rem]">
                        <h1 className="text-[#F7F4EF]">Discover the best<br /> <span className="text-[#D4AF37]">salons </span>
                            & <span className="text-[#D4AF37]">wellness</span> <br /> experiences near you.</h1>
                    </div>
                    <p className="text-[#F7F4EF]">Explore top-rated salons, barbar, spas and <br />beauty studios around you</p>
                </div>
                <div className="pt-[2rem] flex items-center">
                    <button className="py-[1rem] px-[3rem] bg-white rounded-xl text-center cursor-pointer" onClick={getUserLocation}> <FontAwesomeIcon icon={faLocationDot} /> Use my location</button>

                    <button className="py-[1rem] px-[3rem] bg-[#D4AF37] rounded-xl text-center cursor-pointer" onClick={handleExploreSalon}>Search</button>
                </div>
            </div>
            <div className="footer mt-[3rem] mr-[2rem] py-[1.5rem] border-yellow-200 border-1 bg-black rounded-xl text-white flex items-center justify-evenly">
                <div>
                    <h1>All Gender Friendly</h1>
                    <p className="text-xs font-thin">Everyone is welcome</p>
                </div>
                <div>
                    <h1>Trusted And Verified</h1>
                    <p className="text-xs font-thin">Quality you can rely on</p>
                </div>
                <div>
                    <h1>Easy Booking</h1>
                    <p className="text-xs font-thin">Book in just a few steps</p>
                </div>
                <div>
                    <h1>Wide Range of Services</h1>
                    <p className="text-xs font-thin">Hair, beauty, wellness and more</p>
                </div>
            </div>
        </div>
    )
}