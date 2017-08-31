﻿var assert = require('assert');
var mod = require('./tableau3.js');

it("Ajout en fin de tableau", function () {
  try
  {
    assert.deepEqual( [1,2,3,13,14], mod.tablo );
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

