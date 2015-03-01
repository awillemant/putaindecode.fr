Modulaire, maintenable, réutilisable, accessible. Ces termes sont au cœur de nos métiers et on nous les rabache toute la journée.

Malgré la grossièreté de ces mots pour certains d'entre nous, il est tout a fait possible de pondre du CSS en utilisant tous ces principes.

## Maintenable

L'un des trucs les plus chiants du CSS c'est bien la cascade, qui, malgré sa bonne volonté, n'apporte pas que des solutions. Pour pallier aux problèmes que l'on peut vite créer, [la méthodologie BEM](http://putaindecode.fr/posts/css/petite-definition-bem/) a vu le jour avec son [lot de variantes](http://blog.kaelig.fr/post/48196348743/fifty-shades-of-bem).

La grande majorité des membres de p! utilisent cette convention

```css
.MyComponent {}
.MyComponent.is-state {}
.MyComponent--modifier {}

.MyComponent-element {}
.MyComponent-anotherElement {}
```

D'un coup d'œil, on devine la structure `HTML` qui en découle, et l'utilité de chaque élement. Les états sont toujours les mêmes et clairement définis car commençant par `is-*`, de même que les élements définis par `-` ainsi que les modifieurs `--`. Avec cette méthologie rares sont les sélecteurs dépassant :
 ```css
 .ElementA .ElementB {}
 ```

L'interêt ? Apporter de la sémantique à notre code CSS, en utilisant des classes, des classes et des classes afin de clairement s'abstraire de la cascade. On évite ainsi les problèmes d'éléments, finis les `!important` et les soudains changements de DOM qui te forcent à réécrire tes sélecteurs.


Cette méthode est d'ailleurs, entre autres, utilisée par [Twitter](http://twitter.com) via [SUIT CSS](http://suitcss.github.io/).


## Modulaire

Partant de notre méthodologie, on va développer notre site web comme un gros Lego. Chaque partie graphique de notre projet sera un composant.

On pourrait imaginer des éléments comme `NavBar`, `Pagination`, `Article` que l'on va assembler au fur et à mesure de notre développement. Notre site sera composé de plusieurs dizaines de fichiers, mais aucun n'excèdera quelques centaines de lignes, grand maximum. Beaucoup plus facile à débugger, et donc sur le long terme plus maintenable.

Il va de soi qu'on utilisera son outil preféré pour concaténer et minimiser le tout en un seul fichier, sinon on risque d'avoir quelques problèmes de _webperf_.

## Accessible

Les `pixels` vivent leurs derniers jours, et à part votre fichier Photoshop, vous ne devriez plus trop en lire. Eh oui, car les unités stars sont `em` et `rem`. Elles permettent à notre design de s'adpater à la configuration des navigateurs de nos utilisateurs et puis en même temps à nous aussi.

Mais voilà que `em` rencontre un inconvénient majeur, encore et toujours notre fameuse cascade. Chaque élement dépend de son propre `font-size` ou de celui de son parent. Alors, vous imaginez l'élement de l'élement de l'élement. On peut vite perdre les pédales. Je vous vois venir avec l'unité `rem`. Effectivement on résout complètement le problème de la cascade, mais on perd en modularité.

Prenons notre exemple de `NavBar`, voici comment on pourrait commencer ce composant :

```css

.NavBar {
  font-size: 1rem;
}
  .NavBar-item {
    font-size: .875em;
    padding: 1em;
  }
```

Notre classe principale étant définie en `rem`, il devient alors très facile de calculer l'ensemble de ces `-item` en `em`.
On évite ainsi de nouveau les problèmes de cascade. De plus, on peut très facilement augmenter la taille générale de notre composant, en augmentant la taille de son `font-size` dans sa classe principale.
On atteint alors un double d'objectif : en plus d'être accessible en supprimant les pixels, on rend notre composant réutilisable sur d'autres projets en s'adaptant très facilement à son contexte.


## Namespace

On utilise tous des scripts `vendors`. Pour éviter les collisions avec ceux-ci, et encore une fois à cause de cette maudite cascade, voici un petit truc qui vous évitera de modifier vos classes. L'ajout d'un namespace à nos composants.

On va utiliser notre exemple de tout à l'heure avec `NavBar` :

```css
.putainde-NavBar {
  font-size: 1rem;
}
  .putainde-NavBar-item {
    font-size: .875em;
    padding: 1em;
  }
```

## Pour finir

C'est verbeux, on ne peut pas le nier. Par moment, on peut se dire qu'écrire une classe juste pour une propriété, est-ce si pertinant que ça ? Sauf qu'au moment ou vous écrivez votre `css` vous ne pouvez pas dire qu'à la prochaine mise à jour, il vous faudra peut-être en rajouter 5, et donc votre classe sera finalement bien utile.

La combinaison de toutes ces méthodes m'a fait abandonner `Sass` et son framework `Compass`. Ce qu'apporte un language comme `Sass` (au-delà de l'aspect programmation, mais c'est une autre histoire) vient principalement de ses features telles que  [nested](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#nested_rules) et [@extend](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#extend). Et fanchement, une bonne indentation, un bon nommage de classes et une utilisation intelligente de `BEM` vous feront vite oublier `Sass` sans regarder en arrière.

Sur l'ensemble de mes projets, je n'écris plus que ce qu'on appelle communément du `Vanilla CSS`. Juste un petit bémol, histoire de pouvoir utiliser des spécifications pas forcément encore compatibles sur tous les navigateurs, j'ai ajouté dans mon workflow l'outil [PostCSS](https://github.com/postcss/postcss), le tout contrôlé par [cssnext](http://cssnext.github.io/) dont voici quelques exemples d'[utilisation](https://cssnext.github.io/cssnext-playground/).

Je vous encourage vivement à tester ces deux outils ([PostCSS](https://github.com/postcss/postcss) ou [cssnext](http://cssnext.github.io/)) qui vous apporteront variables, manipulation des couleurs, etc, ainsi que concaténation des `@import` tout en conservant du CSS valide (selon les spécifications).
