var assert = require('assert');
var mod = require('./boucles2.js');

var pX = [100];
var pY = [100];

for ( var i = 1 ; i < 19 ; i++)
{
	pX[i] = pX[i-1] + 40;
	pY[i] = pY[i-1] + 30;
}

describe("Initialisation des tableaux posX et posY", function(){
	before(function(){
		try
		{
		  	assert.deepEqual( [], mod.posX );
			assert.deepEqual( [], mod.posY );
		}
		catch (error)
		{
			printMessage('Conseil 💡', "Les tableaux doivent être vides avant l'appel de la fonction ! Coquin ! 🤔");
			throw error;
		}
	});
	
	it("Remplissage des tableaux posX et posY", function () {
		try
		{
			mod.initXY( 100,100 );
			assert.deepEqual( pX, mod.posX );
			assert.deepEqual( pY, mod.posY );
		}
		catch (error)
		{
			printMessage('Conseil 💡', "Attention aux valeurs limites des tableaux 🤔");
			throw error;
		}
	});
});

function printMessage(channel, message)
{
  console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}

