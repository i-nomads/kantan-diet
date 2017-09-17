'use strict';

/**
 * Module dependencies.
 */

const mongoose = require('mongoose');
const { wrap: async } = require('co');
const { respond, respondOrRedirect } = require('../utils');
const Recipe = mongoose.model('Recipe');

/**
 * List
 */

exports.index = async(function* (req, res) {
  const recipes = yield Recipe.find({});

  respond(res, 'recipes/index', {
    title: 'Recipes',
    recipes: recipes
  });
});
