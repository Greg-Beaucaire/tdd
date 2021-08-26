# TDD

- Cloner ce repo
- Rechercher et expliquer avec vos mots les principes du tdd, et l'ajouter a ce Readme.
- Observer fizzbuzz.test.js puis completer fizzbuzz.js pour qu'il passe les tests ("npm run test" pour lancer les tests)
- Creer un fichier calc.js dans /src contenant une fonction calc()
- Creer un fichier calc.test.js dans /test
- Ecrire les test d'une fonction calc qui permet d'additionner/soustraire/multiplier/diviser 2 nombres envoyé a la fonction calc, 
avec gestion de toutes les erreurs possibles, en utilisant la méthode tdd.
- commit entre chaque ecriture de test et chaque ecriture de fonction

## Les principes des Tests Unitaires

- le test unitaire est là pour tester une seule fonctionnalité, une seule fonction. On vient en tester le bon fonctionnement et le statut final de la résolution, ce qui donnera un échec ou un succès.


## Les principes du Test Driven Developpement

- Le test driven developpement est une méthode de développement qui va utiliser des tests unitaires afin de tester la version dev du projet avant de passer en version prod. Si un test échoue, la méthode à suivre sera de corriger l'erreur du test avant de passer en version prod. Aussi, selon cette méthode, il n'est pas permis d'écrire plus de code que celui nécessaire à la correction du / des tests unitaires qui ont échoué. Cela évite de recréer des bugs.