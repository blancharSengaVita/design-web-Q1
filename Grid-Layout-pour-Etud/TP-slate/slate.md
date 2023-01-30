1.aller sur slate.com
2.retrouver dans le code CSS la première grille déclarée en Grid Layout
3. quelle classe porte cet élément ?
    hp-top-shelf
4. quels sont les breakpoints pris en charge ?
    600
    1°) 767-768
    930
    970
    2°) 1024
    3°) 1440
5. combien de colonnes sont définies (pour chaque BP) ?
    1°) 767-768 : 11 lignes, 10 colonnes
    2°) 1024 : 15 lignes, 14 colonnes
    6°) 1440
6. combien d'enfants sont concernés par cette grille ?
    4 (3 visibles, 1 en display none sur grand écran)
7.quelles sont les classes de chaque enfant ?
    1°) hp-top-shelf__item et hp-top-shelf__lede
    2°) hp-top-shelf__item et hp-top-shelf__news
    3°) ad ad--topShelf ad--mobileOnly (pub)
    4°) hp-top-shelf__item et hp-top-shelf__flex
8.quel est le comportement de l'élément .hp-top-shelf__lede selon les différents BP ?
    grid-column : 1/span 10, puis … (voir pdf)
    1°) 600 : premier (order)
    2°) 767-768 : il est au centre, occupe entre L4 et L9
    3°) 930 : idem
    4°) 970
    5°) 1024
    6°) 1440
9. quelle est l'alternative prévue pour les navigateurs ne supportant pas Grid Layout ?
• les propriétés sur le parent
    display: flex
• les propriétés sur chaque enfant
    0°) hp-top-shelf__item => flex
    1°) order
    2°) order
    3°) /
    4°) order
10. reproduisez la grille sur un document HTML/CSS local avec les mêmes paramètres que ceux de slate.com (responsive et amélioration progressive inclus)