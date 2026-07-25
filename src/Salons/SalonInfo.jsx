import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faAngleLeft, faShareNodes} from "@fortawesome/free-solid-svg-icons";

export const SalonInfo = () => {
    return (
        <div className = "bg-[#F7F4EF] min-h-screen font-semibold">
            <div className="profileBar flex items-center justify-between mx-[2rem] pt-[2rem]">
                <div className = "flex items-center justify-center gap-1 cursor-pointer">
                    <FontAwesomeIcon icon={faAngleLeft} />
                    <p>Back</p>
                </div>
                <div class>
                <FontAwesomeIcon icon={faShareNodes} />
                </div>
            </div>
        </div>
    )
}