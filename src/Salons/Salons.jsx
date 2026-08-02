import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faHeart, faCircleUser, faMagnifyingGlass, faPersonHalfDress } from "@fortawesome/free-solid-svg-icons";
import Landing2 from "../../Assets/Landing2.png";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { userContext } from "../Data";
import { SalonShimmer } from "../Salons/SalonShimmer"
import {SalonImg} from "../assets/SalonImg"

export const Salons = () => {
    const { salonList, setSelectedSalon, displayLocation, loading } = useContext(userContext);
    const [filteredSalons, setFilteredSalons] = useState("");

    const searchedSalon = salonList.filter((salon) => (
        salon.properties.address_line1.toLowerCase().includes(filteredSalons.toLowerCase())
    ))
    if (loading) {
        return <SalonShimmer />
    }
    return (
        <div className="bg-[#F7F4EF] min-h-screen font-semibold">
            <div className="profileBar p-[2rem]">
                <div className="navbar flex items-center justify-between text-[black]">
                    <div className="logo text-[1.5rem]">
                        <h1>Groomly</h1>
                    </div>
                    <div className="profile flex items-center justify-center gap-10">
                        <div className="location flex items-center justify-center gap-2 ">
                            <FontAwesomeIcon icon={faLocationDot} />
                            <h2>{displayLocation?.properties?.city} {", "} {displayLocation?.properties?.county} {" "} {displayLocation?.properties?.state}</h2>
                        </div>
                        <FontAwesomeIcon icon={faHeart} className="text-[1.2rem] cursor-pointer" />
                        <FontAwesomeIcon icon={faCircleUser} className="text-[1.2rem] cursor-pointer" />
                    </div>
                </div>
                <div className="searchSalons pt-[2rem] flex flex-col gap-4">
                    <h1 className="text-[1.5rem]">Explore salons near you</h1>
                    <p className="text-[1rem]">find the best salons, beauty studios & wellness centers around you.</p>
                    <div className="inline-flex items-center justify-start pl-[2rem] w-full gap-3 bg-white rounded-xl">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                        <input type="text" className="py-4 outline-none w-full" value={filteredSalons} onChange={(e) => (setFilteredSalons(e.target.value))} />
                    </div>
                </div>
                {searchedSalon.map((item, index) => (
                    <div key={index} className="inline-flex items-center justify-center">
                        <div className="salonResults w-[20rem] m-[2rem] text-black bg-white 
                        rounded-xl inline-flex flex-col items-start justify-center">
                            <img src={SalonImg [index % SalonImg.length]} alt="salon" className="w-full h-48 object-cover rounded-t-xl" />
                            <div className="pl-[1rem] pt-[1rem]">
                                <h1>{item.properties.address_line1}</h1>
                                <p className="text-[0.9rem] font-thin">Shop: Beauty</p>
                                <p className="text-[0.9rem] font-thin">{item.properties.street}</p>
                            </div>
                            <div className="flex items-center justify-center w-full pt-[3rem] pb-[2rem]">
                                <Link to="/SalonInfo">
                                    <button className=" px-[4rem] py-[0.5rem] cursor-pointer rounded-xl 
                                border-black-800 border-1 text-[0.9rem]" onClick={() => setSelectedSalon(item)}>View Details</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}


            </div>
        </div>


    )

}