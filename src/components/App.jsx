import React from "react";
import Navbar from "./Navbar";
import Collection from "./Collection";

function App(){
    return(
        <div className="App">
            <Navbar />
            <Collection
                colNo="1"
                units={[
                    {
                        textColor:"text-light",
                        bgImg:"/images/iphone_15pro.jpeg",
                        heading:"iPhone 15 Pro",
                        subHeading:<h3>Titanium. So strong. So light. So Pro.</h3>
                    },
                    {
                        textColor:"text-dark",
                        bgImg:"/images/iphone_15.jpeg",
                        heading:"iPhone 15",
                        subHeading:<h3>New camera. New design. Newphoria.</h3>
                    },
                    {
                        textColor:"text-light",
                        bgImg:"/images/apple_watch_series_9.jpeg",
                        heading:<img src='/images/series9_watch_heading.png' alt="" />,
                        subHeading:<h3>Smarter. Brighter. Mightier.</h3>
                    }
                ]}
             />
             <Collection 
                padding="px-2"
                colNo="2"
                units={[
                    {
                        textColor:"text-light",
                        bgImg:"/images/ipad_pro.jpeg",
                        heading:"iPad Pro",
                        subHeading:["Supercharged by ", <img src='/images/m2_chip.png' alt="" />]
                    },
                    {
                        alignItems:"align-items-end",
                        textColor:"text-dark",
                        bgImg:"/images/vision_pro.jpeg",
                        heading:<img src='/images/vision_pro-text.png' alt="" />,
                        subHeading:<p>Welcome to the era of spatial computing.</p>
                    },
                    {
                        textColor:"text-dark",
                        bgImg:"/images/macbook_air.jpeg",
                        heading:'MacBook Air 15"',
                        subHeading: <p>Impressively big. Impossibly thin.</p>
                    },
                    {
                        textColor:"text-light",
                        bgImg:"/images/airpods_pro.jpeg",
                        heading:"Airpods Pro",
                        subHeading:<p>Adaptive Audio. Now playing.</p>
                    },
                    {
                        textColor:"text-dark",
                        bgImg:"/images/trade_in.jpeg",
                        heading:<img src="/images/trade_in_text.png" alt="" />,
                        subHeading:<p>Get $200-$650 in credit when you trade in iPhone 11 or higher.</p>
                    },
                    {
                        textColor:"text-dark",
                        bgImg:"/images/apple_card.jpeg",
                        heading:<img src="/images/card_text.png" alt="" />,
                        subHeading:<p>Get up to 3% Daily cash back with every purchase.</p>
                    }
                ]}
             />
        </div>
    )
}

export default App;