# JavaScript - Les tests conditionnels

# Le [support du cours](http://ens-info.irem.univ-mrs.fr/wp-content/uploads/05_javascript_debut.pdf) est disponible sur le site de l'IREM.  

## Test sur la longueur d'une chaîne de cacaractères

Ecrivez une fonction nommée __isTooLong__ qui :
- prend une chaîne de caractères comme argument
- renvoie *vrai* si la longueur de la chaîne dépasse 10 caractères
- renvoie *faux* dans les autres cas

Conseil 💡 : utilisez __str.length__ pour connaitre la taille chaîne de caractères __str__

@[Créez la fonction isTooLong demandée]({ "stubs": ["tests1.js"], "command": "node_modules/mocha/bin/mocha test_tests1.js --reporter list" })

## Test sur le type des paramètres

Reprenez le fonction myFct du chapitre précédent et complétez là pour qu'elle renvoie *Number.MIN_VALUE* si un argument n'est pas un nombre

Conseil 💡 : utilisez __typeof( varia )__ pour connaitre le type de la variable __varia__. Si varia est un nombre typeof retourne la chaîne de caractère "number".  
Conseil 💡💡 : vous pouvez tester si deux conditions sont vraies avec un __AND__ logique (condition1 __ET__ condition2) comme ceci : ( test1 __&&__ test2 ).

@[Créez la fonction myFct demandée]({ "stubs": ["tests2.js"], "command": "node_modules/mocha/bin/mocha test_tests2.js --reporter list" })


