import { Typography, Box} from "@mui/material"
import { makeStyles }from "@mui/styles"
import rainy from '../../rainy-day.png'

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

const TodaySummary = () => {
    const classes = useStyles();

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
                src={rainy}

            />

            <Typography variant="h2" component="h2">
                12 <span className={classes.degree}>&#8451;</span>
            </Typography>
            <Typography variant="h5">
                Monday, <span className={classes.hrs}>16:00</span>
            </Typography>

        </div>
    )
}

export default TodaySummary
