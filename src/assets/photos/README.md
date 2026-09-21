# Photographies du site

Déposez ici les photographies fournies par l’entreprise. Astro se charge du reste :
génération automatique des formats **AVIF** et **WebP**, plusieurs largeurs pour le
`srcset`, dimensions inscrites dans le HTML (pas de décalage de mise en page) et
chargement différé.

## Convention de nommage

Le nom de fichier décrit ce que montre l’image, en minuscules, sans accent, mots
séparés par des tirets. Il sert aussi de repère pour l’équipe éditoriale.

```
inspection-charpente-insectes-xylophages.jpg
charpente-capricorne-maison.jpg
vrillette-bois-poutre.jpg
about-entrait-maconnerie-humidite.jpg
sciure-vermoulure-sol-comble.jpg
trous-sortie-capricorne-chevron.jpg
technicien-sondage-poutre-chene.jpg
cordonnet-terre-termites-soubassement.jpg
parquet-lyctus-lames-percees.jpg
comble-ferme-briarde-seine-et-marne.jpg
```

## Texte alternatif

Le `alt` décrit ce que montre l’image, en une phrase, sans bourrage de mots-clés :

```astro
<Photo
  nom="inspection-charpente-insectes-xylophages.jpg"
  alt="Inspection d’une charpente présentant des signes possibles d’attaque d’insectes xylophages"
  legende="Le sondage au maillet localise les zones creuses avant tout examen rapproché."
/>
```

Un `alt` à proscrire : « traitement insectes xylophages Île-de-France charpente
termites capricorne devis gratuit ». Il n’aide ni un lecteur d’écran ni le
référencement, et il signale une sur-optimisation.

## Repli

Tant qu’un fichier n’a pas été déposé, `<Photo>` affiche le contenu placé dans son
`slot` — généralement un schéma technique SVG. Le site ne montre ainsi jamais
d’illustration générique qui ne décrirait pas réellement son propos.

```astro
<Photo nom="charpente-capricorne-maison.jpg" alt="…" legende="…">
  <Charpente />
</Photo>
```

## Ce qu’il faut éviter

- Les photographies d’insectes en macro en visuel principal : le site vend la
  protection du bâtiment, pas la peur de l’insecte. Une macro n’a sa place que
  lorsqu’elle permet réellement d’identifier une espèce.
- Les images de banque d’images sans rapport avec le bâti francilien.
- Les mises en scène anxiogènes.
