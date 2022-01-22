import { Grid } from "@mui/material"
import { makeStyles } from "@mui/styles";
import WeekForeCastDaily from "./WeekForeCastDaily";
import { useSelector } from "react-redux";

const useStyle = makeStyles({
    gridContainer: {
        marginTop: 3.5,
        marginBottom: 20,
        marginRight: 'auto',
        marginLeft: 'auto'
    }
})

const WeekForecast = ({isdegreeCelcius}) => {
    const classes = useStyle();
    const weekForecast = useSelector((state) => state.weekForecast);
    return (
        <Grid container spacing={2} className={classes.gridContainer}>
            {weekForecast.map((foreCast, index) => {
                return <WeekForeCastDaily forecast={foreCast} key={index} isdegreeCelcius={isdegreeCelcius}/>
            })}
        </Grid>
    )
}

export default WeekForecast
