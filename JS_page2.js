
function Afficher(){

    let panier = sessionStorage.getItem("panier");
    myData = JSON.parse(panier)
    paragraphe = document.createElement('p');
    paragraphe.innerText = 'Voici votre panier : \n' + myData;
    document.getElementById("paragraphe").append(paragraphe);

}