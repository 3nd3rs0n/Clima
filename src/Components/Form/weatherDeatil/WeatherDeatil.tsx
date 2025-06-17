import { Weather } from "../../../hooks/useWeather"
import { formatTemperature } from "../../../utils"
import styles from './WeatherDetail.module.css'

type WeatherDeatilProps = {
    weather: Weather
}

const WeatherDeatil = ({weather} : WeatherDeatilProps ) => {
  return (
    <div className={styles.container}>
        <h2> Clima de: {weather.name} </h2>
        <p className={styles.current}>{formatTemperature (weather.main.temp)} &deg;C</p>
        <div className={styles.temperature}>
            <p>Min: <span> <p>{formatTemperature (weather.main.temp_min)} &deg;C</p></span></p>
            <p>Min: <span> <p>{formatTemperature (weather.main.temp_max)} &deg;C</p></span></p>
        </div>
    </div>
  )
}

export default WeatherDeatil