const InternalStyle=()=>{

    const styleParagraph={
        color:"orange",
        fontsize:"2rem",

    };
    const styleZehra={
        backgroundColor:"blue",
    };

    return(
    <div style= { styleParagraph}>
        Bu gün Hava Sıcak
    <span style={styleZehra}>(Zehralar)</span></div>
    ); 
};
export default InternalStyle;