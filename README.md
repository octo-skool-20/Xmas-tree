# Presentation skool20

## Startup
To setup the local development environment, use the following commands:
```bash
git clone https://github.com/octo-skool-20/Xmas-tree.git # Clone repository
cd Xmas-tree # go into the cloned folder
npm install # install dependencies
npm start # start the developpment server
```

## Documentation
The documentation is located in the [Skool 20 drive](https://drive.google.com/drive/folders/1u8aWdmZ7Ijwvq3QfWILYHItRojsS5-Wl?usp=sharing) folder (need access)

## Development
* This project has been built with React. You can check the documentation right [there](https://reactjs.org/docs/getting-started.html)


## Deployment
The site is avaible live at [https://skool-fullstack20.web.app/]
In order to deploy, you need to ask BERN for deployment deployment token.
Once you have the token, you need to execute the following commands (replace with the token):
```bash
sudo npm install -g firebase-tools # Install firebase dependency
npm run build # Build react app
firebase deploy --token "ASK_BERN_FOR_TOKEN" # Deploy to firebase
```
## TODO
- [ ] centrer et fixer arbre de Noël 
- [ ] ajouter toute les boules
- [ ] wip : intégrer un popin sur chaque boule 
- [ ] améliorer le rendu global (+ responsiveness)
- [ ] intégrer popin sur l'étoile
- [ ] wip : écrire un petit message de voeux sur la page de garde
- [ ] wip : écrire une notice sur la 2ème page
- [ ] wip : intégrer la musique 
- [ ] ajouter animation sur la boule lorsque :hoover:
- [ ] ajouter des petits cadeaux 
- [ ] ajouter animation coin de page qui se plie (remplacer bouton chevron ouvrant)
- [ ] confettis js 

## TRELLO 

https://trello.com/invite/b/2Z7rmuXf/81537fdb760ffb204a5c4b188cf8bfd0/xmas-tree
