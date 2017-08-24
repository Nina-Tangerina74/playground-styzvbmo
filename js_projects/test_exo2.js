var assert = require('assert');
var universe = require('./exo2.js');

it("Doit creer un tableau", function () {
  try
  {
    assert.equal(1, exo2.tableau[1]);
  }
  catch (error)
  {
    printMessage('Conseil 💡', "Renvoyez la déclaration des tableaux ! 🤔");
    throw error;
  }
});

function printMessage(channel, message)
{
	console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}

