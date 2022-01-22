import { Typography, Box} from "@mui/material"
import { makeStyles }from "@mui/styles"
import {useSelector} from 'react-redux';

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

const TodaySummary = ({iconUrl, isdegreeCelcius}) => {
    const classes = useStyles();
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const {current, location} = useSelector((state) => state);

    const weatherIconUrl = 'https:' + iconUrl.replace('64x64', '128x128');
    let today = new Date(location.localtime);
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
                {isdegreeCelcius === true ? current.temp_c : current.temp_f}
                
                {isdegreeCelcius === true ? <span className={classes.degree}>&#8451;</span> : <span className={classes.degree}>&#8457;</span>}
            </Typography>
            <Typography variant="h5">
                {weekday[today.getDay()]}, <span className={classes.hrs}>{(today.getHours() < 10 ? '0' + today.getHours().toString() : today.getHours()) + ':' + (today.getMinutes() < 10 ? '0' + today.getMinutes().toString() : today.getMinutes())}</span>
            </Typography>

        </div>
    )
}

export default TodaySummary
