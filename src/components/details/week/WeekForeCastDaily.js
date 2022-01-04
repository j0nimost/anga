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

const WeekForeCastDaily = ({forecast}) => {
    const classes = useStyles();
    let icon;

    ({icon} = forecast.day.condition);


    let weekday = ['Sunday',
                   'Monday',
                   'Tuesday',
                   'Wednesday',
                   'Thursday',
                   'Friday',
                   'Saturday'][new Date(forecast.date).getDay()];


    return (
        <Grid item xs={4} md={2}>
            <Card sx={{maxWidth: '95%'}}>
                <CardActionArea>
                    <Typography component='h4' className={classes.forecastTitle}>{weekday}</Typography>
                    <CardMedia
                        className={classes.imageSize}
                        component='img'
                        image={'https:' + icon}

                    />
                    <CardContent sx={{paddingTop: '8px', textAlign: 'center' }}>
                        <Typography variant="body2" color="text.secondary">
                            {forecast.day.maxtemp_c}&#186; &nbsp; {forecast.day.mintemp_c}&#186;
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    )
}

export default WeekForeCastDaily
