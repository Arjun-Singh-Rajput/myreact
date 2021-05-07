import React from 'react';



function Banner(props){
    const img = "https://www.ju.st/sites/default/files/stories/hero/products%20hero_DSK.jpg"
    const img2 = "https://www.ju.st/sites/default/files/hero/mobile/NEW_hero_mobile_newv2.jpg"
    return(
        <>
        <div className="deskview">
        <img src={props.image} className="img" width="100%;" style={{marginTop:"-85px",objectFit: "cover"}} />
        </div>
        <div className="mobview">
        <img src={props.imagetwo} className="img2" width="90%;" style={{marginTop:"-85px",objectFit: "cover"}} />
        </div>
        </>
    );
}

export default Banner;