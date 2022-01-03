import { ClassNames } from '@emotion/react';
import {Grid, Card, CardContent, Typography , Stack, Slider} from '@mui/material'
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles({
    highlight: {
        marginTop: 15,
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

    sliderAQ: {
        color: '#d63838 !important'
    }

})


const SecondRowHighlights = () => {
    const classes = useStyles();
    return (
        <Grid container spacing={3.8} className={classes.highlight}>


            <Grid item xs={4} className={classes.grid}>
                <Card sx={{maxWidth: 282, minHeight: 170}}>
                    <Typography variant="h6">Humidity</Typography>
                    <CardContent>
                    <Stack sx={{ height: 80}} direction="row" spacing={8}>
                            
                            <Typography variant="h2">10<span className="todayHighlightDetail">%</span></Typography>
                            <Slider
                                    className={classes.sliderHumidity}
                                    orientation="vertical"
                                    defaultValue={10}
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
                        <Typography variant="h2">4 <span className="todayHighlightDetail">km</span></Typography>
                        <Typography variant='body'>average 😒</Typography>
                    </CardContent>
                </Card> 
            </Grid>

            <Grid item xs={4} className={classes.grid}>
                <Card sx={{maxWidth: 282, minHeight: 170}}>
                    <Typography variant="h6">Air Quality</Typography>
                    <CardContent>
                        <Stack sx={{ height: 80}} direction="row" spacing={8}>
                            
                            
                            <Typography variant="h2">300</Typography>
                            <Slider
                                    className={classes.sliderAQ}
                                    orientation="vertical"
                                    defaultValue={80}
                                    disabled
                                />
                        </Stack>
                    </CardContent>
                </Card> 
            </Grid>
        </Grid>
    )
}

export default SecondRowHighlights
