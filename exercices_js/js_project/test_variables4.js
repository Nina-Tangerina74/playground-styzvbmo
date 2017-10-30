﻿var assert = require('assert');
var mod = require('./variables4.js');

it("Opération sur les variables : num, txt, et tmp", function () {
  try
  {
    assert.equal( 56, mod.num );
    assert.equal( "33", mod.txt );
    assert.equal( 33, mod.tmp );
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

