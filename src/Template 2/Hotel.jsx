import React from 'react'

export default function Hotel() {

    const hotels=[{name:"Hotel", desc:"We have booked a room for you at the Taj Mahal Palace Hotel in Colaba. Your details have been provided to the hotel and you just need to show a valid ID at the reception to check in. If you are traveling to India from abroad, Mumbai has an international airport. If you are travelling from within the country, Mumbai is well connected by train, bus and flight. The venue is under an hour’s drive from all the above arrival points.", imgUrl:"https://i2.wp.com/shubhwed.com/wp-content/uploads/2021/06/pexels-photo-1490994.jpeg?resize=1024%2C683&ssl=1"}]
    return (
        <div>
            <h3 className="hotel-title">{hotels[0].name}</h3>
            <p className="hotel-desc">{hotels[0].desc}</p>
            <img src={hotels[0].imgUrl} alt="a" className="hotel-img"/>
        </div>
    )
}
