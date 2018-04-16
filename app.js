/* dependencies & app setup */
const express = require('express');
const path = require('path');
const logger = require('morgan');
const app = express();
const pizzas = require('./pizza')
console.log(pizzas);


/* setting up port & listen */
const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log(`listening on port ${PORT}`);
});

/* set the view engine */
app.set('views', './views');
app.set('view engine', 'ejs');

/* error logger, static routes */
app.use(logger('dev'));
app.use('/static', express.static(path.join(__dirname, 'public')));


app.get("/", function(req,res){
	res.send('hi')
})


app.get("/pizzas/:id", function(req,res){
	let id = req.params.id;
	let pizza = pizzas[id-1];
	response.send(pizza);
})

/* error handler */
app.get('*', function(req, res) {
  res.status(404).send({message: 'Oops! Not found.'});
});


//QUESTIONS

//what is my line 30 doing?  I did that on our homework thursday night 
//and do not remember how I did it.

//how do I get to req.params.id?
//and can you clarify what "app.get("/pizzas/:id", function(req,res){" is doing 

//