import { useMemo } from "react";

const booking = [
  { id: 1, name: "Wedding Photography", price: 15000 },
  { id: 2, name: "Portrait Photography", price: 8000 },
  { id: 3, name: "Event Photography", price: 12000 }
];

function BookingSummary({booking}){
     
    const totalRevenue = useMemo (()=>{
       console.log("Calculate Revenue");
        return booking.reduce((sum,item)=>sum+item.price,0);
        
    },[booking]);

     return (
    <div>
      
      <p>Display:{booking.length}</p>
      <p>Total Revenue: Rs. {totalRevenue}</p>

    
    </div>
  );
}

    
