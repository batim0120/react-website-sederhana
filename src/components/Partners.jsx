import "../styles/Partners.css";
import { partnersList } from "../data/PartnersSection";

function Partners() {
  return (
    <div className="partner-list">
      {partnersList.map((item, index) => {
        return (
          <div key={index} className="kartu-partner">
            <img src={item.image} />
          </div>
        );
      })}
    </div>
  );
}

export default Partners;
