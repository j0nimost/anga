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
    },

    btnInactive: {
        borderColor: "gray",
        borderRadius: '14px',
        color: 'gray',
        fontSize: '14px'
    }
});




const WeatherForecastDetails = ({isdegreeCelcius,toggleCelciusOrFarenheit}) => {

    const [istodayForecast, setIstodayForecast] = useState(true);

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
            {istodayForecast ? <TodayForecast isdegreeCelcius={isdegreeCelcius}/> : <WeekForecast isdegreeCelcius={isdegreeCelcius}/>}

            <ButtonGroup variant='outlined' size='small' aria-label='small button group' className={classes.btngrp}>
                <Button className={isdegreeCelcius === false ? classes.btn : classes.btnInactive} onClick={toggleCelciusOrFarenheit} disabled={isdegreeCelcius}>&#8451;</Button>
                <Button className={isdegreeCelcius === true ? classes.btn : classes.btnInactive} onClick={toggleCelciusOrFarenheit} disabled={!isdegreeCelcius}>&#8457;</Button>
            </ButtonGroup>

            <TodayHighlights/>
        </Grid>
    )
}

export default WeatherForecastDetails
