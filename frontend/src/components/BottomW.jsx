import { Link } from "react-router-dom";

export function BottomW({label,buttonText,to}){
    return(
        <div>
            {label} <Link to={to} className="text-[#5E3023]" > {buttonText} </Link>
        </div>
    )
}