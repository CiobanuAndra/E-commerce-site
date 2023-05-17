const products=[
    {
        id:51,
        price: '250',        
        title: 'Golden Chatham 3-Light Ceiling Light in Gray Driftwood',
        details: 'This path light from Hinkley is a part of the Path Squirrel collection and comes in regency bronze finish. This light measures 9" wide x 25" high. This light uses a 2700K integrated LED. Wet rated. Can be exposed to rain, snow and the elements.',
        imgPathDesktop: "SOURCES/CATEGORIES/outdoor/outdoor1.jpg",
    },
    {
        id:52,
        price: '450',        
        title: 'Hinkley Freeport 18" Pathway Light in Textured Black',
        details: 'This pathway light from Hinkley is a part of the Freeport collection and comes in textured black finish. This light measures 6" wide x 18" high. This light includes one bulb up to 1.50 watts each. Wet rated. Can be exposed to rain, snow and the elements.',
        imgPathDesktop: "SOURCES/CATEGORIES/outdoor/outdoor2.jpg",
    },
    {
        id:53,
        price: '880',        
        title: 'Hinkley Path Ivy 6" Path Light in Copper Bronze',
        details: 'This path light from Hinkley is a part of the Path Ivy collection and comes in copper bronze finish. This light measures 15" wide x 6" high. This light uses a 2700K integrated LED. Wet rated. Can be exposed to rain, snow and the elements.',
        imgPathDesktop: "SOURCES/CATEGORIES/outdoor/outdoor3.jpg",
    },
    {
        id:54,
        price: '780',        
        title: 'Visual Comfort Modern Revel 8" Pathway Light in Bronze',
        details: 'This pathway light from Visual Comfort Modern is a part of the Revel collection and comes in a bronze finish. Uses an integrated LED. Powerful, long lasting (L70, 70,000 hours) dimmable LED tested against the highest quality standards to ensure it delivers consistent LED performance and color over time. Die-cast aluminum structure, marine-grade powder coat finish, and stainless steel hardware for robust durability in harsh elements. appropriate for commercial use. Path features a 12V driver with optional magnetic low voltage transformer (sold separately). Wet listed, IP65 (International Protection rating indicating resistance to dust and water. suitable and safe for commercial use). Modern, contemporary design. 5-year Warranty.',
        imgPathDesktop: "SOURCES/CATEGORIES/outdoor/outdoor4.jpg",
    },
    {
        id:55,
        price: '420',        
        title: 'Generation Lighting Kent 20" Outdoor Post Light in Black',
        details: 'This outdoor post light from Generation Lighting is a part of the Kent collection and comes in black finish. Light measures 8" wide x 20" high. Uses one standard bulb up to 100 watts. Wet rated. Can be exposed to rain, snow and the elements.',
        imgPathDesktop: "SOURCES/CATEGORIES/outdoor/outdoor5.jpg",
    },
    {
        id:56,
        price: '780',        
        title: 'Chateau 3-Head Burled Walnut Surface Mount Post Light',
        details: 'The chateau collection boasts a simple classical style. This lantern features elegant scrollwork and clear beveled glass panes. It s cast aluminum construction resists rust and corrosion.durable cast aluminumtraditional style, clear beveled glass panes, pre-assembled for easy installation. requires 3 100-watt max medium base bulbs installation hardware included 1 year warranty',
        imgPathDesktop: "SOURCES/CATEGORIES/outdoor/outdoor6.jpg",
    },
    {
        id:57,
        price: '390',        
        title: 'Nautica 1-Light Textured White Post Mount Light',
        details: 'You can almost hear the waves lapping at the dockâ€¦ sturdy 9-panel sides create a square lantern with the sea in its blood. A shapely top completes the coastal design. durable cast aluminum cape cod design etched frosted white glass pre-assembled for easy installation requires 1 100-watt max medium base bulb installation hardware included 1 year warranty',
        imgPathDesktop: "SOURCES/CATEGORIES/outdoor/outdoor7.jpg",
    },
];


// importScripts ('basic-functions-productPage.js');



const productsString = JSON.stringify(products);
localStorage.setItem('productsListInsideStorage', productsString);
const productsStringFromStorage= localStorage.getItem('productsListInsideStorage');
const productsList=JSON.parse(productsStringFromStorage);


function createElementProduct(id, title,imagine, pret){
    const article = document.createElement('article');
    article.setAttribute("id",id);
    
    const h3= document.createElement('h3');
    h3.textContent=title;

    const price= document.createElement('h3');
    price.textContent=pret+' RON';
    price.setAttribute("class",'price');


    const bkg= document.createElement('img');
    bkg.setAttribute("src",imagine);


    const button =document.createElement('button');
    button.setAttribute("class",'buy');
    button.textContent='BUY NOW';

    const divTitleButton =document.createElement('div');
    divTitleButton.setAttribute("class",'divTitleButton');

    divTitleButton.appendChild(h3);
    divTitleButton.appendChild(price);
    divTitleButton.appendChild(button);

    article.appendChild(bkg);
    article.appendChild(divTitleButton);


    //APASAREA PE ARTICOL CA SA NE DUCA LA PRODUS//

    article.addEventListener('click', ()=>{
        //De fiecare data cand dam click pe un articol (care are title, id, price, details, imgPathDesktop)
        //o vrem sa ne salvam cumva id-ul articolului si sa il bagam 
        //in URL-ul din pagina produsului la care vom fi redirectionati.
        //Deci acum cand dam click pe articol, vom fi redirectionati spre el si in bara
        //vom avea id-ul lui salvat ca parametru cu numele de "creationId", imd dupa "?".
        location.replace('/specificProduct.html?creationId='+id);
    })

    return article;
}

function createProductsList(list){
    const productsDiv = document.querySelector('.products');
    for(let i=0; i<list.length;i++){
        // const item = Math.floor(Math.random()*chandeliersList.length);
        const titleProduct = list[i].title;
        const idItem= list[i].id;
        const price= list[i].price;
        const img= list[i].imgPathDesktop;
        const createdArticle = createElementProduct(idItem, titleProduct,img, price);
        productsDiv.appendChild(createdArticle);
    }
}

createProductsList(productsList);



//-----------------------------------------------------------------------------------------------//
//-----------------------------------------------------------------------------------------------//
//SEARCH SI FILTRARE//

const allItemList = localStorage.getItem('allItemsListFromStorage')
const allItemListParsed = JSON.parse(allItemList);
console.log(allItemListParsed);
//Am pus toata lista de produse aici, si am luat-o din local.storage (unde era salvata ca string)
//inca din documentul de initAllItems.js) si am transformat-o in obiect, ptc nu ne ajuta ca era string.


const input = document.querySelector('#textSearch');
input.addEventListener('keypress', function(e) {
    const valueSearch= input.value;
    if(e.key==='Enter'){
        // const filterListByTitleArray=[];
        const filterListByTitle = allItemListParsed.filter((item)=>{
            // let foundProduct=0;
            return item.title.toLowerCase().includes(valueSearch.toLowerCase())
       
        });
        // filterListByTitleArray.push(filterListByTitle);

        console.log(filterListByTitle);
        const filterListByTitleString = JSON.stringify(filterListByTitle);
        localStorage.setItem('filterListByTitleLocalStorage', filterListByTitleString);
        location.replace('filteredProducts.html');
    }
});

//Ne folosim de functiile de creare produs si de paginare, si pentru asta le aducem aici//

