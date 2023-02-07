function Valider(){
    let total = parseInt(document.getElementById('total').innerText);
    if (total >= 20){

        return true

    }
    else{
        return false
    }
}
function Update(choix){


    if (choix === 'peche'){
        let nbfruit = document.getElementById('nbPeches').value;
        let prixfruit = parseInt(document.getElementById('prixPeches').innerText);
        let oldTotal = parseInt(document.getElementById('total').innerText);
        document.getElementById('stPeche').innerText = (prixfruit* nbfruit) + '$';
        let sousTotal = parseInt(document.getElementById('stPeche').innerText);
        document.getElementById('total').innerText = (oldTotal + prixfruit ) + '$';
    }
    else if (choix === 'poire'){
        let nbfruit = document.getElementById('nbPoires').value;
        let prixfruit = parseInt(document.getElementById('prixPoires').innerText);
        let oldTotal = parseInt(document.getElementById('total').innerText);
        document.getElementById('stPoire').innerText = (nbfruit * prixfruit) + '$' ;
        let sousTotal = parseInt(document.getElementById('stPoire').innerText);
        document.getElementById('total').innerText = (oldTotal + prixfruit ) + '$';
    }
    else{
        let nbfruit = document.getElementById('nbPommes').value;
        let prixfruit = parseInt(document.getElementById('prixPommes').innerText);
        document.getElementById('stPomme').innerText = (nbfruit * prixfruit) + '$';
        let oldTotal = parseInt(document.getElementById('total').innerText);
        let sousTotal = parseInt(document.getElementById('stPomme').innerText);
        document.getElementById('total').innerText = (oldTotal + prixfruit ) + '$';
    }
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