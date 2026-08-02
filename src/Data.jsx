import { createContext, useState, useEffect } from "react";
import { Services } from "./assets/Services";
import { Times } from "./assets/Time";


export const userContext = createContext();
export const Data = ({ children }) => {

    const [userLocation, setUserLocation] = useState(null);
    const [salonList, setSalonList] = useState([]);
    const [selectedSalon, setSelectedSalon] = useState(null)
    const [selectedServices, setSelectedServices] = useState([]);
    const [loading, setLoading] = useState(false);
    const [displayLocation, setDisplayLocation] = useState([])
    const apiKey = import.meta.env.VITE_GEOAPIFY_API_KEY;
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState(null);
    const salonTime = Times

    const serviceNames = Services.filter((service) => {
        return selectedServices.includes(service.id);
    })

    const serviceTime = salonTime.find((time) => (
        time.id === selectedTime
    ))

    const totalAmount = serviceNames.reduce((total, service) => (
        total + service.price
    ), 0)

    const getUserLocation = () => {
        if (!navigator.geolocation) {
            alert(`Browser does not allow user location`);
            return;
        }
        navigator.geolocation.getCurrentPosition((position) => {
            setUserLocation({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            }
            )
        },

            (error) => {
                console.log(error.message);
            }
        )

    }

    useEffect(() => {
        if (userLocation) {
            Salons()
            location();
        }
    }, [userLocation])

    const Salons = async () => {
        setLoading(true);
        try {
            const salonResult = await fetch(`https://api.geoapify.com/v2/places?categories=commercial.health_and_beauty&filter=circle:${userLocation.longitude},${userLocation.latitude},10000&bias=proximity:${userLocation.longitude},${userLocation.latitude}&limit=20&apiKey=${apiKey}`)
            const finalSalonResult = await salonResult.json();
            console.log(finalSalonResult)
            setSalonList(finalSalonResult.features)
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }

    }

    const location = async () => {
        try {
            const location = await fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${userLocation.latitude}&lon=${userLocation.longitude}&apiKey=${apiKey}`);
            const finalLocation = await location.json();
            console.log(finalLocation)
            setDisplayLocation(finalLocation.features[0])
        } catch (error){
            console.log(error);
        }
    }
    return (
        <userContext.Provider value={{
            userLocation, setUserLocation, getUserLocation, salonList, setSalonList,
            selectedSalon, setSelectedSalon, selectedServices, setSelectedServices, loading, displayLocation,
            selectedDate, setSelectedDate, selectedTime, setSelectedTime, serviceNames, serviceTime, totalAmount, salonTime
        }}>
            {children}
        </userContext.Provider>
    )

}
