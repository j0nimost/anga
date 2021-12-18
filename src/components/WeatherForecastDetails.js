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
    }
});




const WeatherForecastDetails = () => {

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
                <Tab className={classes.tab} label='Today' onClick={handleIsTodayForecast} />
                <Tab className={classes.tab} label='Week' onClick={handleIsWeekForecast}/>
            </Tabs>
            {istodayForecast ? <TodayForecast/> : <WeekForecast/>}

            <ButtonGroup variant='outlined' size='small' aria-label='small button group' className={classes.btngrp}>
                <Button className={classes.btn}>&#8451;</Button>
                <Button className={classes.btn}>&#8457;</Button>
            </ButtonGroup>

            <TodayHighlights/>
        </Grid>
    )
}

export default WeatherForecastDetails
