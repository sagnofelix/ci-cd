import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { User } from './src/models/user.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// View engine setup
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const user = new User(1,"jean felix", "sagno")
  user.sayName()
  res.sendFile('./src/index.html', {root: __dirname});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port http://127.0.0.1:${PORT}`);
});
