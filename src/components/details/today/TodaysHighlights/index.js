import { Typography } from "@mui/material"
import FirstRowHighlights from "./FirstRowHighlights"
import SecondRowHighlights from "./SecondRowHighlights"

import { useSelector } from "react-redux";
import './todaysHighlights.css'


const index = () => {

    const states = useSelector((state) => state);
    const {current, sunriseandsunset} = states;
    return (
        <>
            <Typography variant='h4' className="highlightTitle">Today's Highlight</Typography>
            <FirstRowHighlights currentWeather={current} sunrise={sunriseandsunset.sunrise} sunset={sunriseandsunset.sunset}/>
            <SecondRowHighlights currentWeather={current}/>
        </>
    )
}

export default index
