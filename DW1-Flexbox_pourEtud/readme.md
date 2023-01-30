# Cours 4, mercredi 19 Octobre

**nb** : la prochaine on fera le quizz d’alsa creation en classe (à ne pas faire à la maison !).

**Devoir** :

- Jeter un coup d’oeil aux liens.
- Faire quelque jeux (voir les liens) pour s’exercer à utiliser flex.
- Assimiler la matière vu en cours.
- Envoyer des propositions d’articles.
- finir l’exercice sur les listes numérotées et jeter un coup d’oeil aux autres.

# Tables des matières

- Récap de la leçon précédente
- Cours d'aujourd'hui sur l’alignement
    - alignement
- Liens très utiles

~~Centrer en CSS, un guide complet~~

~~Le centrage en CSS est souvent un véritable casse-tête, car il existe plusieurs techniques différentes selon les cas d'utilisation. Chris Coyier les a listées et nous donne toutes les solutions.~~

# Récap du dernier cours

## Les 4 concepts

### 1. La distribution

- Il y’a 2 : l’axe Principale et l’axe Secondaire
    - Si c’est  `flex-direction : row` l’axe principale est horizontale et l’axe secondaire est verticale
    - Si c’est  `flex-direction : column` l’axe principale est verticale et l’axe secondaire est horizontale

### 2. l’**Ordonnancement**

- Changer l’ordre des items dans un conteneur avec la proprété order
- la propriété order permet de choisir l’ordre dans le lequel les éléments seront affiché. il donne un poids aux items sur lequel il se trouve, les plus “légér” seront afficher en premier et les plus lourds en derniers.

### 3. l’alignement et 4. la flexibilité

On va les voir plus tard aujourd'hui.

## flex-warp

Les éléments peuvent déborder de leurs parents.

Faire un `flex-wrap : wrap` permet de mettre à ligne ce qui déborde. (voir les autre valeurs de `flex-warp` sur la feuille.)

## Autres infos du récap

- lorsqu’on cible le parent avec un display flex, les enfants deviennent des flexs items
- display none et positionnement absolue peuvent s’appliquer sur les flex items

~~automatiquement les flexs items vont se comporter comme~~

# Leçon d’aujourd'hui : L’alignement

## Alignement

Les propriétés vont dépendre de l’axe sur laquelle elles sont placés

### justify-content

Une propriété qui s’applique sur l’axe principale

> La propriété CSS **`justify-content`** indique la façon dont l'espace doit être réparti entre et autour des éléments selon [l'axe principal](https://developer.mozilla.org/fr/docs/Web/CSS/CSS_Box_Alignment#concepts_majeurs_et_terminologie) d'un conteneur flexible ou selon l'axe en ligne lorsque le conteneur est une grille.  - ***MDN***
>

Elle prend en valeur :

`flex start` positionne l’élément au debut de l’axe principal

`flex end` positionne l’élément à la fin de l’axe principal

`center` positionne l’élément au milieu de l’axe principal

`space-between` met un espace entre les éléments tout le long de l’axe principal

`space-around` met un espace entre les éléments tout le long de l’axe principal et aussi un espace entre les éléments aux extrémités et le bord.

************************Cas pratique :************************

Dans une barre de navigation mobile, on pourrait utiliser space-between.

### Align Items

Il fait la meme choses que justify content, mais sur l’axe secondaire

La valeur par défaut d’align items vaut stretch les items s’étire sur toute l’axe secondaire

### Align Self

Permet d’appliquer des propriétés sur un item.

ça marche si on a peu d’enfants dans le parent 

Flexbox est adapté pour gérer des composants on utilisera grid layout pour la mise en page du site web

### Align content

Alignement de lignes entre elles quand on a plusieurs lignes dans la boite.

**nb** : [Flexbox.Help](http://Flexbox.Help) permet de jouer avec les propriété qu’on vient de de voir.

**Exercice 2 : formulaire d’alignement**

```css
display: flex;
```

Il faut juste faire `display: flex;`

Ça va mettre les valeurs par défaut de flex notamment

- justify-content raw
- align-item strecht

Et ça suffit !

********************************************************Faire un footer facilement !********************************************************

- Il faut mettre un `min-heigth : 100vh`, un `display : flex;` et un `flex-direction : column` sur le parent du footer.
- Ajouter un `margin-left : auto;` au footer.

Et c’est finit

(page 31 du livre)

### flexbox est bi

On parle du fait qu’on peut centrer de façon verticale et horizontalement facilement

**exercice 3 centrage**

```css
body {
  min-height: 100vh;
  display: flex;
}

div {
  margin: auto;
}

```

2eme façon de faire

```css
body {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
```

## La flexibilité (flex grow, flex shrink et flex basis)

Ils s’appliquent sur les items :

**flex grow :** va donner la capacité de grandir

**flex-shrink :** va donner la capacité de rétrécir.

**flex-basis :** est un synonyme de width, dimension avant que l’espace ce soit distribution.

flex est une propriété raccourcie qui regroupe les 3 qu’on vient de voir de cette manière

`flex : grow, shrink, basis` . Elle a aussi des valeurs préfaits 
- `flex : initial` soit `flex 0, 1, auto` (c’est ça la situation de départ flex)
- `flex : auto` soit `flex 1, 1, auto`
- `flex : none` soit `flex 0, 0, auto`
- `flex : nombre` soit `flex nombre, 1, 0%`

Quand flex-basis est 0 le navigateur va considérer que la boite n’a pas de valeur dans son calcule, pour le navigateur il n'a pas de largeur meme s'il a du contenu.

Les vieux navigateurs ne comprennent pas bien les propriétés `flex`

*Exemple de flex-grow*

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cce614e4-de75-4bc2-a728-3e57c296362d/Untitled.png)

Conteneur de base

A et B n’ont pas flex

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/23d6323f-b838-452f-80b8-1c92f90a9025/Untitled.png)

B a un flex de 1, il va donc prendre tout l’espace restant

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/62fff8b2-6f94-4073-98d5-e806c34a8cfb/Untitled.png)

A et B ont un flex de 1 ils vont donc se partager l’espace restant

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d5e0fbcc-6f56-4090-9511-c0546b027982/Untitled.png)

A a un flex de 1 et B a un flex de 2. B va prendre 2/3 de l’espace restant et flex qu’un seul tier de l’espace restant.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3f5ff439-c7c8-4ba3-a83e-8d80a17d67b0/Untitled.png)

C’est comme-ci il se partageait une tarte.

**exercices 04 navigation**

```css
nav a:first-of-type {
  border-radius: 1rem 0 0 1rem;
}

nav a:last-of-type {
  border-radius:  0 1rem 1rem 0;
}

nav {
  display: flex;
}

a {
  flex: 1;
}

a:hover {
  flex: 2;
}
```

******************************exercice 06 : [froggy](https://flexboxfroggy.com/#fr)**

**exercice 07 : centrage picto**

```css
/* Solution de la prof */
.picto-item{
  display: inline-flex; /* contexte flex qui se comporte comme un élément inline*/
  justify-content: center;
  align-items: center;
}
```

```css
/* autre solution */
.pictos{
  display: flex;
  justify-content: center;
}

.picto-item{
  display: flex;
}

img[src$=".svg"] {
  margin: auto;
}
```

## Priorités complexes

### Ordre de priorité (à étudier !)

1. min-width/min-height
2. max-width/max-height
3. flex-wrap
4. flex shrink/flex-grow
5. flex-basis : valeur
6. width/heigt : valeur
7. flex-basis: auto

**width vs flex-basis**

Si flex-basis n’a pas de valeur ,c’est width qui a la priorité alors que c’est l’inverse si flex basis a un valeur.

### Que ce passe t’il si ?

On a notre base 1 conteneur avec 4 item

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9cbf8e3f-0685-4a35-85f0-961474d833f9/Untitled.png)

**CAS 1**

Lorsqu’on applique ce code :

```css
/* cas 1 */
.container {
	 display: flex
}
.item {
	width 50%
}
```

c’est ça qui s’affiche :

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f12bca48-1c11-47f8-afe0-374418393beb/Untitled.png)

Ce qu’il se passe ce que les items vont grossir et déborder dans un premier tant mais vu que le flex-shrink est à 1 il va retrécir pour rentrer dans le conteneur.

**CAS 2**

Lorsqu’on applique ce code :

```css
/* cas 2 */
.container {
	 display: flex
	 flex-wrap: wrap
}
.item {
	width 150%
}
```

C’est ça qui s’affiche :

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/29b3dd43-6de2-4b78-bf59-1a60b45cf406/Untitled.png)

Là les items vont déborder, mais ne vont pas occuper 150 % du width à cause de flex-shrink qui est à 1. Ils vont, alors, occuper le maximum de ce qu’ils peuvent.

**exercice 05 : flex 1**

le layout saint graal

```css
body{
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  flex: 1;
}

nav{
  display: flex;
  flex: 1;
  flex-direction: column;
}

.wrapper {
  /*display: flex;*/
  /*flex: 1;*/
}

.content{
  flex: 3; /* Si on veut que le contenu prennent 3/4 de et le nav 1/4  
  */
}

footer {
  margin-top: auto;
}
```

**********nb :********** La propriété CSS **`flex-flow`** est une [propriété raccourcie](https://developer.mozilla.org/fr/docs/Web/CSS/Shorthand_properties) pour les propriétés `[flex-direction](https://developer.mozilla.org/fr/docs/Web/CSS/flex-direction)` et `[flex-wrap](https://developer.mozilla.org/fr/docs/Web/CSS/flex-wrap)`. (voir les valeurs sur le sites mdn)

## Priorité complexes

**Ressources utiles pour Flexbox**

- Les feuilles distribuées au cours
- Article « CSS3 Flexbox Layout module » de Raphaël Goetter (digest de son livre) : [https://www.alsacreations.com/tuto/lire/1493-css3-flexbox-layout-module.html](https://www.alsacreations.com/tuto/lire/1493-css3-flexbox-layout-module.html)
- Livre « CSS 3 Flexbox, Plongez dans les CSS modernes » de Raphaël Goetter, Editions Eyrolles : [https://www.alsacreations.com/livres/lire/1702-CSS3-Flexbox-plongez-dans-les-CSS-modernes.html](https://www.alsacreations.com/livres/lire/1702-CSS3-Flexbox-plongez-dans-les-CSS-modernes.html) pour une présentation du livre, [https://www.eyrolles.com/Informatique/Livre/css-3-flexbox-9782212143638/](https://www.eyrolles.com/Informatique/Livre/css-3-flexbox-9782212143638/) => un exemplaire d’occasion sur Ebay à 18.05€ = [https://www.ebay.fr/itm/125471783778](https://www.ebay.fr/itm/125471783778)
- Article intro sur MDN : [https://developer.mozilla.org/fr/docs/Learn/CSS/CSS_layout/Flexbox](https://developer.mozilla.org/fr/docs/Learn/CSS/CSS_layout/Flexbox)
- Flexbox, guide complet (Chris Coyier, CSS-Tricks puis La Cascade) : [https://la-cascade.io/articles/flexbox-guide-complet](https://la-cascade.io/articles/flexbox-guide-complet)
- **[CSS Flexbox et la dimension des boîtes](https://la-cascade.io/articles/css-flexbox-et-la-dimension-des-boites)** Rachel Andrew
- **[CSS Flexbox et l'alignement, guide complet](https://la-cascade.io/articles/css-flexbox-et-lalignement-guide-complet)** Rachel Andrew
- Concepts de base sur MDN : [https://developer.mozilla.org/fr/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox](https://developer.mozilla.org/fr/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)
- Doc du MDN en français => Dash ou Zeal en anglais
- Doc officielle du W3C : [https://www.w3.org/TR/css-flexbox-1/](https://www.w3.org/TR/css-flexbox-1/)
- Caniuse : [https://caniuse.com/?search=flexbox](https://caniuse.com/?search=flexbox)

**Tests et jeux**

- MDN : [Testez vos compétences : Flexbox](https://developer.mozilla.org/fr/docs/Learn/CSS/CSS_layout/Flexbox_skills) ([https://developer.mozilla.org/fr/docs/Learn/CSS/CSS_layout/Flexbox_skills](https://developer.mozilla.org/fr/docs/Learn/CSS/CSS_layout/Flexbox_skills))
- Alsacréations : [https://www.alsacreations.com/quiz/lire/23-CSS-Flexbox](https://www.alsacreations.com/quiz/lire/23-CSS-Flexbox)
- Flexbox Grenouille (**Froggy**) : [https://flexboxfroggy.com/#fr](https://flexboxfroggy.com/#fr)Vous pourriez probablement obtenir une solide après-midi de jeu en parcourant simplement les didacticiels Flexbox existants, mais il est probablement préférable de l’espacer sur quelques jours ou semaines juste pour vous assurer d’avoir beaucoup de rafraîchissements de mémoire. [Flexbox Grenouille](https://flexboxfroggy.com/) est parfait pour cela – cela ne vous fait pas partir de zéro, mais si jamais vous oubliez les commandes, vous pouvez vous lancer dans ce jeu en quelques minutes pour vous remettre à niveau.
- Défense Flexbox (**Flexbox defense Game**) : [http://www.flexboxdefense.com](http://www.flexboxdefense.com/)Vous connaissez déjà les bases de flexbox mais vous ne pouvez pas continuer à « justifier » et « aligner » tout à fait ? [Défense Flexbox](http://www.flexboxdefense.com/) est un didacticiel flexbox déguisé en jeu de tower defense qui vous rappellera que vous vous souvenez de votre contenu de justification et que vous vous alignez – ou mourrez. Mais vous pouvez simplement réessayer. Si vous n’avez jamais été un fan de ces jeux qui n’acceptent qu’une seule bonne réponse, vous aimerez celui-ci, car il vous permet de positionner les tours où vous le souhaitez et de réussir ou d’échouer par vous-même
- **Zombies Flexbox** : [https://mastery.games](https://mastery.games/)C’est un jeu/cours incroyablement bien développé qui promet de vous apprendre à utiliser flexbox avec un jeu intuitif, engageant et auto-renforcé qui tourne principalement autour de vous tirant sur des zombies avec des armes contrôlées par le code flexbox. Il vous emmène des bases aux éléments avancés au cours de plusieurs niveaux qui sont accompagnés d’un scénario, de graphismes sympas et d’une action de massacre de zombies – vous pourriez même oublier que vous apprenez le CSS)
- Fun places to learn CSS Layout – Part 1: Flexbox (Stéphanie Walter) [https://stephaniewalter.design/blog/fun-places-learn-css-layout-part-1-flexbox/](https://stephaniewalter.design/blog/fun-places-learn-css-layout-part-1-flexbox/) => traduction française sur le site Creative Juiz : « Apprendre le positionnement en s’amusant – Partie 1 : Flexbox » : [https://www.creativejuiz.fr/blog/css-css3/apprendre-positionnement-flexbox-s-amusant](https://www.creativejuiz.fr/blog/css-css3/apprendre-positionnement-flexbox-s-amusant)
- [Wes Boss a fait 20 vidéos gratuites](https://flexbox.io/#/) pour vous aider à apprendre Flexbox
- [vous pouvez également jeter un petit coup d’œil ici si vous voulez de jolis Gifs animés pour comprendre Flexbox](https://medium.freecodecamp.com/an-animated-guide-to-flexbox-d280cf6afc35)

**Articles à propos de Flexbox sur La Cascade**

- **[Centrer en CSS, un guide complet](https://la-cascade.io/articles/centrer-en-css-un-guide-complet)** Chris Coyier
- **[Centrer un bloc div, guide complet](https://la-cascade.io/articles/centrer-une-div-guide-complet)** Steve Pear
- **[Comment apprendre CSS](https://la-cascade.io/articles/comment-apprendre-css)** Rachel Andrew
- **[CSS Flexbox et la dimension des boîtes](https://la-cascade.io/articles/css-flexbox-et-la-dimension-des-boites)** Rachel Andrew
- **[CSS Flexbox et l'alignement, guide complet](https://la-cascade.io/articles/css-flexbox-et-lalignement-guide-complet)** Rachel Andrew
- **[CSS Grid Layout, guide complet](https://la-cascade.io/articles/css-grid-layout-guide-complet)** Chris House
- **[Flexbox, guide complet](https://la-cascade.io/articles/flexbox-guide-complet)** Chris Coyier
- **[Grid et Flexbox, le duo gagnant](https://la-cascade.io/articles/grid-et-flexbox-le-duo-gagnant)** Chen Hui Jing
- **[Guide de Flexbox : space-between, l'oublié](https://la-cascade.io/articles/guide-de-flexbox-space-between-loublie)** Noah Blon
- **[Que se passe-t-il quand on crée un Flexbox flex container?](https://la-cascade.io/articles/que-se-passe-t-il-quand-on-cree-un-flexbox-flex-container)** Rachel Andrew
- **[Sticky footer, de 5 façons](https://la-cascade.io/articles/sticky-footer-de-5-facons)** Chris Coyier
- **Créer le Saint Graal de la mise en page - Tutoriel CSS :**  [https://fr.linkedin.com/learning/c08e2bce-4bb1-39ab-9bd9-bea548482e0b/creer-le-saint-graal-de-la-mise-en-page](https://fr.linkedin.com/learning/c08e2bce-4bb1-39ab-9bd9-bea548482e0b/creer-le-saint-graal-de-la-mise-en-page) (pas sur La Cascade)
- Le Holy Graal Layout
    - Définition sur Wikipedia : [https://en.wikipedia.org/wiki/Holy_grail_(web_design)](https://en.wikipedia.org/wiki/Holy_grail_(web_design))
    - Créer le Saint Graal de la mise en page - Tutoriel CSS **:** [https://fr.linkedin.com/learning/c08e2bce-4bb1-39ab-9bd9-bea548482e0b/creer-le-saint-graal-de-la-mise-en-page](https://fr.linkedin.com/learning/c08e2bce-4bb1-39ab-9bd9-bea548482e0b/creer-le-saint-graal-de-la-mise-en-page)
- Les gouttières : la propriété gap (grid-gap, raccourci de …) est utilisable dans le contexte Flexbox :
    - [https://css-tricks.com/almanac/properties/g/gap/](https://css-tricks.com/almanac/properties/g/gap/)
    - [https://coryrylan.com/blog/css-gap-space-with-flexbox](https://coryrylan.com/blog/css-gap-space-with-flexbox)
    - [https://developer.mozilla.org/en-US/docs/Web/CSS/gap](https://developer.mozilla.org/en-US/docs/Web/CSS/gap)

  Alsacréations : Compteurs CSS : donnez du style à vos listes d'éléments : [https://www.alsacreations.com/article/lire/1210-donnez-du-style-a-vos-listes.html](https://www.alsacreations.com/article/lire/1210-donnez-du-style-a-vos-listes.html)