import { Grid } from "@mui/material"
import { makeStyles } from "@mui/styles";
import WeekForeCastDaily from "./WeekForeCastDaily";

const weekForeCast = [
    {day: 'Mon', high: 23, low: 17},
    {day: 'Tue', high: 24, low: 18},
    {day: 'Wed', high: 24, low: 18},
    {day: 'Thur', high: 22, low: 19},
    {day: 'Friday', high: 25, low: 21},
    {day: 'Sat', high: 16, low: 13},
]

const useStyle = makeStyles({
    gridContainer: {
        marginTop: 3.5,
        marginBottom: 20,
        marginRight: 'auto',
        marginLeft: 'auto'
    }
})

const WeekForecast = () => {
    const classes = useStyle();
    return (
        <Grid container spacing={2} className={classes.gridContainer}>
            {weekForeCast.map((foreCast, index) => {
                return <WeekForeCastDaily forecast={foreCast} key={index}/>
            })}
        </Grid>
    )
}

export default WeekForecast
