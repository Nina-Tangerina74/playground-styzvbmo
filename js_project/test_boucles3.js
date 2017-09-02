﻿var assert = require('assert');
var mod = require('./boucles3.js');

describe("Tri des tableaux", function(){
	before(function(){
		try
		{
		  	assert.deepEqual( [], mod.tabloInf );
			assert.deepEqual( [], mod.tabloSup );
		}
		catch (error)
		{
			printMessage('Conseil 💡', "Les tableaux de résultats doivent être vides avant l'appel de la fonction ! Coquin ! 🤔");
			throw error;
		}
	});
	
	it("Tri des tableaux", function () {
		try
		{
			mod.tabloInit = [10,25,30,2,4,7,48,26,5,15,20,3];
			mod.sortNumbers();
			assert.deepEqual( [2,4,7,5,3].sort(), mod.tabloInf.sort() );
			assert.deepEqual( [10,25,30,48,26,15,20].sort(), mod.tabloSup.sort() );
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

