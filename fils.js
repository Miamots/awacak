/* Awacak · fils de progression (version 1)
   Inspirés des fiches d'habiletés (locomotion, sauts, ballon, motricité fine) de l'équipe.
   Chaque fil : id, sous-section, nom, icône, étapes, matériaux (ou surfaces, moments, partenaires), pistes pour aider.
   Une étape est soit le code d'un repère existant (ex. "mf3-3"), soit [texte, tranche 0..4, moment, ce qui peut aider].
   cov : repères remplacés par le fil (cachés de la liste, sauf s'ils ont déjà été observés).
   noInt : pas de section « intérêt » pour ce fil.
   bes : bouton « l'utilise de lui-même » (texte propre au fil) ; absent = pas de bouton.
   "#Titre" dans les étapes = sous-titre (ex. Lancer, puis Attraper). */
const FILS_RAW=[
 {id:"cis",bes:"Quand il en a besoin, de lui-même",sub:"mf",nom:"Ciseaux",ic:"✂️",st:[
   ["Déchire du papier avec ses mains",1,"J","Papier journal, retailles, déchirer ensemble"],
   ["Tient les ciseaux, ouvre et ferme",2,"J","Ciseaux adaptés, pinces à linge et pinces pour jouer"],
   "mf3-3",
   ["Coupe sur une ligne droite",3,"J","Ligne épaisse, papier rigide, bande pas trop large"],
   ["Suit une ligne courbe",4,"J","Ligne épaisse, tourner la feuille avec l'autre main"],
   ["Découpe une forme simple",4,"J","Grosse forme, contour épais, carton léger"]],
  mL:"Ce qu'il découpe",mat:["Papier","Pâte à modeler","Carton","Pailles","Ficelle","Herbe ou feuilles"],
  aide:["Bandes étroites à couper d'un seul coup","Pâte à modeler à couper","Ciseaux à ressort au besoin","Coin découpage libre avec retailles","« Le pouce regarde le ciel »","Nommer : « ouvre grand, ferme »"],
  cov:["mf4-1"]},
 {id:"cra",bes:"De lui-même (signer, faire une carte)",sub:"mf",nom:"Crayon et dessin",ic:"🖍️",st:[
   "mf1-3","mf2-3","mf3-1","mf3-2",
   ["Colorie en restant à peu près dans la forme",4,"J","Contour épais, petite surface, crayons courts"],
   "mf4-2","mf4-3"],
  mL:"Avec quoi il trace",mat:["Crayon","Craie","Feutre","Pinceau","Doigt dans le sable ou la neige","Bâton dans la terre"],
  aide:["Surface verticale (mur, chevalet)","Crayons courts ou cassés","Dessiner ensemble","Tracer dans le sable, la neige ou la farine","Grande feuille fixée à la table"]},
 {id:"enf",bes:"Quand il en a besoin, de lui-même",sub:"mf",nom:"Enfiler et lacer",ic:"🧵",st:[
   ["Met des objets dans un contenant par un trou",1,"J","Boîte à fente, couvercle percé, gros objets"],
   "mf2-2",
   ["Enfile sur un lacet semi-rigide",3,"J","Bout du lacet entouré de ruban adhésif, perles moyennes"],
   ["Enfile de petites perles sur un fil souple",4,"J","Contenant pour les perles, fil avec une perle au bout"],
   ["Lace une carte ou une grande ouverture",4,"J","Grands trous, carton rigide, montrer « dessus, dessous »"]],
  mL:"Ce qu'il enfile",mat:["Perles","Pâtes","Céréales en anneaux","Pailles coupées","Éléments de la nature"],
  aide:["Lacet au bout rigide","Gros trous, puis plus petits","Contenant pour les perles","Fil avec une perle d'arrêt au bout"]},
 {id:"blo",bes:"Le choisit de lui-même",sub:"mf",nom:"Blocs et constructions",ic:"🧱",st:[
   "mf1-2","mf2-5",
   ["Aligne et agence des blocs à plat (route, enclos)",2,"J","Figurines et autos pour donner une raison au jeu"],
   ["Fait une tour de 8 à 10 blocs",3,"J","Surface plane et stable, blocs de même taille"],
   ["Construit une idée planifiée en 3D (maison, pont)",4,"J","Photos de constructions, dire son plan avant"]],
  mL:"Avec quoi il construit",mat:["Blocs de bois","Gros blocs mous","Blocs emboîtables","Boîtes","Branches et roches"],
  aide:["Détruire ensemble, recommencer","Photos des constructions des amis","Figurines pour inventer une histoire","Surface plane et stable"]},
 {id:"cas",bes:"Le choisit de lui-même",sub:"mf",nom:"Casse-têtes",ic:"🧩",st:[
   "mf1-5",
   ["Fait un casse-tête de 3 ou 4 pièces",2,"J","Pièces épaisses, image modèle"],
   "mf3-5",
   ["Fait un casse-tête de 12 à 24 pièces",4,"J","Bordures d'abord, trier les couleurs"]],
  mL:"Sortes",mat:["Encastrements","Casse-tête cartonné","Casse-tête de plancher","Casse-tête fait maison (photo)"],
  aide:["Image modèle à côté","Bordures d'abord","Pièces à boutons pour commencer","Casse-tête avec un thème qu'il aime"]},
 {id:"hab",bes:"Sans qu'on lui demande",sub:"sp",nom:"S'habiller",ic:"🧥",st:[
   "sp1-3","sp1-4","sp2-2","sp3-2","sp4-2","sp4-1"],
  mL:"Vêtements",mat:["Tuque","Mitaines","Bottes","Manteau","Habit de neige","Costumes du coin jeu"],
  aide:["Ordre en images","Banc bas pour s'asseoir","Truc du manteau à l'envers","Commencer la fermeture pour lui","Temps suffisant, sans presse","Costumes pour pratiquer en jouant"]},
 {id:"rep",bes:"Sans qu'on lui demande",sub:"sp",nom:"Manger et boire",ic:"🥣",st:[
   "sp1-1","sp1-2","sp2-1","sp3-1",
   ["Se verse à boire avec un petit pichet",3,"C","Pichet léger, peu de liquide, lavette proche"],
   "sp4-4"],
  mL:"Ustensiles",mat:["Cuillère","Fourchette","Gobelet","Pichet","Dînette du coin jeu"],
  aide:["Bol à rebord","Pieds appuyés","Ustensiles à sa taille","Accepter le dégât","Servir à la dînette pour pratiquer"]},
 {id:"loc",sub:"mg",nom:"Marcher et courir",ic:"🏃",st:[
   "mg0-4","mg1-1","mg2-1",
   ["Court avec fluidité, accélère et ralentit exprès",3,"D","Jeux de feu rouge, feu vert, de vitesse"],
   ["Change vite de direction et de vitesse en jouant",4,"D","Jeux de poursuite, parcours en zigzag"]],
  mL:"Surfaces",mat:["Gazon","Sable","Neige","Pente","Copeaux","Trottoir"],
  aide:["Espace dégagé","Surfaces variées dehors","Jeux de poursuite simples","Chaussures souples","Parcours que les enfants transforment"]},
 {id:"equ",sub:"mg",nom:"Équilibre",ic:"🪵",st:[
   "mg0-3","mg1-4",
   ["Se tient brièvement sur un pied",2,"H","S'appuyer au mur pour enlever ses bottes"],
   "mg3-5","mg4-4",
   ["Garde son équilibre sur une surface instable",4,"D","Coussins, souches, roches plates, main offerte"]],
  mL:"Où il s'équilibre",mat:["Poutre","Bordure","Souche","Roches plates","Coussins","Neige"],
  aide:["Corde au sol pour commencer","Main tendue qu'il choisit de prendre","Jeux de statue","Planches de largeurs variées","Souches et bordures dehors"]},
 {id:"sau",sub:"mg",nom:"Sauts",ic:"🐸",st:[
   ["Rebondit, plie les genoux en rythme",1,"R","Comptines, mains tenues"],
   "mg2-3",
   ["Saute d'une petite marche",2,"D","Marche basse, tapis de réception, main au début"],
   ["Saute vers l'avant et par-dessus un petit obstacle",3,"D","Corde ou bâton au sol, « rivière » à traverser"],
   ["Fait 2 ou 3 sauts à cloche-pied",3,"D","Jeux d'animaux, mur pour s'appuyer"],
   "mg4-1","mg4-2"],
  mL:"Où il saute",mat:["Flaques","Cerceaux","Marelle","Petite marche","Coussins","Neige"],
  aide:["Histoires motrices (« traverser la rivière »)","Cerceaux au sol","Marelle dessinée","Sauter comme les animaux","Décrire : « tu as plié tes genoux ! »"]},
 {id:"gri",sub:"mg",nom:"Grimper",ic:"🧗",st:[
   "mg0-5","mg1-3","mg1-5","mg2-2","mg3-4","mg3-1",
   ["Grimpe avec agilité sur des structures variées",4,"D","Défis gradués, choisir son chemin"]],
  mL:"Où il grimpe",mat:["Escaliers","Modules","Butte","Arbre bas","Roches","Filet"],
  aide:["Parcours bas, adulte proche sans faire à sa place","Rampe ou main","Laisser choisir le défi","Pentes et buttes dehors","Prise de risque mesurée, valorisée"]},
 {id:"lan",sub:"mg",nom:"Lancer et attraper",ic:"⚽",st:[
   "#Lancer",
   ["Pousse ou fait rouler un ballon exprès",1,"J","Faire rouler l'un vers l'autre, assis jambes écartées"],
   ["Lance vers l'avant",2,"D","Ballon léger, grosse cible (boîte, cerceau)"],
   ["Lance à deux mains vers une cible",3,"D","Cible large, distance courte"],
   ["Lance par-dessus l'épaule",4,"D","Lancer loin des balles de neige ou des balles mousse"],
   "#Attraper",
   ["Suit des yeux un ballon qui roule",0,"J","Ballon coloré ou sonore, rouler doucement vers lui"],
   ["Attrape un gros ballon avec les bras et le corps",2,"D","Ballon mou, distance courte, dire « prêt ? »"],
   ["Attrape un ballon moyen, les bras pliés",3,"D","Ballon mou, lancer doucement, distance courte"],
   ["Attrape surtout avec les mains",4,"D","Balle mousse, distance augmentée peu à peu"]],
  mL:"Avec quoi",mat:["Gros ballon","Balle mousse","Balle de neige","Sac de sable","Ballon de plage"],
  aide:["Ballons de tailles et textures variées","Grosse cible","Distance augmentée peu à peu","Lancer doucement, dire « prêt ? »","Jeux à deux"],
  cov:["mg3-3","mg4-3"]},
 {id:"bot",sub:"mg",nom:"Botter",ic:"🦶",st:[
   ["Pousse un ballon avec le pied, souvent par hasard",1,"D","Gros ballon au sol, espace dégagé"],
   "mg2-4",
   ["Botte avec un meilleur équilibre et plus de précision",3,"D","Cible large (mur, boîte), ballon arrêté"],
   ["Botte un ballon qui roule ou vise une cible",4,"D","Faire rouler doucement, buts improvisés"]],
  mL:"Avec quoi",mat:["Gros ballon","Ballon de soccer","Balle mousse","Cône ou boîte à renverser"],
  aide:["Gros ballon léger","Cible large","Ballon arrêté d'abord","Jeux à deux ou en petit groupe"]},
 {id:"reb",sub:"mg",nom:"Rebondir et dribbler",ic:"🏀",st:[
   ["Regarde un ballon rebondir, s'y intéresse",0,"J","Faire rebondir devant lui"],
   ["Fait rebondir un ballon et essaie de le rattraper",2,"D","Gros ballon qui rebondit bien, surface dure"],
   ["Dribble 1 ou 2 fois avec de l'aide",3,"D","Compter ensemble, ballon moyen"],
   ["Dribble 3 ou 4 fois de suite",4,"D","Comptines pour le rythme"]],
  mL:"Avec quoi",mat:["Gros ballon","Ballon moyen","Balle rebondissante"],
  aide:["Surface dure et plane","Compter les rebonds ensemble","Comptine pour le rythme"]},
 {id:"tra",bes:"Sans rappel",sub:"tr",nom:"Passer d'une activité à l'autre",ic:"🔄",noInt:true,st:[
   "tr0-3","tr1-5","tr2-2","tr3-1","tr4-1","tr4-4"],
  mL:"Moments",mat:["Arrivée","Rangement","Rentrer de dehors","Collation","Habillage","Départ"],
  aide:["Avertir avant le changement","Horaire en images","Chanson de transition","Minuterie visuelle","Tâche ou rôle à faire","Objet de transition"]},
 {id:"jeu",bes:"Va vers les autres de lui-même",sub:"hs",nom:"Jouer avec les autres",ic:"🤝",st:[
   "hs0-2","hs1-1","hs1-3","hs2-1","hs3-1","hs3-4","hs4-1"],
  mL:"Avec qui",mat:["Un ami","Petit groupe","Grand groupe","Plus jeune","Plus vieux","Adulte"],
  aide:["Jouets en double","Jeux à deux","Adulte qui lance le jeu puis se retire","Phrase modèle « je peux jouer ? »","Proche d'un ami rassurant"]}
];
