import express from 'express';
import cors from 'cors';
import filesRouter from './filesRouter'

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use('/api', filesRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});