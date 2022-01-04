import { Typography, Box} from "@mui/material"
import { makeStyles }from "@mui/styles"

const useStyles = makeStyles({
    todaysWeather: {
        marginTop: '8%',
        marginLeft: '22%'
    },
    hrs : {
        color: 'gray'
    },
    
    degree: {
        fontSize: '65%'
    }
})

const TodaySummary = ({currentWeather, iconUrl, locationDetails}) => {
    const classes = useStyles();
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];


    const weatherIconUrl = 'https:' + iconUrl.replace('64x64', '128x128');
    let today = new Date(locationDetails.localtime);
    return (
        <div className={classes.todaysWeather}>
            <Box
                component="img"
                sx={{
                    
                    width:220,
                    height:220,
                    maxHeight:{xs: 150, md: 300},
                    maxWidth: {xs: 150, md: 300}
                }}
                src={weatherIconUrl}

            />

            <Typography variant="h2" component="h2">
                {currentWeather.temp_c} <span className={classes.degree}>&#8451;</span>
            </Typography>
            <Typography variant="h5">
                {weekday[today.getDay()]}, <span className={classes.hrs}>{today.getHours() + ':' + today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes()}</span>
            </Typography>

        </div>
    )
}

export default TodaySummary
