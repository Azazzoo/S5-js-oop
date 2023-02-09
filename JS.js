class fruit{
    constructor(nom, prix,quantite = 0,sousTotal = 0) {
        this.nom = nom;
        this.prix = prix;
        this.quantite = quantite;
        this.sousTotal = sousTotal;
    }
    toString(){
        return this.quantite + ' ' + this.nom + ' = ' + this.prix + '$'
    }
}
class panier{

    constructor(Peche,Poire,Pomme, totals) {
        this.peche = Peche;
        this.poire = Poire;
        this.pomme = Pomme;
        this.total = parseInt(document.getElementById('total').innerText);
    }

    toString(){
        return this.peche + '\n' + this.poire + '\n' + this.pomme + '\n' + 'Votre Total : ' + this.total + '$';
    }
}
function Creerfruit(){
    peche = new fruit('Peche',10);
    poire = new fruit('Poire',12);
    pomme = new fruit('Pomme', 11);
}

function Valider(){
    let total = parseInt(document.getElementById('total').innerText);
    if (total >= 20){
        paniers = new panier(peche,poire,pomme)
        sessionStorage.setItem('panier', JSON.stringify(paniers));
        return true
    }
    else{
        document.getElementById('p').setAttribute('class', 'error center');
        return false
    }
}
function Update(choix){

    if (choix === 'peche'){
        let nbfruit = document.getElementById('nbPeches').value;
        document.getElementById('stPeche').innerText = (peche.prix * nbfruit) + '$';
        peche.quantite = nbfruit;
        peche.sousTotal = (peche.prix * peche.quantite);
    }
    else if (choix === 'poire'){
        let nbfruit = document.getElementById('nbPoires').value;
        document.getElementById('stPoire').innerText = (poire.prix * nbfruit) + '$';
        poire.quantite = nbfruit;
        poire.sousTotal = (poire.quantite * poire.prix);
    }
    else{
        let nbfruit = document.getElementById('nbPommes').value;

        document.getElementById('stPomme').innerText = (pomme.prix * nbfruit) + '$'
        pomme.quantite = nbfruit;
        pomme.sousTotal = (pomme.quantite * pomme.prix);
    }
    let total = (pomme.sousTotal + poire.sousTotal + peche.sousTotal);
    document.getElementById('total').innerText = total +  '$'

}


function activer(){
    let value = document.getElementById('conditions').checked;
    console.log(value)
    if (value === true){
        document.getElementById('submit').disabled = false;
        document.getElementById('submit').setAttribute('class','submit') ;

    }
    else{
        document.getElementById('submit').disabled = true;
        document.getElementById('submit').setAttribute('class','invalide') ;
    }
}

function CreerPanier(){
    let sacPeche = document.getElementById('nbPeches').value;
    let sacPoire = document.getElementById('nbPoires').value;
    let sacPomme = document.getElementById('nbPommes').value;
    const p = new panier(sacPeche,sacPoire,sacPomme);
    let newP = document.createElement('p');
    newP.innerText = p;
    document.getElementById('test').append(newP);
}
function Afficher(){

    let panier = sessionStorage.getItem("panier");
    myData = JSON.parse(panier)
    paragraphe = document.createElement('p');
    paragraphe.innerText = 'Voici votre panier : \n' + myData;
    document.getElementById("paragraphe").append(paragraphe);

}