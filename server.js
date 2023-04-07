const express = require('express');
const app = express();

require('dotenv').config();
const cookieParser = require('cookie-parser')

const cors = require('cors');
app.use(cors({credentials:true, origin:'http://localhost:3000'}));
app.use(cookieParser())

require('./config/mongoose.config');

app.use(express.json(), express.urlencoded({extended: true}));


require('./routes/products.routes')(app);
require('./routes/user.routes')(app);


app.listen(8000, () => console.log("The server is all fired up on port 8000"));