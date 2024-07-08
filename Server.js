import express from 'express';
import db_connect from './Databse/index.js';
import router from './Router/router.js';
import cors from 'cors';

const app = express();
db_connect(app);
app.use(cors()); // Enable CORS

app.use(express.json());
app.use(router);
const PORT=3000;
app.listen(PORT,()=> {
    console.log(`Server is running on port http://localhost:${PORT}`)
})