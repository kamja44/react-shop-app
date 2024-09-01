import React from "react";

const OrderDetails = ({ params, searchParams }) => {
  const { id } = params;
  const { hello } = searchParams;
  return (
    <div>
      {id}
      <br />
      {hello}{" "}
    </div>
  );
};

export default OrderDetails;
