import { Grid } from "@mui/material"
import { makeStyles } from "@mui/styles";
import WeatherByTheHour from "./WeatherByTheHour";
import { useSelector } from "react-redux";

const useStyle = makeStyles({
    gridContainer: {
        marginTop: 3.5,
        marginBottom: 20,
        marginRight: 'auto',
        marginLeft: 'auto'
    }
})

const WeatherByTheHourList = () => {
    const classes = useStyle();
    const todaysForecast = useSelector((state) => state.forecast);
    return (
        <Grid container spacing={2} className={classes.gridContainer}>
            {todaysForecast.map((foreCast, index) => {
                return <WeatherByTheHour forecast={foreCast} key={index}/>
            })}
        </Grid>
    )
}

export default WeatherByTheHourList
