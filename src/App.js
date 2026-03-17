import "./styles.css";
import WeatherSearch from "./WeatherSearch";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <WeatherSearch />
      <footer className="footer">
        Coded by Becky Pearce, open-sourced on <a href="https://github.com/BexCdz/my-app">GitHub</a>
      </footer>
    </div>
    
  );
}