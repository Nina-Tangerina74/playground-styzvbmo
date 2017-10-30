﻿var assert = require('assert');
var mod = require('./variables1.js');

it("Création des variables : num, txt, bin et flt", function () {
  try
  {
    assert.equal( 255, mod.num );
    assert.equal( typeof(mod.num), "number" );
    assert.equal( "255", mod.txt );
    assert.equal( typeof(mod.txt), "string" );
    assert.equal( true, mod.bin );
    assert.equal( typeof(mod.bin), "boolean" );
    assert.equal( 7.23, mod.flt );
    assert.equal( typeof(mod.flt), "number" );
  }
  catch (error)
  {
    printMessage('Conseil 💡', "Revoyez la déclaration des variables 🤔");
    throw error;
  }
});

function printMessage(channel, message)
{
  console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}

