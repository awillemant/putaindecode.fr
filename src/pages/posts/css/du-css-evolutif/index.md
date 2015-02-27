Modulaire, maintenable, réutilisable, accessible. Ces termes sont à la mode et on vous les rabache toute la journée.

Malgré la grossièreté de ces mots pour certains d'entre nous, il est tout a fait possible de pondre du CSS en utilisant tous ces principes.


## Maintenable

L'un des trucs les plus chiants du CSS c'est bien la cascade. Pour palier à ce problème, BEM est arrivé. Il en existe plusieurs variantes et d'ailleurs on a déjà écrit un [article](http://putaindecode.fr/posts/css/petite-definition-bem/) pour en expliquer la définition.

La grande majorité des membres de p! utilisent cette convention

```css
.MyComponent {}
.MyComponent.is-animating {}
.MyComponent--modifier {}

.MyComponent-part {}
.MyComponent-anotherPart {}
```

D'un coup d'oeil, on devine la structure `HTML` qui en découle, et l'utilité de chaque élement. Les états sont toujours les mêmes est clairement définit car commencant par `is-*`, de même que les élements définit par `-` ainsi que les modifieurs `--`. Avec cette méthologie rare sont les sélecteurs dépassant :
 ```css
 .ElementA .ElementB {}
 ```

L'interêt ? Apporter de la sémanthique à notre code CSS, en utilisant des classes, des classes et des classes afin de clairement s'abstraire de la cascade. On évite ainsi les problèmes d'éléments, finis les `!important` et les soudains changement de DOM qui te vaut à réécrire tes sélecteurs.


Cette méthode est d'ailleurs entre autre utilisée par [SUIT CSS](http://suitcss.github.io/) et [Twitter](http://twitter.com).


## Modulaire

Partant de notre méthdologie, on va développer notre site web comme un gros légo. Chaque partie graphique de notre projet sera un composant et dépendra de lui même.

On pourrait imaginer des éléments comme `NavBar`, `Pagination`, `Article` que l'on va assembler au fur et à mesure de notre développement. Notre site sera composé de plusieurs dizaine de fichiers, mais chacun n'excedera au maximum que quelques centaines de lignes. Beaucoup plus facile à débugger, et donc sur le long terme plus maintenable.

## Accessible

Les `pixels` vivent leur derniers jour, et à part votre fichier photoshop, vous ne devriez plus trop en lire. Et oui, car les unités stars sont `em` et `rem`. Elles permettent à notre design de s'adpater à la configuration des navigateurs de nos utilisateurs et puis en même temps à nous aussi.

Mais voila que `em` rencontre les mêmes inconvéniants que notre DOM à savoir la cascade. Chaque élement dépend de son propre font-size ou de celui de son parent. Alors vous imaginez l'élement de l'élement de l'élement. On peut vite perdre les pédales. Je vous vois venir avec l'unité `rem`. Effectivement on résoud complétement le problème de la cascade, mais on perd en modularité.

Prenons notre exemple de `NavBar`, voici comment on pourrait commencer ce composant:

```css

.NavBar {
  font-size:1rem;
}
  .NavBar-item {
    font-size: .875em;
    padding:1em;
  }
```

Notre classe principale étant définit en `rem` il devient alors très facile de pouvoir calculer l'ensemble de ces `Element` en `em`.
On évite ainsi de nouveau les problèmes de cascade. De plus, on peut très facilement augmenter la taille générale de notre composant, en augmentant la taille de son `font-size` dans sa classe principale.
On atteint alors un double d'objectif, en plus d'être accesible en supprimant les pixel, on rend notre composant réutilisable sur d'autre projet en s'adpatant très facilement à son contexte.


## Namespace

On utilise tous des scripts `vendors`. Pour éviter les collisions avec eux, du encore une fois à cette maudite cascade, le petit truc qui vous évitera de modifier vos classes. L'ajout d'un namespace à nos composants.

On va uiliser notre exemple de tout à l'heure avec `NavBar` :

```css
.putainde-NavBar {
  font-size:1rem;
}
  .putainde-NavBar-item {
    font-size: .875em;
    padding:1em;
  }
```

## Pour finir

C'est verbeux, on peut pas le nier. Par moment, on peut se dire qu'écrire une classe juste pour une proprieté, est-ce si pertinant que ça ? Sauf qu'au moment ou vous écrivez votre `css` vous ne pouvez pas dire qu'a la prochaine mise à jour, il vous foudra peut-être en rajouter 5, et donc votre classe sera bien utile.

La combinaison de toutes ces méthodes m'a fait abandonné `Sass` et son framework `Compass`. Je n'écris plus ce qu'on appelle communément du `Vanilla CSS`. Enfin presque, histoire de pouvoir utiliser des spécifications pas forcément encore compatible sur tous les navigateurs, j'ai ajouté dans mon workflow le framework [PostCSS](https://github.com/postcss/postcss) le tout contrôlé par [cssnext](http://cssnext.github.io/) dont voici quelques exemples d'[utilisations](https://cssnext.github.io/cssnext-playground/).
