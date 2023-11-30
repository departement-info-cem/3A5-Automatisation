# Travail pratique #3 (A2023)

![Chuck](./assets/tp3/chuck1.png)

Ce TP est à faire individuellement. Il compte pour **15%** de la note du cours. La remise doit obligatoirement se faire par GitHub Classroom.


## Mandat

Votre patron vous demande de développer un script PowerShell permettant de raconter de bonnes vieilles blagues de Chuck Norris. 

Vous devez utiliser l’API **ChuckNorris.io** (https://api.chucknorris.io/) pour générer les blagues. Cette API prend des requêtes GET et retourne du contenu JSON.

Voici les fonctionnalités à implémenter (elles doivent se comporter **exactement** comme dans la capture d’écran) :


### Blague aléatoire

Lorsque le script est exécuté sans aucun paramètre, il affiche une blague au hasard. Le numéro d’identification unique de cette blague doit être écrit entre crochets à la fin de la blague, pour référence.

![Blague aléatoire](./assets/tp3/tp3-random.png)
 
### Blague spécifique

Lorsqu’on passe le numéro d’identification d’une blague dans le paramètre `-Id`, la blague correspondante est affichée.

![Blague spécifique](./assets/tp3/tp3-specific.png)


### Filtrage par catégorie

Si on spécifie le paramètre `-Category` suivi du nom d’une catégorie valide, une blague au hasard est affichée, mais seulement dans cette catégorie. Cela limite les choix possibles.

![Filtrage par catégorie](./assets/tp3/tp3-category.png)


### Liste des catégories

On peut obtenir la liste des catégories valides en spécifiant le switch `-ListCategories`.

![Liste des catégories](./assets/tp3/tp3-list.png)

 
### Recherche de blague

On peut rechercher un mot-clé spécifique dans la base de données de blagues. En passant ce mot-clé par le paramètre `-Search`, on obtient la liste des blagues contenant ce mot-clé. On doit aussi voir le nombre de résultats.

![Recherche de blague](./assets/tp3/tp3-search.png)


### Gestion des erreurs

Si on spécifie un identifiant ou une catégorie erronée, on doit recevoir une erreur claire dans le *error stream*.

![Gestion des erreurs](./assets/tp3/tp3-errors.png)

 
### Rubrique d’aide

On doit pouvoir afficher une rubrique d’aide complète avec la commande `Get-Help`.

![Rubrique d’aide](./assets/tp3/tp3-help.png)

:::tip
Pour la rubrique d'aide, il faut utiliser un bloc de type *comment-based help*. Vous en saurez plus en consultant [la documentation](https://learn.microsoft.com/fr-ca/powershell/module/microsoft.powershell.core/about/about_comment_based_help?view=powershell-5.1).

L'extension PowerShell de Visual Studio Code permet la création d'un squelette de rubrique d'aide. Vous n'avez qu'à écrire "comment..." au début de votre script et sélectionner le *snippet* `comment-help`.

![Comment-based help](./assets/tp3/tp3-commentbasedhelp.png)
:::

 
### Compteur de blagues

Finalement, chaque fois qu’une blague est affichée à l’écran, le script doit garder en mémoire le nombre de fois que cette blague précise a été affichée. Il doit le faire sur un fichier **Chuck.json** situé dans le répertoire de travail.

Lorsque le fichier n’existe pas, il doit être créé. Il est constitué d’un objet JSON dont l’unique clé, `occurrences`, est un tableau d’objets constitués à leur tour d’un identifiant (`id`) et du compte d’occurrences (`count`). Chaque fois qu’une blague sort, si cette blague figure dans le fichier, le compteur doit être incrémenté. Sinon, une nouvelle entrée doit être créée pour cette blague, avec le compte de 1.

Le fichier JSON doit être structuré comme ceci :

```json
{
    "occurrences": [
        {
            "id" : "0NR490f3SiGlqn469rr7bw",
            "count" : 2
        },
        {
            "id" : "rmjCPZL2SM-3LXx07phRaA",
            "count" : 1
        },
        {
            "id" : "Xnt8KedKQ4uUFhVdsZBcvA",
            "count" : 1
        },
        {
            "id" : "md-bld8orjsv5mgfsun-xq",
            "count" : 1
        }
    ]
}
```

## Critères d'évaluation

*Grille d'évaluation à venir*



---

**BON TRAVAIL!**

![Chuck](./assets/tp3/chuck2.png)