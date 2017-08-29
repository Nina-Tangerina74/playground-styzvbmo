﻿var assert = require('assert');
var mod = require('./tests3.js');

it("aprec doit donner une appréciation :", function () {
  try
  {
	assert.equal( "Hideux", mod.aprec(0) );
	assert.equal( "Hideux", mod.aprec(5);
	assert.equal( "Moche", mod.aprec(7) );
	assert.equal( "Moche", mod.aprec(9) );
	assert.equal( "Nice", mod.aprec(10) );
	assert.equal( "Nice", mod.aprec(14) );
	assert.equal( "GG", mod.aprec(15) );
	assert.equal( "GG", mod.aprec(20) );
	assert.equal( "BUG", mod.aprec("test") );
	assert.equal( "BUG", mod.aprec(-1) );
  }
  catch (error)
  {
    printMessage('Conseil 💡', "Revoyez les tests conditionnels 🤔");
    throw error;
  }
});

function printMessage(channel, message)
{
  console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}

