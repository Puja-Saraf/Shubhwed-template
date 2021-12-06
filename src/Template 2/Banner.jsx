import React from "react";

export default function Banner() {
  const data = [{ groomName: "Manav", brideName: "Manavi" ,date:"August 2, 2021",weddingHall:"Wedding Hall",address:"Address"}];

  return <>
    <div className="banner">
        <div className="banner-text">
            {data[0].groomName}
            <br />
             &
            <br />
            {data[0].brideName}
            <br />
            {data[0].date}
        </div>
        
        
    </div>
    <div style={{backgroundColor:"#003E53",color:"#E8D0D0",padding:"20px",fontSize:"30px"}}>
            {`at ${data[0].weddingHall} , ${data[0].address}`}
    </div>
  </>;
}
