import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faCalendar } from "@fortawesome/free-regular-svg-icons";
import {faArrowLeftLong,faArrowRightLong} from "@fortawesome/free-solid-svg-icons"
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Times } from "../assets/Time"

export const Booking = () => {

    const salonTime = Times
    return (
        <div className="bg-[#F7F4EF] min-h-screen font-semibold">
            <div className="profileBar flex flex-col items-center justify-center pt-[2rem]">
                <div className = "flex items-center justify-center gap-20">
                    <FontAwesomeIcon icon={faArrowLeftLong} className="text-[2rem] text-orange-300"/>
                    <h1 className="text-[2rem]">Book Your Appointment</h1>
                    <FontAwesomeIcon icon={faArrowRightLong}  className="text-[2rem] text-orange-300"/>
                </div>

                <p className="font-normal">Select your preferred date & time and enter your details to confirm your booking.</p>
            </div>
            <div className="flex items-start justify-center gap-4 px-5 pt-5 text-sm">
                <div className="date & time border-2 border-orange-200 rounded-xl w-[50vw] p-[1rem]">
                    <div className="flex items-center justify-start gap-2 pb-3">
                        <FontAwesomeIcon icon={faCalendar} className="text-[2rem] text-orange-300" />
                        <div>
                            <h1>SELECT DATE & TIME</h1>
                            <p className="text-gray-500 text-sm">Choose your preferred date and time for the appointment</p>
                        </div>
                    </div>
                    <div className="flex items-start justify-center gap-5">
                        <div className="date">
                            <h1 className="pb-2">Select Date</h1>
                            <Calendar className="rounded-xl" />
                        </div>
                        <div className="flex flex-col">
                            <h1 className="pb-2">Select Time</h1>
                            <div className="grid grid-cols-2 gap-6">
                                {salonTime.map((time) => (
                                    <p key={time.id} className="py-2 px-4 border-2 text-center rounded-lg cursor-pointer">{time.time}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="personalInfo border-2 border-orange-200 rounded-xl w-[50vw]">
                    <div className="p-[1rem]">
                        <div className="flex  items-center justify-start gap-2 pb-3">
                            <FontAwesomeIcon icon={faCircleUser} className="text-[2rem] text-orange-300" />
                            <div >
                                <h1>YOUR DETAILS</h1>
                                <p className="text-gray-500 text-sm">Enter your details to confirm the appointment</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">

                            <div className="flex flex-col">
                                <label htmlFor="name">Full name</label>
                                <input id="name" className=" border-2 border-orange-200 rounded-l pl-2 py-1" />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="phone">Phone Number</label>
                                <input id="phone" className=" border-2 border-orange-200 rounded-l pl-2 py-1" />
                            </div>

                            <div className="col-span-2 flex flex-col">
                                <label htmlFor="email">Email</label>
                                <input id="email" className=" border-2 border-orange-200 rounded-l pl-2 py-1" />
                            </div>

                            <div className="col-span-2 flex flex-col">
                                <label htmlFor="notes">
                                    Note <span className="text-gray-500 text-sm">(optional)</span>
                                </label>
                                <textarea
                                    id="notes"
                                    className="h-20 w-full resize-none border-2 border-orange-200  pl-2 pt-2"
                                />
                            </div>

                        </div>
                        <div className="border-2 border-orange-200 rounded-l p-[1rem] mt-[1rem]">
                            <h1 className="pb-[1rem]">Booking Summary</h1>
                            <div className="flex items-center justify-between font-normal mb-3">
                                <p>Salon</p>
                                <p>Name of Salon</p>
                            </div>
                            <div className="flex items-center justify-between font-normal mb-3">
                                <p>Services</p>
                                <p>Name of all services</p>
                            </div>
                            <div className="flex items-center justify-between font-normal mb-3">
                                <p>Date & Time</p>
                                <p>20 AUG 2026, 10AM</p>
                            </div>
                            <hr className="bg-orange-300 border-0 h-[1px] my-5" />
                            <div>
                                <h1>Total Payable</h1>
                            </div>
                        </div>
                        <button className="bg-amber-600 w-full text-center mt-5 p-3 rounded-xl">Confirm Booking</button>
                    </div>
                </div>
            </div>
        </div>
    )
}