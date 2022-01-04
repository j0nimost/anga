import { Typography } from "@mui/material"
import FirstRowHighlights from "./FirstRowHighlights"
import SecondRowHighlights from "./SecondRowHighlights"
import './todaysHighlights.css'


const index = ({currentWeather, sunset, sunrise}) => {
    return (
        <>
            <Typography variant='h4' className="highlightTitle">Today's Highlight</Typography>
            <FirstRowHighlights currentWeather={currentWeather} sunrise={sunrise} sunset={sunset}/>
            <SecondRowHighlights currentWeather={currentWeather}/>
        </>
    )
}

export default index
