import express from 'express';
import dotenv from 'dotenv';
import db from './database/configdb.js';
import userRoute from './routes/user.route.js';
import exampleRoute from './routes/example.route.js';
import itemRoute from './routes/item.route.js';
import User from './models/User.js';
import swaggerRoute from './routes/swagger.route.js';
import cors from 'cors';

dotenv.config();
db.connect();

await User.syncIndexes();

const app = express();

app.use(cors()); 
app.use(express.json());

app.use(swaggerRoute)
app.use("/users", userRoute);
app.use("/secureExampleRoute", exampleRoute);
app.use("/items", itemRoute);
app.get('/', (req,res)=> {
    res.send({message: 'Hello World!'});
}); 

const PORT = process.env.PORT || 3000;
app.listen(PORT,() =>{

    console.log(`server is running on port http://localhost:${PORT}`)
}

)