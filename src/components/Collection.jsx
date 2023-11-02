import React from "react";
import Unit from "./Unit";

function Collection(props){
    return(
        <div className="container--fluid">
            <div className={`row row-cols-1 ${props.padding} row-cols-lg-${props.colNo} g-0`}>
                {props.units.map((unit)=>{
                    
                    return <Unit 
                        padding={props.padding}
                        alignItems={unit.alignItems}
                        bgImg={unit.bgImg}
                        heading={unit.heading}
                        subHeading={unit.subHeading}
                        textColor={unit.textColor}
                        learnMoreLink="https://www.apple.com/"
                        buyLink="https://www.apple.com/"
                    />
                })}
            </div>
        </div>
    )
}

export default Collection;