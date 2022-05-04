import React from 'react';
import "./clock1.css";
import moment from "moment";
const  Clock1=()=>{

    const dateTime=moment();
    const timeStr=dateTime.format("HH:mm");
    const dateStr=dateTime.format("LL");
    const dayStr=dateTime.format("ddd");
    const hour=dateTime.format("HH");
    let message="";
    if(hour>6 & hour<11) message="morning";
    else if(hour>=11 && hour<17) message="afternoon";
else if(hour>=17 && hour<21) message="evening";
else message="night";


    return (
    <div classnameName="clock-container">
        <div classnameName="clock"> {timeStr}  </div>
        <div>
            <div classnameName="date"> {dateStr} </div>
            <div classnameName="day">{dayStr} {message} </div>
        </div>
    </div>
    );
}
export default Clock1;