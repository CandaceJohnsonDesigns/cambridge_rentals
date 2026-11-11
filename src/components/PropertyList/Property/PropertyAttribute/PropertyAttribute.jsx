import "./PropertyAttribute.css";

const PropertyAttribute = ({ text, color = "#444" , bold }) => {
    return (
        <p className="property-attribute" 
            style={{ color, fontWeight: bold ? "bold" : "normal" }}>
            {text}
        </p>
    );
};

export default PropertyAttribute;