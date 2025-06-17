import { countries } from "../../Data/Countries"
import styles from './Form.module.css'
import { ChangeEvent, useState } from "react"
import { SearchType } from "../../types"
import Alert from "./Alert/Alert"


type FormProps = {
  fetcWeather: (search: SearchType) => Promise<void>
}

const Form = ({fetcWeather}:FormProps) => {
  const [search,setSearch] = useState <SearchType>({
    city: '',
    country: ''
  })

  const [alert, setAlert] = useState ('')

  const handleChange = (e:ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value
    })

  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (Object.values(search).includes('')) {
      setAlert('Todos los campos son obligatorios')
      return
    }

    fetcWeather(search)
   
  }


  return (
    <form 
      className={styles.form}
      onSubmit={handleSubmit}
    >
      {alert && <Alert> {alert}</Alert>}
      <div className={styles.field}>
        <label htmlFor="city">Ciudad:</label>
        <input 
          type="text" 
          id="city" 
          name="city" 
          placeholder="Ciudad"
          value={search.city}
          onChange={handleChange}
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="country">Pais:</label>
        <select 
          id="country"
          value={search.country}
          name="country"
          onChange={handleChange}
        >
            <option value="">---Selecciones un pais---</option>
            {countries.map( country => (
              <option 
              key={country.code}
              value={country.code}
              >
                {country.name}
              </option>
            ))}
        </select>
      </div>

      <input className={styles.submit} type="submit" value="Consultar Clima" />

    </form>
  )
}

export default Form