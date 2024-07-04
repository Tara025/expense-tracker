import path from "path";
import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import morgan from "morgan";
import connectDB from "./config/db.js";
import transactionRouter from "./routes/transactions.js"
import userRouter from "./routes/userRoutes.js";
import UserModel from "./models/UserModel.js";


dotenv.config({ path: './config/config.env' });

connectDB();

const app = express();

app.use(express.json());
// app.use(expressMongoLogin (UserModel))

if(process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use("/api/v1/", transactionRouter); //yarn.lock (?)
app.use(userRouter); 

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  // app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}

const PORT = 10000

//process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));

