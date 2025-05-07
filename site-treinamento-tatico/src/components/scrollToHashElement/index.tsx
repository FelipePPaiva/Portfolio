import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export function ScrollToHashElement(){
    const location = useLocation();

    useEffect(()=>{
        if(location.hash){
        const element = document.querySelector(location.hash);
        if(element){
            setTimeout(() => {
            element.scrollIntoView({behavior : "smooth"});
            },30);
        }
        }
    },[location]);

    return null;
}