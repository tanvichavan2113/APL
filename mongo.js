const mongoose = require('mongoose');

// Connection URI
const uri = 'mongodb://localhost:27017/28_mongodb';

// Connect to the MongoDB server
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Create a Mongoose schema
const recordSchema = new mongoose.Schema({
  name: String,
  value: Number,
});

// Create a Mongoose model
const Record = mongoose.model('Record', recordSchema);

// Insert records
const records = [
  { name: 'Record 1', value: 42 },
  { name: 'Record 2', value: 84 },
  // Add more records as needed
];

Record.insertMany(records, (err, result) => {
  if (err) {
    console.error('Error inserting records:', err);
  } else {
    console.log(`${result.length} records inserted`);
  }

  // Close the connection
  mongoose.connection.close();
});
