/* dependencies & app setup */
const express = require('express');
const path = require('path');
const logger = require('morgan');
const app = express();
const pizza = require('./pizza')
// console.log(pizzas);


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
app.use(express.static('public'));



app.get("/pizza/:flavor", function(req,res){
	let flavor = req.params.flavor;
	for(let i = 0; i < pizza.length; i++){
		if(pizza[i].flavorKey == flavor){
			console.log(pizza[i]);
			juicy = pizza[i];
			res.render('index2', {juicy});
		}
	}
	// res.send(pizza);
	// res.render('index', {pizza:pizza})
})



app.get("/pizza", function(req,res){
	console.log(pizza);
	// res.send(pizza);
	res.render('index', {pizza:pizza})
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

//what is index?

//