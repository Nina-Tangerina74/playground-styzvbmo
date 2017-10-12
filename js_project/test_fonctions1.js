var assert = require('assert');
var mod = require('./fonctions1.js');

it("isoNum doit retourner 42", function () {
  try
  {
    assert.equal( 42, mod.isoNum() );
  }
  catch (error)
  {
    printMessage('Conseil 💡', "Revoyez les fonctions 🤔");
    throw error;
  }
});

function printMessage(channel, message)
{
  console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}

