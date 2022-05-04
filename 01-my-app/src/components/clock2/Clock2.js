
import React from 'react';
import "./clock2.css";
import moment from "moment";
const  Clock2=(props)=>{

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
    <div classnameName="clock-container" style={{color:props.yaziRengi , background:props.zeminRengi}}> 
        <div classnameName="clock"> {timeStr}  </div>
        <div>
            <div classnameName="date"> {dateStr} </div>
            <div classnameName="day">{dayStr} {message} </div>
        </div>
    </div>
    );
}
export default Clock2;