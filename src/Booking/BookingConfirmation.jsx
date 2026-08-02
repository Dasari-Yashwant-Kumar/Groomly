import Confirmation from "../../Assets/Confirmation.png";
import { userContext } from "../Data";
import { useContext } from "react";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const BookingConfirmation = () => {
    const { selectedSalon, selectedServices, selectedDate, setSelectedDate,
        selectedTime, setSelectedTime, serviceNames, serviceTime, totalAmount } = useContext(userContext);
    return (
        <div style={{ backgroundImage: `url(${Confirmation})` }}
            className="min-h-screen bg-center bg-cover flex flex-col justify-center items-center gap-10">
            <FontAwesomeIcon
                icon={faCircleCheck}
                className="text-green-500 text-[5rem]"
            />
            <div className="text-white flex flex-col justify-center items-center">
                <h1 className="text-[1.5rem]">Appointement Confirmed!</h1>
                <p>Your booking has been confirmed successfully</p>
            </div>
            <div className="bg-white rounded-lg p-[1rem] mt-[1rem] w-[60vw]">
                <h1 className="pb-[1rem]">Booking Summary</h1>
                <div className="flex items-center justify-between font-normal mb-3">
                    <p>Salon</p>
                    <p>{selectedSalon.properties.address_line1}</p>
                </div>
                <div className="flex items-center justify-between font-normal mb-3">
                    <p>Services</p>
                    <p>{serviceNames.map((service, index) => {
                        return <span key={service.id}>{service.name}
                            {index < serviceNames.length - 1 && ", "}

                        </span>
                    })}</p>
                </div>
                <div className="flex items-center justify-between font-normal mb-3">
                    <p>Date & Time</p>
                    <p>{selectedDate?.toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric"
                    })}, {serviceTime?.time}</p>
                </div>
                <hr className="bg-orange-300 border-0 h-[1px] my-5" />
                <div className="flex items-center justify-between font-normal mb-3">
                    <h1>Total Payable</h1>
                    <p>Rs. {totalAmount}</p>
                </div>
            </div>
        </div>
    )

}