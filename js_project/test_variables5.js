﻿var assert = require('assert');
var mod = require('./variables5.js');

it("Opération sur les variables : num, et txt", function () {
  try
  {
    assert.equal( 56, mod.num );
    assert.equal( "33", mod.txt );
  }
  catch (error)
  {
    printMessage('Conseil 💡', "Revoyez les opérateurs 🤔");
    throw error;
  }
});

function printMessage(channel, message)
{
  console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}

