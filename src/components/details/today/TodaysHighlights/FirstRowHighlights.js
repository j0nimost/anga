import { Grid, Card, CardContent, Typography  } from "@mui/material"
import { makeStyles } from "@mui/styles"
import UVChart from "./UVChart"
import './firstRowUV.css'

const useStyles = makeStyles({
    highlight: {
        marginTop: 2,
        marginBottom: 15,
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '100%'
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
                    <Typography variant="h6">Gust</Typography>
                    <CardContent>
                        <Typography variant="h2">7.3 <span className="todayHighlightDetail">km/h</span></Typography>
                    </CardContent>
                </Card>
            </Grid>
        
        </Grid>
    )
}

export default FirstRowHighlights
