const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`mongodb+srv://Tara:z%40WR3NbYayLf_Pm@cluster0.sfajdij.mongodb.net/expend-tracker`, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
  } catch (err) {
    console.log(`Error: ${err.message}`.red);
    process.exit(1);
  }
}

connectDB();

module.exports = connectDB;