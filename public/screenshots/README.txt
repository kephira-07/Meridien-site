Placez ici vos vraies captures d'écran de l'application (PNG ou JPG, format portrait).

Taille recommandée : 600 x 1080 px (ratio 5:9), ou une capture entière d'iPhone/Android : elle sera recadrée automatiquement par le haut.

Ensuite, ouvrez src/lib/screenshots.ts et remplacez null par le chemin du fichier :

  home:  "/screenshots/home.png",
  order: "/screenshots/order.png",

Tant qu'une valeur reste à null, le site affiche la maquette dessinée.
