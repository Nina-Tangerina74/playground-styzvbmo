﻿var assert = require('assert');
var mod = require('./tests1.js');

it("isTooLong doit dire si la chaîne dépasse 10 caractères", function () {
  try
  {
	assert.equal( false, mod.isTooLong("Coucou") );
	assert.equal( false, mod.isTooLong("1234567890") );
	assert.equal( false, mod.isTooLong("") );
	assert.equal( true, mod.isTooLong("12345678901") );
  }
  catch (error)
  {
    printMessage('Conseil 💡', "Revoyez les fonctions 🤔");
    throw error;
  }
});

function printMessage(channel, message)
{
  console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}

