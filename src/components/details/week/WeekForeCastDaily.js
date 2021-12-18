import { Grid, Card, CardMedia, CardActionArea, CardContent, Typography} from '@mui/material'
import rainy from '../../../rainy-day.png';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    forecastTitle: {
        paddingLeft: '4%'
    }
})

const WeekForeCastDaily = ({forecast}) => {
    const classes = useStyles();
    return (
        <Grid item xs={4} md={2}>
            <Card sx={{maxWidth: '95%'}}>
                <CardActionArea>
                    <Typography component='h4' className={classes.forecastTitle}>{forecast.day}</Typography>
                    <CardMedia
                        component='img'
                        height='45px'
                        image={rainy}

                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            {forecast.high}&#186; &nbsp; {forecast.low}&#186;
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    )
}

export default WeekForeCastDaily
