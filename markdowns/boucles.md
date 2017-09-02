# JavaScript - Les boucles

# Le [support du cours](http://ens-info.irem.univ-mrs.fr/wp-content/uploads/06_javascript_fin.pdf) est disponible sur le site de l'IREM.  

## Boucle et fonction

Créez une fonction __puissance__ qui :
- prend deux arguments
- réalise le calcul du premier argument élevé à la puissance du deuxième sans utiliser les fonctions mahtématiques de JS

💡 Utilisez une boucle par exemple x^n = x * x * x *x * ... n fois

@[Réalisez la fonction puissance]({ "stubs": ["boucles1.js"], "command": "node_modules/mocha/bin/mocha test_boucles1.js --reporter list" })

## Boucle et tableau

On souhaite stocker les positions d"une série de 20 objets mobiles (mobs) dans un jeu vidéo. Pour cela on va créer 2 tableaux :
- __posX__ qui contient la série des abscisses des objets
- __posY__ qui contient la série des ordonnées des objets

Créez une fonction __initXY__ qui :
- prends qui prend en 1er argument l'abscisse du 1er objet
- qui prend en 2ème argument l'ordonnée du 1er objet
- qui calcule les abscisses et ordonnés des objects de la série sachant qu'il doivent être espacés de 40 pixels (+40) les uns des autres en abscisse et de 30 pixels (+30) en ordonnée

@[Réalisez la fonction puissance]({ "stubs": ["boucles2.js"], "command": "node_modules/mocha/bin/mocha test_boucles2.js --reporter list" })

## Modifiez un tableau avec push et pop
