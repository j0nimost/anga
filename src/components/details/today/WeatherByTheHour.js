import { Grid, Card, CardMedia, CardActionArea, CardContent, Typography} from '@mui/material'
import rainy from '../../../rainy-day.png';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    forecastTitle: {
        paddingLeft: '8%',
        textAlign: 'left'
    },

    imageSize: {
        height: '40%',
        width: '39%',
        objectFit: 'contain',
        marginLeft: 'auto',
        marginRight: 'auto'
    }
})
// 6hrs

const WeatherByTheHour = ({forecast, isdegreeCelcius}) => {
    const classes = useStyles();
    
    let icon

    const hour = forecast.time.substring(11);

    ({icon} = forecast.condition);



    return (
        <Grid item xs={4} md={2}>
            <Card sx={{maxWidth: '95%', minHeight: '121.012px'}}>
                <CardActionArea>
                    <Typography component='h4' className={classes.forecastTitle}>{hour}</Typography>
                    <CardMedia
                        className={classes.imageSize}
                        component='img'
                        image={'https:' + icon}

                    />
                    <CardContent sx={{paddingTop: '8px', textAlign: 'center'}}>
                        <Typography variant="body2" color="text.secondary">
                            {isdegreeCelcius ? forecast.temp_c : forecast.temp_f}&#186; &nbsp; {forecast.humidity}%
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>

    )
}

export default WeatherByTheHour
