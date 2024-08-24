## DevConnect

DevConnect est une application web de réseau social pour développeurs, permettant aux utilisateurs de créer un profil, de publier du contenu, de suivre d'autres utilisateurs, de commenter et de partager des publications, et bien plus encore.

## Table des matières

- [Fonctionnalités](#fonctionnalités)
- [Technologies](#technologies)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Structure du projet](#structure-du-projet)
- [Contribuer](#contribuer)
- [License](#license)

## Fonctionnalités

- Création de profils utilisateur
- Publication de contenu (posts)
- Suivi d'autres utilisateurs
- Commentaires sur les publications
- Partage des publications
- Intégration des réseaux sociaux (Facebook, Twitter, Instagram, LinkedIn, YouTube)
- Interface utilisateur esthétique et ergonomique
- Application responsive pour s'adapter à tout type d'écran

## Technologies

DevConnect utilise les technologies suivantes :

- **Frontend** : HTML, CSS, JavaScript, React
- **Backend** : C# 
- **Base de données** : SQLite
- **Autres** : Axios pour les requêtes HTTP, Material-UI pour les composants UI

## Installation

### Prérequis

- Node.js (version 14 ou supérieure)
- DotNet

### Étapes

1. Clonez le dépôt :
   ```bash
  https://github.com/willbreezy/devconnect2.0.git 

2. Accéder au répertoire du projet :
    cd DevConnect

3. Installer les dépendances pour le frontend :
    npm install

4. Démarrer l'application :
    npm start

##  Utilisation
    Une fois l'application démarrée, ouvrez votre navigateur et accédez à http://localhost:3000 pour voir DevConnect en action. Vous pouvez créer un compte, vous connecter, et commencer à utiliser les fonctionnalités du réseau social.

##  Structure du projet
    DevConnect2.0/
    ├── node_modules/                  # Répertoire du frontend
    ├── public/
    ├──src/
    │       ├──actions/
    │               ├── alertes.jsx
    │               ├── authentifier-utilisateur.jsx
    │               ├── post.jsx
    │               ├── profil.jsx
    │               └── types.jsx
    │       ├── composants/
    │       │   ├── auth/
    │       │           ├── PageConnexion.jsx
    │       │           └── PageInscription.jsx
    │       │   ├── forms-profil/
    │       │           ├── AjouterEducation.jsx
    │       │           ├── AjouterExperience.jsx
    │       │           └── Formprofil.jsx
    │       │   ├── miseenpage/
    │       │           ├── Alerte.jsx
    │       │           ├── Barredenavigation.jsx
    │       │           ├── PageAccueil.jsx
    │       │           ├── PageChargement.jsx
    │       │           ├── PageNontrouvee.jsx
    │       │           └── spinner.gif
    │       │   ├── post/
    │       │           ├── Affichercommentaire.jsx
    │       │           ├── Afficherpublication.jsx
    │       │           └── Laissercommentaire.jsx
    │       │   ├── posts/
    │       │           ├── Afficherpostindividuel.jsx
    │       │           ├── Creerpublication.jsx
    │       │           └── Listepublicationsindividuel.jsx
    │       │   ├── profil/
    │       │           ├── Profil.jsx
    │       │           ├── ProfilApropos.jsx
    │       │           ├── ProfilEducation.jsx
    │       │           ├── ProfilExperience.jsx
    │       │           ├── Profil Github.jsx
    │       │           └── ProfilTop.jsx
    │       │   ├── profils/
    │       │           ├── ListeProfils.jsx
    │       │           └── ProfilItem.jsx
    │       │   ├── routing/
    │       │           └── RoutePrivee.jsx
    │       │   ├── tableau/
    │       │           ├── Education.jsx
    │       │           ├── Experience.jsx
    │       │           ├── PageTableaudebord.jsx
    │       │           └── TableaudebordActions.jsx
    │       ├── img/
    │               └── showcase.JPG
    │       ├── reducteurs/
    │               ├── reducteurAlerte.jsx
    │               ├── reducteurAuth.jsx
    │               ├── reducteurIndex.jsx
    │               ├── reducteurPost.jsx
    │               ├── reducteurProfil.jsx
    │               └── reducteurRoot.jsx
    │       ├── utils/
    │               ├── api.jsx
    │               ├── AuthJeton.jsx
    │               └── formatDate.jsx
    │       ├── App.css
    │       ├── App.js
    │       ├── firebase.js
    │       ├── index.js
              ├── store.js
    ├── .firebaserc
    ├── .gitignore
    ├── firebase.json
    ├── firestore.indexes.json
    ├── firestore.rules
    ├── package-lock.json
    ├── package.json
    └── README.md

## Contribuer
Les contributions sont les bienvenues ! Veuillez soumettre une pull request ou ouvrir une issue pour discuter des changements que vous souhaitez apporter.
Pour contribuer :

1. Forkez le projet
2. Créez une branche pour votre fonctionnalité (git checkout -b feature/nouvelle-fonctionnalite)
3. Commitez vos changements (git commit -m 'Ajout d'une nouvelle fonctionnalité')
4. Poussez vos changements (git push origin feature/nouvelle-fonctionnalite)
5. Ouvrez une Pull Request

## Licence
Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus d'informations.

# Pour commencer avec with Create React App

Ce projet a été amorcé avec [Create React App](https://github.com/facebook/create-react-app).

## Scripts disponibles

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
