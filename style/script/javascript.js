//create an array with diffreent elemnt and subelemnt
const toDosContainer = document.getElementById("toDosContainer")
// create button and progress container


const checklist = [
    {
        Item: 'Mots clefs pertinent',
        SubItem: ['Verifier la pertinence des mots de passes dans des sites dédiers']
    },
    {
        Item: 'Un contenu de qualité et informatif',
        SubItem: ['unique et a jour']
    },
    {
        Item: 'Utilisez des balises de titre (title) pertinentes et attrayantes',
        SubItem:['1-Optimisez les balises de description (meta description).','2- Utilisez des balises d/n-tête (H1, H2, etc.) de manière hiérarchique.']
    },

     {
        Item: 'Optimisation de l’image',
        SubItem: ['1-Taille compréssée','2-Format jpeg ou png','3-Remplir alt','4-Utilisez la mise en cache du navigateur.']
    },
    {
        Item: 'Création de liens (Link Building)',
        SubItem: ['1-Utilisez des liens internes pour relier les pages de votre propre site.']
    },
    {
        Item: 'Optimisation mobile',
        SubItem: ['1-responsive design','2-Améliorez la vitesse de chargement sur les dispositifs mobiles']
    },
    {
        Item: 'Utilisation des réseaux sociaux',
        SubItem: ['1-Partagez votre contenu sur les réseaux sociaux pour augmenter sa visibilité.','2-Les signaux sociaux peuvent influencer le classement.']
    },
    {
        Item: 'Surveillance et analyse',
        SubItem: ['1-Utilisez des outils d/analyse tels que Google Analytics.', '2-Surveillez les classements de mots clés et ajustez votre stratégie en conséquence.']
    },
    {
        Item: 'Révision régulière de la stratégie',
        SubItem: ['1-Les algorithmes des moteurs de recherche évoluent, donc adaptez votre stratégie en conséquence. Restez informé des dernières tendances en matière de SEO']
    },
    {
        Item: 'Sécurité du site',
        SubItem: ['1-Utilisez le protocole HTTPS pour garantir une connexion sécurisée.',' 2-Évitez les liens brisés.']
    },

    ]


//methode one for loop
// checklist.forEach(function(listItem) {
//         let myinput = "";
//         toDosContainer.innerHTML += `
//             <h2>${listItem.Item}</h2> `;
//         for (let i = 0; i < listItem.SubItem.length; i++) {
//             myinput += "<fieldset><input id='scales" + i + "' type='checkbox'  name='valeurs$(i)" + i + "'>" +` <label for="scales">${listItem.SubItem[i]}</label> </fieldset>`;
//         }
//         toDosContainer.innerHTML += myinput;
//     });



// Loop through the checklist and generate HTML
checklist.forEach(function (listItem) {
    // Create a container for each item
    const itemContainer = document.createElement("div");
    itemContainer.innerHTML = `<h2>${listItem.Item}</h2>`;

    // Loop through sub-items and create checkboxes

    for (let i = 0; i < listItem.SubItem.length; i++) {

    // Create a container for each checkbox

        const checkboxContainer = document.createElement("div");
        checkboxContainer.innerHTML = `
            <fieldset>
                <input id='scales${i}' type='checkbox' name='valeurs${i}'>
                <span>${listItem.SubItem[i]}</span>
            </fieldset>`;

    // Append the checkbox container to the item container

        itemContainer.appendChild(checkboxContainer);
    }

    // Append the item container to the main container

    toDosContainer.appendChild(itemContainer);
});

// Get all checkboxes and add event listeners
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", handleCheckboxChange);
});




// Function to handle checkbox changes
function handleCheckboxChange(e) {
    // Get the parent container of the checkbox
    const container = e.target.parentElement;

    // Apply or remove strikethrough based on the checkbox state
    if (e.target.checked) {
        container.style.textDecoration = "line-through";
    } else {
        container.style.textDecoration = "none";
    }
};





//storage checklist on local storage

localStorage.setItem('D', JSON.stringify(checklist));//ici on recupere les valeurs en forme de string, le D correspond a un nom lambda 
const local = localStorage.getItem('D');//Recuperer le tableau du local storage
console.log(JSON.parse(local)); //transformation from string to the resulting  type of the  object before it is returned.


function saveToLocalStorage()//(key)
{
    localStorage.setItem("D",stringify(checklist))
}



