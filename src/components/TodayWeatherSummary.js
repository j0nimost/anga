import { Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'

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

const TodayWeatherSummary = () => {
    const classes = useStyles();

    return (
        <Grid className={classes.summary} item md={3} >
            <Search btn={classes.summarydetails}/>
            <TodaySummary/>
            <City/>
        </Grid>
    )
}

export default TodayWeatherSummary
