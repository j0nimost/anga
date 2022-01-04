import {Grid, Card, CardContent, Typography , Stack, Slider} from '@mui/material'
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles({
    highlight: {
        marginTop: 7,
        marginBottom: 25,
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '100%'
    },

    grid: {
        paddingTop: '10px !important'
    },
    
    sliderHumidity: {
        color: '#38bed6 !important'
    },

    sliderAQUnsafe: {
        color: '#d63838 !important'
    },

    sliderAQGood: {
        color : '#80eb34 !important'
    },

    sliderAQBad: {
        color : '#eb8c34 !important'
    }

})


const SecondRowHighlights = ({currentWeather}) => {
    const classes = useStyles();

    const aq = (currentWeather.air_quality.co.toFixed()/500)*100;
    console.log(aq);
    return (
        <Grid container spacing={3.8} className={classes.highlight}>


            <Grid item xs={4} className={classes.grid}>
                <Card sx={{maxWidth: 282, minHeight: 170}}>
                    <Typography variant="h6">Humidity</Typography>
                    <CardContent>
                    <Stack sx={{ height: 80}} direction="row" spacing={8}>
                            
                            <Typography variant="h2">{currentWeather.humidity}<span className="todayHighlightDetail">%</span></Typography>
                            <Slider
                                    className={classes.sliderHumidity}
                                    orientation="vertical"
                                    defaultValue={10}
                                    value={currentWeather.humidity}
                                    disabled
                                />
                        </Stack>
                    </CardContent>
                </Card> 
            </Grid>

            <Grid item xs={4} className={classes.grid}>
                <Card sx={{maxWidth: 282, minHeight: 170}}>
                    <Typography variant="h6">Visibility</Typography>
                    <CardContent>
                        <Typography variant="h2">{currentWeather.vis_km} <span className="todayHighlightDetail">km</span></Typography>
                        <Typography variant='body'>
                            {(() => {
                                if(currentWeather.vis_km <= 2)
                                {
                                    return 'poor 😞'
                                }
                                else if(currentWeather.vis_km <= 5)
                                {
                                    return 'average 😒';
                                }
                                 return 'good 🙂'
                            })()}
                        </Typography>
                    </CardContent>
                </Card> 
            </Grid>

            <Grid item xs={4} className={classes.grid}>
                <Card sx={{maxWidth: 282, minHeight: 170, paddingBottom: '8px'}}>
                    <Typography variant="h6">Air Quality</Typography>
                    <CardContent sx={{paddingBottom: '10px !important'}}>
                        <Stack sx={{ height: 80}} direction="row" spacing={8}>
                            
                            
                            <Typography variant="h2">{currentWeather.air_quality.co.toFixed()}</Typography>
                            <Slider
                                    className={
                                        (() =>{
                                            if(aq <= 40)
                                            {
                                                return classes.sliderAQGood;
                                            }
                                            else if(aq <= 60)
                                            {
                                                return classes.sliderAQBad
                                            }
                                            return classes.sliderAQUnsafe;
                                        })()
                                    }
                                    orientation="vertical"
                                    defaultValue={0}
                                    value={aq > 100 ? 100 : aq}
                                    disabled
                                />
                        </Stack>
                        <Typography variant='body'>
                            {(() => {
                                if(aq <= 40)
                                {
                                    return 'Healthy 👌'
                                }
                                else if(aq <= 60)
                                {
                                    return 'UnHealthy 👎';
                                }
                                 return 'Unsafe ☣️'
                            })()}
                        </Typography>
                    </CardContent>
                </Card> 
            </Grid>
        </Grid>
    )
}

export default SecondRowHighlights
