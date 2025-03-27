// L'import du bouton burger qui est une fonction à part
import { Burger } from './Components/Burger.js';

// L'import du filtrage de la bar de recherche qui est une fonction à part
import {filtreRecherche} from "./Components/filtreRecherche.js";

// L'import du button favoris sur les articles qui est une fonction à part
import {favBtn} from "./Components/favBtn.js";

// L'import du bouton theme qui est une fonction à part
import {theme} from "./Components/theme.js";

// L'import du filtre par input checkbox
import {filtreInput} from "./Components/filtreRecherche.js";

// Importation de la fonction slide pour les articles
import {slideArticle} from "./Components/slideArticle.js";


// Fonctionnement du burger
Burger();

// Fonctionnement du filtre
filtreRecherche();

// Fonctionnement du button favoris
favBtn();

// Fonctionnement du bouton de changement theme
theme();

// Fonctionnement input checkbox
filtreInput();

// Fonction slide des articles
slideArticle();