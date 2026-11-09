import "./Property.css";
import PropertyImage from "./PropertyImage/PropertyImage";
import PropertyTypeLabel from "./PropertyImage/PropertyTypeLabel/PropertyTypeLabel";
import PropertyBanner from "./PropertyImage/PropertyBanner/PropertyBanner";
import IconWithText from "./PropertyImage/IconWithText/IconWithText";
import { Bath, Bed, Maximize } from "lucide-react";

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
        <div className="property-info">
            <IconWithText Icon={Bed} text={bedrooms} />
            <IconWithText Icon={Bath} text={bathrooms} />
            <IconWithText Icon={Maximize} text={surface} />
        </div>
      </PropertyImage>
      <div>Property Attributes</div>
    </div>
  );
};

export default Property;