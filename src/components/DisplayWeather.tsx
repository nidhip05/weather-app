import axios from "axios";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import {
  BsCloudFog2Fill,
  BsCloudyFill,
  BsFillCloudRainFill,
  BsFillSunFill,
} from "react-icons/bs";
import { RiLoaderFill } from "react-icons/ri";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { WiHumidity } from "react-icons/wi";
import { TbWind } from "react-icons/tb";
import { MainWrapper } from "./styles.module";

interface WeatherDataProps {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  sys: {
    country: string;
  };
  weather: {
    main: string;
  }[];
  wind: {
    speed: number;
  };
}

const DisplayWeather = () => {
  const apiKey = "0cc86d16bf572f78cdc96c096c7627e5";
  const apiEndpoint = "http://api.openweathermap.org/data/2.5/";
  const [weatherData, setWeatherData] = React.useState<WeatherDataProps | null>(
    null
  );
  const [isLoading, setIsLoading] = React.useState(false);
  const [searchCity, setSearchCity] = React.useState("");

  const fetchCurrentWeather = async (lat: number, lon: number) => {
    const url = `${apiEndpoint}weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    const response = await axios.get(url);
    return response.data;
  };

  const fetchWeatherData = async (city: string) => {
    try {
      const url = `${apiEndpoint}weather?q=${city}&appid=${apiKey}&units=metric`;
      const searchResponse = await axios.get(url);
      const currentWeatherData: WeatherDataProps = searchResponse.data;
      return { currentWeatherData };
    } catch (err) {
      console.log(err, "No data found");
      throw err;
    }
  };

  const handleSearch = async () => {
    if (searchCity.trim() === "") {
      return;
    }
    try {
      const { currentWeatherData } = await fetchWeatherData(searchCity);
      setWeatherData(currentWeatherData);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(weatherData);

  const iconChanger = (weather: string) => {
    let iconElement: React.ReactNode;
    let iconColor: string;
    switch (weather) {
      case "Rain":
        iconElement = <BsFillCloudRainFill />;
        iconColor = "#272829";
        break;

      case "Clear":
        iconElement = <BsFillSunFill />;
        iconColor = "#ffc436";
        break;

      case "Cloudy":
        iconElement = <BsCloudyFill />;
        iconColor = "#102c57";
        break;

      case "Mist":
        iconElement = <BsCloudFog2Fill />;
        iconColor = "#279eff";
        break;

      default:
        iconElement = <TiWeatherPartlySunny />;
        iconColor = "#7B2869";
    }

    return (
      <span className="icon" style={{ color: iconColor }}>
        {iconElement}
      </span>
    );
  };

  React.useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        const [currentWeather] = await Promise.all([
          fetchCurrentWeather(latitude, longitude),
        ]);
        setWeatherData(currentWeather);
        setIsLoading(true);
      });
    };
    fetchData();
  }, []);

  return (
    <MainWrapper>
      <div className="container">
        <div className="searchArea">
          <input
            type="text"
            placeholder="Enter City"
            value={searchCity}
            onChange={(e) => setSearchCity(e.target.value)}
          />
          <div className="searchCircle">
            <AiOutlineSearch className="searchIcon" onClick={handleSearch} />
          </div>
        </div>
        {weatherData && isLoading ? (
          <>
            <div className="weatherArea">
              <h1>{weatherData?.name}</h1>
              <span>{weatherData?.sys?.country}</span>
              <div className="icon">
                {iconChanger(weatherData.weather[0].main)}
              </div>
            </div>
            <div className="bottomInfo">
              <div>
                <h1 className="degree">
                  {weatherData?.main?.temp?.toFixed(0)}
                  <sup>&#176;</sup>
                </h1>
                <h2>{weatherData?.weather[0].main}</h2>
              </div>
              <div className="bottomInfoArea">
                <div className="humidityLevel">
                  <WiHumidity className="humidIcon" />
                  <div>
                    <h2 className="humidInfo">
                      {weatherData?.main?.humidity}%
                    </h2>
                    <p className="humidName">Humidity</p>
                  </div>
                </div>
                <div>
                  <TbWind className="windIcon" />
                  <div>
                    <h2 className="humidInfo">{weatherData.wind.speed}km/h</h2>
                    <p className="humidName">wind speed</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="loading">
            <RiLoaderFill className="loadingIcon" />
          </div>
        )}
      </div>
    </MainWrapper>
  );
};

export default DisplayWeather;
