var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var recipeSchema = new Schema({
  name: String,
});

var Recipe = mongoose.model('Recipe', recipeSchema);
