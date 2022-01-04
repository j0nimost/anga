import { Grid, Button, ButtonGroup, Tabs, Tab} from "@mui/material"
import { makeStyles }from "@mui/styles"
import { useState } from "react";

import TodayForecast from './details/today';
import WeekForecast from "./details/week";
import TodayHighlights from './details/today/TodaysHighlights'



const useStyles = makeStyles({
    details : {
        backgroundColor: '#f6f1f6',
        height: '100%',
        minHeight: 'fit-content'
    },
    btngrp: {
        position: 'absolute',
        right: '24px',
        top: '18px'
    },

    btn: {
        borderColor: "black",
        borderRadius: '14px',
        color: 'black',
        fontSize: '14px'
    },

    tab: {
        paddingLeft: '4px',
        paddingRight: '4px',
        color: 'black'
    },

    tabNotActive: {
        paddingLeft: '4px',
        paddingRight: '4px',
        color: 'gray'
    }
});




const WeatherForecastDetails = ({currentWeather, todaysForecast, weekForecast, sunset, sunrise}) => {

    const [istodayForecast, setIstodayForecast ] = useState(true);

    const handleIsTodayForecast =(e) => {
        setIstodayForecast(true);
    }

    const handleIsWeekForecast =(e) => {
        setIstodayForecast(false);
    }


    const classes = useStyles();
    return (
        <Grid container item md={9} className={classes.details}>
            <Tabs>
                <Tab className={istodayForecast ? classes.tabNotActive : classes.tab} label='Today'  onClick={handleIsTodayForecast} />
                <Tab className={!istodayForecast ? classes.tabNotActive : classes.tab} label='Week' onClick={handleIsWeekForecast}/>
            </Tabs>
            {istodayForecast ? <TodayForecast  todaysForecast={todaysForecast}/> : <WeekForecast weekForecast={weekForecast}/>}

            <ButtonGroup variant='outlined' size='small' aria-label='small button group' className={classes.btngrp}>
                <Button className={classes.btn}>&#8451;</Button>
                <Button className={classes.btn}>&#8457;</Button>
            </ButtonGroup>

            <TodayHighlights currentWeather={currentWeather} sunrise={sunrise} sunset={sunset}/>
        </Grid>
    )
}

export default WeatherForecastDetails