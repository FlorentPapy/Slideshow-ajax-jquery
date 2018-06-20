<?php 

$str = file_get_contents('assets/json/mySlideShow.json');
$json = json_decode($str, true);


$contenu_json = json_encode($json);

			// Nom du fichier à créer
$nom_du_fichier = 'assets/json/mySlideShowtest.json';

			// Ouverture du fichier
$fichier = fopen($nom_du_fichier, 'w+');

			// Ecriture dans le fichier
fwrite($fichier, $contenu_json);

			// Fermeture du fichier
fclose($fichier);


?>