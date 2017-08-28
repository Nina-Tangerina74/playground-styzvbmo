﻿var assert = require('assert');
var mod = require('./variables1.js');

it("Création des variables : num, txt, bin et flt", function () {
  try
  {
    assert.deepEqual( 255, mod.num );
    assert.deepEqual( "255", mod.txt );
    assert.deepEqual( true, mod.bin );
    assert.deepEqual( 7.23, mod.flt );
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

