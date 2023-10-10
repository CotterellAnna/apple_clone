import React from "react";


function Unit(props){
    const bgStyle ={
        backgroundImage: `url(${props.bgImg})`, 
        backgroundSize: "cover",
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat",
        height:"40.2em"
    }

    return(
        <div className={`col mb-3 ${props.padding}`}>
            <div className={`d-flex justify-content-center ${props.alignItems}`} style={bgStyle}>
                <div className={`pt-5 px-5 mb-5 text-center ${props.textColor}`}>
                    <h2 className="mx-auto" style={{fontSize:"3.8em"}}>{props.heading}</h2>
                    <div style={{fontSize:"1.5em"}}>{props.subHeading}</div>
                    <div className="container">
                        <a className="fs-5 text-decoration-none me-4" href={props.learnMoreLink}>Learn more <i className="bi bi-chevron-right" style={{fontSize:"1em", lineHeight:"1.2"}}></i></a>
                        <a className="fs-5 text-decoration-none" href={props.buyLink}>Buy <i className="bi bi-chevron-right" style={{fontSize:"1em", lineHeight:"1.2"}}></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Unit;