import { useState } from 'react'

export default function SearchWeatherForm({getWeather}){

    const [weatherFormState, setWeatherFormState] = useState('')

    function handleChange(e) {
        console.log(e.target.value)
        setWeatherFormState(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        getWeather(weatherFormState)
        setWeatherFormState()
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Search Your Local City For Weather Updates" value={weatherFormState} onChange={handleChange} name="title" />
            <button>Search Local Weather Conditions</button>
        </form>

    );
}