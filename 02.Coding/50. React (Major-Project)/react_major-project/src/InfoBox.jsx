import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}) {
    const INIT_URL = "https://images.unsplash.com/photo-1575214997383-a3592741c334?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGR1c3R5fGVufDB8fDB8fHww";

    const HOT_URL = "https://images.unsplash.com/photo-1526643779490-52cc8d558c29?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL = "https://media.istockphoto.com/id/1296158976/photo/female-hands-in-knitted-mittens-with-snowy-heart-against-snow-background.jpg?s=1024x1024&w=is&k=20&c=pBLBjRp6OzkjOlw7DQl-3qJevwdPJUeS9xHh6UBGHYw=";
    const RAINY_URL = "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=1024x1024&w=is&k=20&c=U6uwI27fEfgEAl9j_Hz848FgLRidd9Ww0kPCkc0FZB8=";
   
    return(
        <div className='InfoBox'><br/>
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={info.humidity > 80 
                        ? RAINY_URL 
                        : info.temp > 15 
                        ? HOT_URL
                        :COLD_URL  }
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city} {
                        info.humidity > 80 
                        ? <ThunderstormIcon/>
                        : info.temp > 15 
                        ? <WbSunnyIcon/>
                        : <AcUnitIcon/>
                        }
                    
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component={"span"}>
                        <p>Temperature - {info.temp}&deg;C</p>
                        <p>Humidity - {info.humidity}</p>
                        <p>Max_Temp - {info.tempMax}&deg;C</p>
                        <p>Min_Temp - {info.tempMin}&deg;C</p>
                        <p>The weather can be describe as <i><b>{info.weather}</b></i> and feels like <i><b>{info.feelsLike}&deg;C</b></i> </p>
                    </Typography>
                </CardContent>
            </Card>
            </div>
        </div>
    )
}