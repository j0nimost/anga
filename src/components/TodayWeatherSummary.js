import { Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'

import { useSelector } from 'react-redux'

import Search from './summaries/Search'
import TodaySummary from './summaries/TodaySummary'
import City from './summaries/City'

const useStyles = makeStyles(theme => ({
    summary: {
        backgroundColor: 'white',
        height: '100%',
        minHeight: 'fit-content'
    },

    summarydetails: {
        marginLeft: '22%',
        marginTop: '8%'
    }
}))

const TodayWeatherSummary = ({iconUrl, isdegreeCelcius, handleOnSearch}) => {
    const classes = useStyles();
    const {current, location} = useSelector((state) => state);
    return (
        <Grid className={classes.summary} item md={3} xs={12} >
            <Search btn={classes.summarydetails} handleOnSearch={handleOnSearch}/>
            <TodaySummary currentWeather={current} iconUrl={iconUrl} isdegreeCelcius={isdegreeCelcius} locationDetails={location}/>
            <City locationDetails={location}/>
        </Grid>
    )
}

export default TodayWeatherSummary
