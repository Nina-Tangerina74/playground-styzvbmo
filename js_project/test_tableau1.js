﻿var assert = require('assert');
var mod = require('./tableau1.js');

it(Création du tableau, function () {
  try
  {
    assert.equal(1, mod.tableau[1]);
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

