import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faHeart, faCircleUser, faMagnifyingGlass, faPersonHalfDress } from "@fortawesome/free-solid-svg-icons";
import Landing2 from "../../Assets/Landing2.png";

export const Salons = () => {
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
                            <h2>Name of location</h2>
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
                        <input type="text" className="py-4 outline-none w-full" />
                    </div>
                </div>
                {[1, 2, 3].map((item) => (
                    <div className = "inline-flex items-center justify-center">
                        <div key = {item} className="salonResults max-w-[20rem] m-[2rem] text-black bg-white 
                        rounded-xl inline-flex flex-col items-start justify-center">
                            <img src={Landing2} alt="salon" className = "rounded-t-xl"/>
                            <div className="pl-[1rem] pt-[1rem]">
                                <h1>Name of Salon</h1>
                                <p className = "text-[0.9rem] font-thin">Shop: Beauty</p>
                                <p className = "text-[0.9rem] font-thin">Short adddress</p>
                            </div>
                           <div className = "flex items-center justify-center w-full pt-[3rem] pb-[2rem]">
                                 <button className = " px-[4rem] py-[0.5rem] cursor-pointer rounded-xl border-black-800 border-1 text-[0.9rem]">View Details</button>
                            </div>
                        </div>        </div>           
                ))}


            </div>
        </div>
    )

}