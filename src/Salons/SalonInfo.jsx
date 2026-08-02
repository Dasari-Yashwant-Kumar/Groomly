import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft, faShareNodes, faHeart, faLocationDot, faCircle, faIndianRupeeSign, faCertificate } from "@fortawesome/free-solid-svg-icons";
import { faPeriscope } from "@fortawesome/free-brands-svg-icons";
import { faCircleCheck, faUser } from "@fortawesome/free-regular-svg-icons";
import { Services } from "../assets/Services";
import { useState, useContext } from "react";
import {useNavigate} from "react-router-dom";
import {userContext} from "../Data";
import Landing3 from "../../Assets/Landing3.png"

export const SalonInfo = () => {
    const salonServices = Services;
    const {selectedSalon, selectedServices, setSelectedServices} = useContext(userContext);

    const navigateBooking = useNavigate();

    const handleBooking = () =>{
        if(selectedServices.length > 0){
            navigateBooking("/Booking")
        } else{
            alert("Select any services before moving forward.")
        }
    }

    return (
        <div className="bg-[#F7F4EF] min-h-screen font-semibold">
            <div className="profileBar flex items-center justify-between mx-[2rem] pt-[2rem]">
                <div className="flex items-center justify-center gap-1 cursor-pointer">
                    <FontAwesomeIcon icon={faAngleLeft} className="text-[1.2rem] cursor-pointer" />
                    <p>Back</p>
                </div>
                <div className="flex items-center justify-center gap-3">
                    <FontAwesomeIcon icon={faHeart} className="text-[1.2rem] cursor-pointer" />
                    <FontAwesomeIcon icon={faShareNodes} className="text-[1.2rem] cursor-pointer" />
                </div>
            </div>
            <div className="flex items-center justify-start gap-5">
                <div className="img mx-[2rem] w-[50vw]">
                    <img src={Landing3} alt="salon" className="rounded-xl h-[60vh]" />
                    <div className="flex items-center justify-center gap-5 text-center mt-10 py-7 border border-[#D4AF37] rounded-xl">
                        <div>
                            <FontAwesomeIcon icon={faIndianRupeeSign} className = "text-[1.5rem]" />
                            <h2>Affordable pricing</h2>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faCertificate} className = "text-[1.5rem]"/>
                            <h2>Quality services</h2>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faCircleCheck} className = "text-[1.5rem]"/>
                            <h2>Customer satisfaction</h2>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faUser} className = "text-[1.5rem]"/>
                            <h3>Trusted by hundreds</h3>
                        </div>


                    </div>
                </div>
                <div className="flex flex-col items-start justify-center mt-[1rem]">
                    <h1 className="text-[2rem]">{selectedSalon.properties.address_line1}</h1>
                    <div className="flex flex-col gap-4 items-start justify-center">
                        <div className="flex items-center justify-center gap-5">
                            <p>Beauty</p>
                            <FontAwesomeIcon icon={faCircle} className="text-[0.5rem]" />
                            <p>Spa</p>
                        </div>
                        <p><FontAwesomeIcon icon={faLocationDot} /> {selectedSalon.properties.address_line2}</p>
                        <div className="flex items-center justify-center gap-5">
                            <FontAwesomeIcon icon={faPeriscope} />
                            <p>Open  </p>
                            <FontAwesomeIcon icon={faCircle} className="text-[0.5rem]" />
                            <p>Closes at 9 Pm</p>
                        </div>
                        <div className="flex flex-col items-start justify-center">
                            <h1 className="pb-[2rem] text-[1.4rem]">Services Offered</h1>
                            {
                                salonServices.map((service) => {
                                    return (
                                        <div key={service.id} onClick = {() =>{
                                              setSelectedServices((previous)=>(
                                                previous.includes(service.id) ? previous.filter((id)=> id !== service.id) :
                                                [...previous, service.id]
                                            ))
                                        }
                                          
                                        }
                                            className={`grid grid-cols-[2fr_1fr_1fr] w-[40vw] py-4 pl-4 border-1 rounded-xl gap-20 cursor-pointer 
                                        ${selectedServices.includes(service.id) ? "border-2 border-[#D4AF37] bg-[#FFF8E1]" : "border border-[#D4AF37]"}
                                        `}>
                                            <h3>{service.name}</h3>
                                            <p>{service.defaultDuration} mins</p>
                                            <p>Rs. {service.price}</p>
                                        </div>
                                    )
                                })
                            }
                           
                            <button className="w-[40vw] bg-[#D4AF37] mt-[1rem] py-[1rem] rounded-xl cursor-pointer" onClick = {handleBooking}>Book Apointment</button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}