﻿var assert = require('assert');
var mod = require('./tableau3.js');

it("Réalisez la fonction puissance", function () {
  try
  {
	assert.equal( 1, mod.puissance( 10,0 ) );
	assert.equal( 1, mod.puissance( 1,1 ) );
	assert.equal( 1024, mod.puissance( 2,10 ) );
	assert.equal( 125, mod.puissance( 5,3 ) );
  }
  catch (error)
  {
    printMessage('Conseil 💡', "Revoyez la fonction puissance 🤔");
    throw error;
  }
});

function printMessage(channel, message)
{
  console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}

