import { Typography } from "@mui/material"
import FirstRowHighlights from "./FirstRowHighlights"
import SecondRowHighlights from "./SecondRowHighlights"
import './todaysHighlights.css'


const index = () => {
    return (
        <>
            <Typography variant='h4' className="highlightTitle">Today's Highlight</Typography>
            <FirstRowHighlights/>
            <SecondRowHighlights/>
        </>
    )
}

export default index
