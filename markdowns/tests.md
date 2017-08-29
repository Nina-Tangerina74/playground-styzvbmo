# JavaScript - Les variables

# Le [support du cours](http://ens-info.irem.univ-mrs.fr/wp-content/uploads/05_javascript_debut.pdf) est disponible sur le site de l'IREM.  

## Déclaration des variables

Dans l'exercice ci-dessous vous devez créer les variables suivantes : 
- __num__ qui contient le nombre 255  
- __txt__ qui contient la chaîne de caractère *255*  
- __bin__ qui contient la valeur booléenne *vraie*  
- __flt__ qui contient la valeur 7,23  

@[Créez les variables demandées ci-dessus]({ "stubs": ["variables1.js"], "command": "node_modules/mocha/bin/mocha test_variables1.js --reporter list" })

?[Ce programme met en évidence :]
-[ ] Que le la variable txt a été traitée comme un nombre
-[X] Que le la variable num a été traitée comme une chaîne de caractère
-[X] Que le langage JavaScript réalise des conversions automatiques
-[X] Qu'il est dangeureux de faire des opérations avec des variables de types différents
-[X] Qu'il faut explicitement écrire les conversions dans le programme pour ne pas avoir de mauvaises surprises
-[X] Que le langage JavaScript est faiblement typé
-[ ] Que le langage JavaScript est fortement typé

