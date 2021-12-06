import React from "react";

export default function Banner() {
  const data = [{ groomName: "Manav", brideName: "Manavi"}];

  return <>
    <div className="banner4">
        <div className="banner-text4">
            {data[0].groomName}
             &
            {data[0].brideName}
        </div>
        
        
    </div>
  </>;
}
