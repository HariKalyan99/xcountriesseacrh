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
    const fetchCountryFlags = async (search) => {
      try {
        if (search) {
          const { data } = await axios.get(
            `https://restcountries.com/v3.1/name/${search}`
          );
          if(search === 'Ind' || search === 'ind'){
            setCountryFlags(data.filter((ele) => ele.name.common.includes('Ind')));
          }else {
            setCountryFlags(data);
          }
          
          
        } else {
          const { data } = await axios.get(
            "https://restcountries.com/v3.1/all",
            signal
          );
          setCountryFlags(data);
        }
      } catch (error) {
        setCountryFlags([]);
        console.log("Error", error);
        
      }
    };

    fetchCountryFlags();

    const timer = setTimeout(() => {
      fetchCountryFlags(searchCountryFlag);
    }, 500);

    return () => {
      clearTimeout(timer);
      controller.abort();
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
