import React, { useState, useEffect } from "react";
import Header from "./Header";
import Axios from "axios";
import Recepie from "./Recepie";

export default function Main() {
  const [search, setSearch] = useState("chicken");
  const [recepies, setRecepies] = useState([]);
  const APP_ID = "624c653d";
  const APP_KEY = "77e752eba1cf274991780331e5ec0466";

  useEffect(async () => {
    getRecepies();
  }, []);

  const getRecepies = async () => {
    const res = await Axios.get(
      `https://api.edamam.com/search?q=search&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    // console.log(res);
    setRecepies(res.data.hits);
  };

  const onInputChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <Header search={search} onInputChange={onInputChange} />
      <Recepie  recepies={recepies} />
    </div>
  );
}
