# JavaScript - Les tests conditionnels

# Le [support du cours](http://ens-info.irem.univ-mrs.fr/wp-content/uploads/05_javascript_debut.pdf) est disponible sur le site de l'IREM.  

## Test sur la longueur d'une chaîne de caractères

Ecrivez une fonction nommée __isTooLong__ qui :
- prend une chaîne de caractères comme argument
- renvoie *vrai* si la longueur de la chaîne dépasse 10 caractères
- renvoie *faux* dans les autres cas

💡 Utilisez __str.length__ pour connaitre la taille chaîne de caractères __str__

@[Créez la fonction isTooLong demandée]({ "stubs": ["tests1.js"], "command": "node_modules/mocha/bin/mocha test_tests1.js --reporter list" })

## Test sur le type des paramètres

Reprenez la fonction myFct du chapitre précédent et complétez là pour qu'elle renvoie *-999999999* si un argument n'est pas un nombre

💡 Utilisez __typeof( varia )__ pour connaitre le type de la variable __varia__. Si varia est un nombre typeof retourne la chaîne de caractère "number".  
💡 Vous pouvez tester si deux conditions sont vraies simultanément avec un __AND__ logique (condition1 __ET__ condition2) comme ceci : ( test1 __&&__ test2 ).  
💡 Vous pouvez tester si l'une __OU__ l'autre des conditions sont vraies avec un __OR__ logique (condition1 __OU__ condition2) comme ceci : ( test1 __||__ test2 ).

@[Créez la fonction myFct demandée]({ "stubs": ["tests2.js"], "command": "node_modules/mocha/bin/mocha test_tests2.js --reporter list" })

## Tests imbriqués

Créez une fonction nommée __aprec__ qui :
- prend une note sur 20 en argument
- renvoie _Hideux_ si la note est entre 0 et 7 exclus
- renvoie _Moche_ si la note entre 7 et 10 exclus
- renvoie _Nice_ si la note entre 10 et 15 exclus
- renvoie _GG_ si la note entre 15 et 20 inclus
- renvoie _BUG_ si la note n'est pas correcte

@[Créez la fonction aprec demandée]({ "stubs": ["tests3.js"], "command": "node_modules/mocha/bin/mocha test_tests3.js --reporter list" })

