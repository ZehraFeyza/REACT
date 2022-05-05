import React,{useState,useEffect} from 'react';


const ChangeTitle = () => {
    const [sayac, setsayac] = useState(0);
    const artir=()=>{
        setsayac(sayac+1);
    }

useEffect(()=>{
document.title=`${sayac}`;

},[sayac]
)

  return (
    <div>
       
<h2> {sayac}  kere tıkladın</h2>
<button onClick={artir}>Tıkla </button>

    </div>
  )
}

export default ChangeTitle