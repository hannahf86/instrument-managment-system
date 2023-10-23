import express from 'express';
import cors from 'cors';
import { adminRouter } from './Routes/adminRoute.js';

const app = express();

// pass to the front end
app.use(cors());
app.use(express.json());
app.use('/auth', adminRouter);

app.listen(5173, () => {
    console.log("Server is listening on port 5173! You did it!")
});

