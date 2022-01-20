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

const TodayWeatherSummary = ({iconUrl, handleOnSearch}) => {
    const classes = useStyles();
    
    return (
        <Grid className={classes.summary} item md={3} xs={12} >
            <Search btn={classes.summarydetails} handleOnSearch={handleOnSearch}/>
            <TodaySummary currentWeather={currentWeather} iconUrl={iconUrl} locationDetails={locationDetails}/>
            <City locationDetails={locationDetails}/>
        </Grid>
    )
}

export default TodayWeatherSummary
