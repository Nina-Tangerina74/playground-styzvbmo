# JavaScript - Les variables

# Le [support du cours](http://ens-info.irem.univ-mrs.fr/wp-content/uploads/05_javascript_debut.pdf) est disponible sur le site de l'IREM.  

## Déclaration des variables

Dans l'exercice ci-dessous vous devez créer les variables suivantes : 
- __num__ qui contient le nombre 255  
- __txt__ qui contient la chaîne de caractère *255*  
- __bin__ qui contient la valeur booléenne *vraie*  
- __flt__ qui contient la valeur 7,23  

@[Créez les variables demandées ci-dessus]({ "stubs": ["variables1.js"], "command": "node_modules/mocha/bin/mocha test_variables1.js --reporter list" })

## Opération sur les variables

Reprenez la déclaration des variables précédentes et :
- Appliquez à __num__ l'opérateur __d'incrémentation__  
- Concaténez à la chaîne __txt__ la chaîne " est ici une chaîne de caractères"  
- Inversez la valeur logique de __bin__  
- Ajoutez __flt__ la valeur contenue dans __num__  

@[Créez les variables et appliquez les opérations demandées]({ "stubs": ["variables2.js"], "command": "node_modules/mocha/bin/mocha test_variables2.js --reporter list" })

## Types des variables

Dans l'exercice ci-dessous vous devez créer les variables suivantes : 
- __num__ qui contient le nombre 23  
- __txt__ qui contient la chaîne de caractère *33*  
- Affichez le résultat de __txt__ + __num__ avec la commande _console.log( txt + num );_
- Affichez le résultat de __num__ + __txt__

@[Créez les variables et réalisez les opérations demandées]({ "stubs": ["variables3.js"], "command": "node_modules/mocha/bin/mocha variables3.js --reporter list" })

?[Ce programme met en évidence :]
-[ ] Que le la variable txt a été traitée comme un nombre
-[X] Que le la variable num a été traitée comme une chaîne de caractère
-[X] Que le langage JavaScript réalise des conversions automatiques
-[X] Qu'il est dangeureux de faire des opérations avec des variables de types différents
-[X] Qu'il faut explicitement écrire les conversions dans le programme pour ne pas avoir de mauvaises surprises
-[X] Que le langage JavaScript est faiblement typé
-[ ] Que le langage JavaScript est fortement typé

Dans cet exercice vous devez créer les variables suivantes : 
- __num__ qui contient le nombre 23  
- __txt__ qui contient la chaine de caractère *33*
- __tmp__ qui contient le nombre 0  
- Convertir la chaîne contenue dans __txt__ en nombre avec *parseInt()* et mettre le résultat dans __tmp__  
- Ajouter à __num__ le contenu de __tmp__  

@[Créez les variables et réalisez les opérations demandées]({ "stubs": ["variables4.js"], "command": "node_modules/mocha/bin/mocha test_variables4.js --reporter list" })

Reprenez l'exercice précédent mais sans la variable __tmp__. Vous devez donc :
- Créer les variables : __num__ qui contient le nombre 23 et __txt__ qui contient la chaine de caractère *33*  
- Convertir la chaîne contenue dans __txt__ en nombre avec *parseInt()* et ajouter le résultat à __num__.  

@[Créez les variables et réalisez les opérations demandées]({ "stubs": ["variables5.js"], "command": "node_modules/mocha/bin/mocha test_variables5.js --reporter list" })
