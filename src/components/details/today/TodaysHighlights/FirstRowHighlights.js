import { Grid, Card, CardContent, Typography, Stack, Box } from "@mui/material"
import { makeStyles } from "@mui/styles"
import UVChart from "./UVChart"


import sunrise from '../../../../imageIcons/sunrise.png';
import sunset from '../../../../imageIcons/sunset.png';
import './firstRowUV.css'

const useStyles = makeStyles({
    highlight: {
        marginTop: 2,
        marginBottom: 15,
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '100%'
    },

    suntimeFont: {
        fontSize: '17px',
        fontStyle:'bold',
        paddingLeft: '0px !important',
        marginTop: 'auto',
        marginBottom: 'auto'
    },

    sunIcon : {
        height: '48px',
        width:'50px',
        marginLeft:'24px'
    }

})

const FirstRowHighlights = () => {
    const classes = useStyles();
    return (
        <Grid container spacing={3.8} className={classes.highlight} >
            <Grid item xs={4}>
                <Card sx={{maxWidth:'fit-content', maxHeight:'fit-content'}}>
                    <Typography variant="h6">UV Index</Typography>
                    <CardContent className="uvDetail">
                        <UVChart/>
                        <h2 className="uv">7</h2>
                    </CardContent>
                    
                </Card>
            </Grid>

            <Grid item xs={4}>
                <Card sx={{maxWidth: 282, minHeight: 182}}>
                    <Typography variant="h6">Wind</Typography>
                    <CardContent>
                        <Typography variant="h2">5.4 <span className="todayHighlightDetail">km/h</span></Typography>
                        <Typography variant="body">Direction: NE</Typography>
                    </CardContent>
                </Card> 
            </Grid>

            <Grid item xs={4}>
                <Card sx={{maxWidth: 282, minHeight: 182}}>
                    <Typography variant="h6">Sunrise {`&`} Sunset</Typography>
                    <CardContent sx={{paddingTop: '8px'}}>
                        <Stack spacing={2}>
                            <Box>
                                <Grid container spacing={1} sx={{marginBottom: '8px'}}>
                                    <Grid item xs={5}>
                                        <img src={sunrise} className={classes.sunIcon}/>
                                    </Grid>
                                    <Grid item xs={6} className={classes.suntimeFont}>
                                        6:56 A.M
                                    </Grid>
                                </Grid>

                                <Grid container spacing={1}>
                                    <Grid item xs={5}>
                                        <img src={sunset} className={classes.sunIcon}/>
                                    </Grid>
                                    <Grid item xs={6} className={classes.suntimeFont}>
                                        6:05 P.M
                                    </Grid>
                                </Grid>
                            </Box>
                            
                        </Stack>
                    </CardContent>
                </Card>
            </Grid>
        
        </Grid>
    )
}

export default FirstRowHighlights
