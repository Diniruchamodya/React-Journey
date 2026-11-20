import { useEffect, useState } from "react";
import CustomerCard from "../component/CustomerCard";


function PerformanceLab() {
  const [count, setCount] = useState(0);


  return(
    
    <div>
        <h1>Performance Lab</h1>
        <p>Count: {count}</p>
        <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
        <button onClick = {()=> setCount(prev => prev -1 )}>Decrement</button>
        <CustomerCard />
        console.log("PerformanceLab rendered");
    </div>
  )

}

export default PerformanceLab;