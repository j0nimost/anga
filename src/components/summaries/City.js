import city from '../../Nairobi_skyline.jpg'
import { Box, Card } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    imageDiv : {
        marginTop: '8%',
        marginLeft: '22%',
        position: 'relative'
    },

    cityName:{
            backgroundColor: 'transparent',
            borderColor: 'transparent',
            color: 'white',
            zIndex: '3',
            fontSize: '20px',
            position: 'absolute',
            top: '15vh',
            left: '3.5vw'
    }
})

const City = ({locationDetails}) => {
    const classes = useStyles();

    console.log(locationDetails)
    return (
        <div className={classes.imageDiv}>
            <Box
                component="img"
                sx={{
                    
                    width:'350px',
                    height:'140px',
                    maxHeight:{xs: 105, md: 180},
                    maxWidth: {xs: 120, md: 250},
                    borderRadius: '10px'
                }}
                src={city}
            />
            <Card className={classes.cityName}>
                {locationDetails.name}, {locationDetails.country}
            </Card>
            
        </div>
    )
}

export default City
