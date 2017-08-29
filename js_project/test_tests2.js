﻿var assert = require('assert');
var mod = require('./fonctions2.js');

it("myFct doit retourner arg1.arg2 + arg1 + arg2", function () {
  try
  {
	assert.equal( 0, mod.myFct(0,0) );
	assert.equal( 11, mod.myFct(2,3) );
	assert.equal( 1, mod.myFct(-2,-3) );
	assert.equal( Number.MIN_VALUE, mod.myFct("Salut",-3) );
	assert.equal( Number.MIN_VALUE, mod.myFct(2,"toto") );
	assert.equal( Number.MIN_VALUE, mod.myFct("salut","toto") );
	assert.equal( Number.MIN_VALUE, mod.myFct(1,false) );
	assert.equal( Number.MIN_VALUE, mod.myFct(false,5) );
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

