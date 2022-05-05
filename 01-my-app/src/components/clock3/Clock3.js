
import React , {useState, useEffect}  from 'react';
import "./clock3.css";
import moment from "moment";

const  Clock3=(props)=>{
    const [dateTime, setDateTime] = useState(moment());


    const timeStr=dateTime.format("HH:mm");
    const dateStr=dateTime.format("LL");
    const dayStr=dateTime.format("ddd");
    const hour=dateTime.format("HH");
    const minute=dateTime.format("mm");
const second=dateTime.format("ss");

    let message="";
    if(hour>6 & hour<11) message="morning";
    else if(hour>=11 && hour<17) message="afternoon";
else if(hour>=17 && hour<21) message="evening";
else message="night";
//useEffect [] parametresi ile birlikte  kullanıldıgında sadece component ilk render 
//edildiğinde çalısır,Sonrasındaki renderlarda çalışmaz.
//eger useEffect kullanmasaydık setInterval içinde  dateTime isimli state i değiştiren 
//bir komut olduğu için , her render işleminde  yeni bir setInterval nesnesi olusturulacak
//bu oluşturulan  her bir setInterval ise  başka bir setInterval oluşturacaktı.
//Bu şekilde logaritmik  artan  setInterval lar bir süre sonra  uygulamayı yavaşlatıp,
//sonrasında cevap veremez hale getirecekti

useEffect(() => {
    /*Bu kısım ilk render edildiginde calısır */
  const sayac=setInterval(()=>{
console.log("deneme");
setDateTime(moment());
  },1000);
/* Bu kısım ise unmound işleemi sırasında çalısır */
  return()=>{
      clearInterval(sayac);
  }

 
}, [])


    return (
    <div
     className="clock-container" 
     style={{color:props.yaziRengi , background:props.zeminRengi}}> 
        <div className="clock">{hour} 
        {second%2==0 ? ":" : ""}
        {minute}  </div>
        <div>
            <div className="date"> {dateStr} </div>
            <div className="day">{dayStr} {message} </div>
        </div>
    </div>
    );
}
export default Clock3;