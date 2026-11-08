import { Clock } from "lucide-react";
import "./Footer.css";

const Footer = () => {
    const openingHour = 9;
    const closingHour = 17;

    const now = new Date();
    const currentHour = now.getHours();
    const currentDay = now.getDay();

    const isWeekday = currentDay >= 1 && currentDay <= 5;
    const isOpen = isWeekday && currentHour >= openingHour && currentHour < closingHour;

    const openElement = (
        <>
        <p className="inline-icon"><Clock className="icon" />We are open now!</p>
        <p>Call us at: <strong>(555) 123-4567</strong></p>
        </>
    );

    const closedElement = (
        <>
        <p className="inline-icon"><Clock className="icon" />We are closed.</p>
        <p>Hours: Mon-Fri {openingHour}:00 {openingHour < 12 ? "AM" : "PM"}—{closingHour > 12 ? closingHour - 12 : closingHour}:00 {closingHour < 12 ? "AM" : "PM"}</p>
        </>
    );

    return (
        <footer>
            {isOpen ? openElement : closedElement}
        </footer>
    );
};

export default Footer;