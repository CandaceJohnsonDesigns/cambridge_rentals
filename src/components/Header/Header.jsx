import "./Header.css";
import { House, Mail, Phone } from "lucide-react";

const Header = () => {
    return (
        <header>
            <div className="header-item brand">
                <House className="icon" />
                <span>Cambridge Rentals</span>
            </div>
            <div className="header-item">
                <Phone className="icon" />
                <span>(555) 123-4567</span>
            </div>
            <div className="header-item">
                <Mail className="icon" />
                <span>info@cambridgerentals.com</span>
            </div>
        </header>
    );
};

export default Header;