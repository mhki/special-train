import express from "express";
import pg from 'pg';
import cors from "cors";
 
const app = express();
 
const PORT = process.env.PORT || 5000;


if (process.env.NODE_ENV == 'production' ){
  app.use(express.static('client/build'))
}

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL ||
   'postgres://pjzcuxmzksxswx:9fcf12b7c4b91e5457b0492a7d34f8369cef8eed4321b681b844bc402f7b1d47@ec2-54-220-243-77.eu-west-1.compute.amazonaws.com:5432/d2tdj6kfqsojqv',
  ssl: {
    rejectUnauthorized: false
  }
});


try {
  const client = await pool.connect();
  console.log("Database Connected");
} catch (err) {
  console.error(err);
}

app.use(cors());
app.use(express.json());


app.get('/drivers', (req, res) => {
  getDrivers()
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.get('/trips', (req, res) => {
  getTrips()
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.get('/', (req, res) => {
  getHotels()
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

export const getDrivers = () => {
  return new Promise(function(resolve, reject) {
    pool.query('SELECT * FROM drivers', (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results.rows);
    })
  }) 
}

export const getHotels = () => {
  return new Promise(function(resolve, reject) {
    pool.query('SELECT * FROM hotels', (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results.rows);
    })
  }) 
}

export const getTrips = () => {
  return new Promise(function(resolve, reject) {
    pool.query('SELECT * FROM trips', (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results.rows);
    })
  }) 
}
