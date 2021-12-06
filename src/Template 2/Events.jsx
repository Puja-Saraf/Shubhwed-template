import React from "react";

export default function Events() {
  const events = [
    {
      id: "1",
      eventTitle: "Mehendi",
      eventDesc:
        "I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      eventLink: "#",
      eventImg:
        "https://i2.wp.com/shubhwed.com/wp-content/uploads/2021/06/indian-henna-wedding-4388166.jpg?w=1280&ssl=1",
    },
    {
      id: "2",
      eventTitle: "Sangeet",
      eventDesc:
        "I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      eventLink: "#",
      eventImg:
        "https://i1.wp.com/shubhwed.com/wp-content/uploads/2021/06/pranav-kumar-jain-tbUfQt4mrBY-unsplash-scaled.jpg?resize=2048%2C1365&ssl=1",
    },
    {
      id: "3",
      eventTitle: "Haldi",
      eventDesc:
        "I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      eventLink: "#",
      eventImg:
        "https://i2.wp.com/shubhwed.com/wp-content/uploads/2021/06/pexels-vivek-5759328.jpg?w=640&ssl=1",
    },
  ];

  return (
    <>
      {events.map((e) => {
        if (+e.id % 2)
          return (
            <div className="container events">
                <div className="row">
                    <div className="col">
                        <h3 className="event-title event-title1">{e.eventTitle}</h3>
                        <p className="event-desc event-desc1">{e.eventDesc}</p>
                        <button className="event-btn event-btn1">Read More {'>>'} </button>
                    </div>
                    <div className="col">
                        <img  src={e.eventImg} alt="u" className="event-img event-img1" />
                    </div>
                </div>
            </div>
          );
          return (
            <div className="container events">
            <div className="row">
            <div className="col">
                    <img  src={e.eventImg} alt="u" className="event-img event-img2" />
                </div>
                <div className="col">
                    <h3 className="event-title event-title2">{e.eventTitle}</h3>
                    <p className="event-desc event-desc2">{e.eventDesc}</p>
                    <button className="event-btn event-btn2">Read More {'>>'} </button>
                </div>

            </div>
        </div>
          );       
      })}
    </>
  );
}
