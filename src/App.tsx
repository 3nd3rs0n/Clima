
import styles from './App.module.css'
import Alert from './Components/Form/Alert/Alert'
import Form from './Components/Form/Form'
import Spinner from './Components/Form/Spinner/Spinner'
import WeatherDeatil from './Components/Form/weatherDeatil/WeatherDeatil'
import useWeather from './hooks/useWeather'



const App = () => {

  const { weather, fetcWeather,hasWeatherData,loading,notFound } = useWeather()

  return (
    < >
      <h1 className={styles.title}>Buscador de Climas </h1>
      <div className={styles.container}>
          <Form fetcWeather={fetcWeather} />

          {loading && <Spinner/>}
          {hasWeatherData && <WeatherDeatil weather={weather} />}
          {notFound && <Alert> ciudad no encontrada</Alert>}
          
      </div>
    </>
  )
}

export default App