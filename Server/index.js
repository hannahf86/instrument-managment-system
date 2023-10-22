import express from 'express';

const app = express();

app.listen(5173, () => {
    console.log("Server is listening on port 5173! You did it!")
});