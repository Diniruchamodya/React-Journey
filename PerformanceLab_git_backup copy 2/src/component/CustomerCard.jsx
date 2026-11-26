import { memo } from "react";


function CustomerCard() {

  console.log("CustomerCard rendered");
  const customer = { name: "Diniru", degree: "Industrial informaytion technology" };

  return (
    <div>
      <h1>Customer Details</h1>
      <p>Name: {customer.name}</p>
      <p>Degree: {customer.degree}</p>
    </div>
  );
}

export default memo(CustomerCard);