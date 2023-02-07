function Valider(){
    let total = parseInt(document.getElementById('total').innerText);
    if (total >= 20){
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
function Creerfruit(){
    peche = new fruit('peche',10);
    poire = new fruit('poire',12);
    pomme = new fruit('pomme', 11);
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
class fruit{
    constructor(nom, prix,quantite = 0,sousTotal = 0) {
        this.nom = nom;
        this.prix = prix;
        this.quantite = quantite;
        this.sousTotal = sousTotal;
    }
    toString(){
        return this.nom + '\n' + this.prix
    }
}``

class panier{
    constructor(Peche,Poire,Pomme) {
        this.peche = Peche;
        this.poire = Poire;
        this.pomme = Pomme;
    }

    toString(){
        return this.peche + '\n' + this.poire + '\n' + this.pomme;
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