import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import process from 'node:process';

import practitionersRoutes from './routes/practitioners.js'
import modalitiesRoutes from './routes/modalities.js'

//naginstall tayo ng mongoose at dotenv..........(1)

dotenv.config(); //...........yung dotenv nireread nya yung dotenv file at gagawin nyang part ng environment variables........(2)

const app = express();
const PORT = process.env.PORT || 3003;


mongoose.connect(process.env.DB_URI); //itong line na to tinatry natin iiengtrgrate yung mongodb sa express app.......(3)



mongoose.connection.on('connected', () => {
  console.log('connected to mongodb');
}); //itong block of code na to indicator na nakaconnect na tayo sa mongodb/nakaestablish ng connection w/m ongodb............(4)


app.use(express.json()); //...impt! gosh
app.use(cors());
app.use(helmet());


app.set('port', PORT);

// Add your middleware
// app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello Worlxd!',
  });
});




app.use('/practitioners', practitionersRoutes); //.....use this route
app.use('/modalities', modalitiesRoutes); //.....use this route


//--------------------------------------------
app.listen(PORT, () => {
  console.log(`App is listening to port ${PORT}`);
});



