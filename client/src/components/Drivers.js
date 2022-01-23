import React,{useState, useEffect} from "react";
import axios from 'axios';
import '../App.css';



const Drivers = () => {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    getDrivers();
    }, []);

  const getDrivers = async () => {
      const response = await axios.get('https://deploy-102.herokuapp.com/drivers');
      setDrivers(response.data);
  }


  const [search, setNewSearch] = useState("");

  const handleSearchChange = (e) => {
    setNewSearch(e.target.value);
  };

  const filtered = !search ? drivers
    : drivers.filter((driver) =>
    driver.first_name.toLowerCase().includes(search.toLowerCase())
  );


  return (
    <>
      <div className="App">
        <div style={{ margin: '0 auto', marginTop: '1%' ,marginBottom: '1%' ,marginLeft:'40%' , marginRight:'40%'}}>
          <input className="form-control me-2" onChange={handleSearchChange} value={search} type="text" 
              placeholder="Search Drivers"></input>
        </div>
      </div>

      <div >
        <table  class="table table-dark table-borderless">
            <thead>
              <tr style={{marginLeft : '200px'}} >
              
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Uuid</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(driver => (
              <tr key={driver.uuid} >
                
                <td>{driver.first_name}</td>
                <td>{driver.last_name}</td>
                <td>{driver.uuid}</td>
              </tr>
              ))}
            </tbody>
        </table>
      </div>
</>
        

);
};


export default Drivers;


