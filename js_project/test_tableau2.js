﻿var assert = require('assert');
var mod = require('./tableau2.js');

it("Modification du tableau tablo", function () {
  try
  {
    assert.deepEqual( [1,5,3], mod.tablo );
	assert.equal( 2, mod.item );
  }
  catch (error)
  {
    printMessage('Conseil 💡', "Revoyez les opérations sur les tableaux 🤔");
    throw error;
  }
});

function printMessage(channel, message)
{
  console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}

