import React, {useEffect, useState} from "react"
import axios from "axios";
import './App.css';
import Header from "./Components/Header";
import SitesList from "./Components/SitesList";
import TableHead from "./Components/TableHead";

function App() {
  const [info, setState] = useState('');
  const [search, setSearch] = useState('');

  const url = 'http://localhost:3100/'


  const getData = () => {
    axios.get(`${url}tests`)
    .then((response) => {
      const allData = response.data;

      setState(allData);
      console.log(info)
    })
    .catch(error => console.error(`Error: ${error}`));
  }

  useEffect(() => {

    getData();

  }, []);

  const onSearchChange = (event) => {
    setSearch({search: event.target.value})
    console.log(search)
  }
  // console.log(info)
  // const filteredTable = info.filter(data => {
  //   return data.name.toLowerCase().includes(search.toLowerCase());
  // })
  return (
    <div className="App">
      <Header searchChange={onSearchChange}/>
      <TableHead />
      <SitesList info={info}/>
    </div>
  );
}

export default App;
