import "./Property.css";
import PropertyImage from "./PropertyImage/PropertyImage";
import PropertyTypeLabel from "./PropertyImage/PropertyTypeLabel/PropertyTypeLabel";
import PropertyBanner from "./PropertyImage/PropertyBanner/PropertyBanner";

const Property = ({
  image,
  bedrooms,
  bathrooms,
  address,
  rent,
  surface,
  available,
  date,
  type,
}) => {
  return (
    <div
      className="property-card"
      style={{
        opacity: !available ? 0.5 : 1,
        order: !available ? 1 : 0,
      }}
    >
      <PropertyImage image={image}>
        <PropertyTypeLabel type={type} />
        {!available && <PropertyBanner />}
      </PropertyImage>
      <div>Property Attributes</div>
    </div>
  );
};

export default Property;