﻿var assert = require('assert');
var mod = require('./tableau1.js');

it("Création du tableau contenant 1,2 et 3", function () {
  try
  {
    assert.deepEqual( [1,2,3], mod.tableau );
  }
  catch (error)
  {
    printMessage('Conseil 💡', "Revoyez la création des tableaux 🤔");
    throw error;
  }
});

function printMessage(channel, message)
{
  console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}

