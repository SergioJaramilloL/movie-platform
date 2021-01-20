const express = require('express');
const app = express();

//Setting
app.set('port', process.env.PORT || 8000);

//Middleware
app.use(express.json());

//Routes
app.use(require('./routes/movie'));

//Starting server
app.listen(app.get('port'), () =>{
  console.log('Server on port', app.get('port'));
});