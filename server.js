//boiler plate stuff
const express = require('express');
const path = require('path');
const app = express();
const PORT = 8080;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Tables (DATA)

const tables = [
  {
    
    name: 'mikey',
    email: 'mikeyhauser@gmail.com',
    phone: 999-9999,
    id: 2000,
  },
 
];
const waitlist = []


// Routes

//home page when no suffix on local8080/
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.get('/reserve', (req,res) => {
  // res.sendFile(path.join(__dirname, 'reserve.html'))
  res.end("Welcome to the reservation page of this site")
})

// Displays all tables
app.get('/api/tables', (req, res) => res.json(tables));

app.get('/api/waitlist', (req,res) => {
  res.json(waitlist)
})

// Displays a single table, or returns false
// app.get('/api/tables/:table', (req, res) => {
//   const chosen = req.params.table;

//   console.log(chosen);

  /* Check each table routeName and see if the same as "chosen"
   If the statement is true, send the table back as JSON,
   otherwise tell the user no table was found */

//   for (let i = 0; i < tables.length; i++) {
//     if (chosen === tables[i].routeName) {
//       return res.json(tables[i]);
//     }
//   }

//   return res.json(false);
// });

// Create New Characters - takes in JSON input
app.post('/api/tables', (req, res) => {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  const newTable = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newTable.routeName = newTable.name.replace(/\s+/g, '').toLowerCase();
  console.log(newTable);

  tables.push(newTable);
  res.json(newTable);
});

// Starts the server to begin listening

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
