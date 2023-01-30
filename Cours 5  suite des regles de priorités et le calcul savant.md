# Cours 5 : suite des regles de priorités et le calcul savant

**********nb :********** les notes entre [crochet] sont des notes que pour moi (blanchar)

## 1. Devoir pour le 17 novembre

- Faire un repo github du CV et l’envoyer au prof.
    - screencast du site.
    - la reference du site.
    - est un layout sans code pour voir comment on intègre le contenu.
    - mettre aussi dans le repo le contenu du texte dans les CV.
- Trouver son article a presenter.
- Finir l’intégration du contenu pendant les vacances.
    - Bonus : commencer l’intégration HTML si possible [finir l’intégration].
- Faire tous les exercices dont celle de la galerie photo
- [faire tous les jeux sur flexbox]

Les choses ecrites  en rouge signifie qu’il faut les faire au plus vite.

Il y aura grève le 9 novembre donc on va devoir se voir le 17 novembre la prochaine fois

## Table des Matières

1. Devoir pour le prochain cours
2. Introduction
    1. Les présentations
    2. Les CV
3. Récap 
4. Cours 
    1. suite des regles de priorités
    2. flex grow : Le calcul savant
5. Autres infos

## 1. Introduction

### a. Les présentations

#### Problématique lié au presentation et Re-organisation du cours

Des personnes, sensé venir au cours, sont pas présentes ce qui reduit la taille des groupes. Mais le problème qui se pose ce qu’on va devoir faire des presentations d’article et pour que les 2 groupes profitent des informations, il faut faire un choix.

Soit on fait en sorte que le 2e groupe reste la 1h lors de la 2e heures de cours pour pouvoir representer sont sujet soit on regroupe les 2 groupes.

On a fait un vote.

on doit aussi faire un vote pour savoir si on garde le matin ou l’aprem midi.

#### Sujet

On parle de sujet qui vont être presentés. 

Il faut que le sujet 

- soit orienté avec ce qui se passe au cours.
- on peut parler de plus de choses de ce qu’il y’a dans l’article histoire d’être plus complet

********************conseil******************** : voir le sujet les livres de la collection a [book apart](https://abookapart.com/products/), ça pourrait être des pistes intérrésantes pour trouver un sujet.

#### Temps de parole

Il y’en a pas forcement.

Faut juste prendre le temps de bien aborder tous le sujet de l’article.

(Sinon 15-20 min pour qui ont vraiment besoin d’une fourchette).

#### Ordre de passage (groupe 1)

On a donné les ordres de passage

mercredi 9 novembre

[je suis premier]

### Analyse des CV

on regarde les repos github.

## Récap du dernier Cours

On reparler des reglès de priorité

## Cours

Correction de la liste numéroté.

```css
ol{
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
}

li{
  width: 48%;
}

ol {
  counter-reset: liste;                    /* On initialise le compteur à 0 */
  /* on donne un nom au compteur */
}

li::before {
  counter-increment: liste;                /* On incrémente le compteur li (avec son nom) */
  content: counter(liste) '. '; /* On affiche le compteur */
  margin-right: 2rem;
  color: orange;
  line-height: 1;
  font-size: 6rem;
}
```

Gap est une nouvelle propriété de flexbox voir sur mdn dans la partie **[Disposition flexible](https://developer.mozilla.org/fr/docs/Web/CSS/gap#disposition_flexible).** Elle permet de rajouter des gouttieres pour la **row** et pour la ******column****** 

### Serie d’exercices oraux

> On a fait des exercices oraux pour savoir comment un flex item va se comporter dans une boite de 1000 px. j’en ai noté quelques un.


---

Exercice 1

Flex 1 

width 250

Comment va réagir le parent de 1000 ?

il va tous prendre car est a flex 1 

---

Exercice 2

flex basis 500 ?

width 250

Comment va réagir le parent de 1000 ?

flex basis domine donc 500 px

---

Taille 6

basis = 0

shrinnk = 0

width = 250 

si le basis est à 0 il a pas de taille

---

Taille 7

width = 500 px

basis = 1250 px

min-width = 750

shrink = 0

grow = 1

1250 px car le min width s’applique qd meme

### Flex-grow et shrink : Le calcul savant

> On va faire une serie d’exercie pour calculer la taille que les items devrait avoir en fonction des propriétés qu’on leur donne. Il y aura quelque exemple mais pas tout.
> 

Le 1er cas de figure c’est flex : auto (ou le basis est auto)

Le 2e cas : flex : nombre (ou le basis est à 0)

3 item

[(tomate) (salade) (oignon)                ]

si on met un flex grow de 1 a salade

[(tomate) (       salade        ) (oignon) ]

|  |  |  |
| --- | --- | --- |

avec flex shrink on va dans l’autre sens : 

si flex basis est à 500 px pour chaque item

[(       tomate       ) (       salade        ) (   ]   oignon        ) 

oignon va sortir du conteneur

avec un flex shrink sur salade

[(       tomate       ) ( salade ) (   oignon        ) ]

oignon va retrecir 

3 etaps pour deviner

1 calculer l’espace restante 

la somme de taille des items - la taille du conteneur (on fait la sommes des flex basis si il y’en a)

Si 

- l’espace est positf ⇒ flex-grow peut s’appliquer pour grandir
- l’espace est négatif ⇒ flex-shrink peut s’appliquer pour retrivir

Étape 3 

Faut voir le nombre de flex grow qu’on a

Étape 4 

on ajoute le flex basic.

Un parent qui fait la de 1000px et 2 items avec flex 1

Si ils ont pas de flex basic ils vont se repatir la place equitablement

Lorsque la taille du flex-basis est 0, l’item va aller à la ligne dès qu’il faut pour avoir la petite largeur si il peut

Sur le site de

## Liens

Flex box Tester


## Autres

Si on a envie, M. Dupont sera disponible à la 2e heures.

fin de flexbox on va peut etre faire un petit QCM (non coté)

~~lui demander des conseils pour gagner worldskills.~~

~~notamment au niveau des lacunes ou pourrais-je revoir les choses.~~