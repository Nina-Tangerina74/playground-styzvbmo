﻿var assert = require('assert');
var mod = require('./variables2.js');

it("Création des variables : num, txt, bin et flt", function () {
  try
  {
    assert.equal( 256, mod.num );
    assert.equal( "255 est ici une chaîne de caractères", mod.txt );
    assert.equal( false, mod.bin );
    assert.equal( 256+7.23, mod.flt );
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

