import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Searchflag from "./components/Searchflag";
import Countryflags from "./components/Countryflags";

function App() {
  const [countryFlags, setCountryFlags] = useState([]);
  const [searchCountryFlag, setSearchCountryFlag] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    const fetchCountryFlags = async (seacrh) => {
      try {
        if (seacrh) {
          const { data } = await axios.get(
            `https://restcountries.com/v3.1/name/${seacrh}`
          );
          setCountryFlags(data);
          
          
        } else {
          const { data } = await axios.get(
            "https://restcountries.com/v3.1/all",
            signal
          );
          setCountryFlags(data);
          
        }
      } catch (error) {
        console.log("Error", error);
        setCountryFlags([]);
      }
    };

    fetchCountryFlags();

    const timer = setTimeout(() => {
      fetchCountryFlags(searchCountryFlag);
    }, 500);

    return () => {
      controller.abort();
      clearTimeout(timer);
    };
  }, [searchCountryFlag]);

  const onSearchTerm = (searchTerm) => {
    setSearchCountryFlag(searchTerm);
  };
  return (
    <div>
      <Searchflag onSearchTerm={onSearchTerm}/>
     <Countryflags countryFlags={countryFlags} />
    </div>
  );
}

export default App;
