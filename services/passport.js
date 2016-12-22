const passport = require('passport');
const User = require('../models/user');
const LocalStrategy = require('passport-local');

// Create local strategy
const localOptions = { usernameField: 'email' };
const localLogin = new LocalStrategy(localOptions, function(email, password, done) {
	User.findOne({ email: email }, function(err, user) {
		// if there's an error searching the database
		if(err) { return done(err); }

		// if the user isn't found
		if(!user) { return done(null, false); }

		// check password
		// TO DO: create function in user model to compare password
	})
});