import { useEffect, useState } from "react";
import axios from "axios";

function useWeatherInfo(city) {
    const apiKey = "9a080c4143d20f0d3cc3fb8d94f8e39c";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather";
    const units = "metric";

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!city) return;

        const fetchWeather = async () => {
            setLoading(true);
            setError(null);
            
            try {
                const response = await axios.get(`${apiUrl}?q=${city}&units=${units}&appid=${apiKey}`);
                setData(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchWeather();
    }, [city]);

    return { data, error, loading };
}

export default useWeatherInfo;
