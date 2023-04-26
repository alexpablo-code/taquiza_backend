const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000
//when we deploy it it might have port it will run on in environments
const corsOptions = require('./config/corsOptions')

require('dotenv').config();
const cookieParser = require('cookie-parser')

const cors = require('cors');
app.use(cors(corsOptions));
app.use(cookieParser())

require('./config/mongoose.config');

app.use(express.json(), express.urlencoded({extended: true}));


require('./routes/products.routes')(app);
require('./routes/user.routes')(app);
require('./routes/menu.routes')(app);
require('./routes/category.routes')(app);
require('./routes/item.routes')(app);


app.listen(PORT, () => console.log(`The server is all fired up on port ${PORT}`)); 