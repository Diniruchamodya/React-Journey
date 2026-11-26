import { memo } from "react";

function BookingCard({ name, price }) {
      console.log("BookingCard rendered")
      
 return(
    <div>
        <p>name:{name}</p>
        <p>price:{price}</p>
      
    </div>
 );
}
export default memo(BookingCard);