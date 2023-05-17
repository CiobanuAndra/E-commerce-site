const products=[
    {
        id:11,
        price: '3700',
        title: 'Kichler Riviera 6-Light Linear Chandelier in Olde Bronze',
        details: 'Meet the chandelier equivalent of Chanel No. 5: the Kichler Riviera Linear chandelier, featuring a playful design inspired by antique perfume bottles. Olde bronze finish; clear ribbed glass diffusers resembling vintage perfume bottles Chandelier is 15.5" high x 12.25" wide x 35.5" long; overall height of 98” Uses six standard size bulbs, up to 75 watts each (not included)',
        imgPathDesktop: "SOURCES/CATEGORIES/chandeliers/chandelier1.jpg",
    },
    {
        id:12,
        price: '4500',
        title: 'Troy Allisio 6-Light Chandelier in Carbide Black and Black Chrome',
        details: 'This 6-light chandelier from Troy is a part of the Allisio collection and comes in carbide black and black chrome finish. It measures 22" wide x 3" high. Uses six candelabra bulbs up to 60 watts each. Damp Rated. Can be used in humid environments like bathrooms or covered outdoor areas. Includes a 1 Year Limited Manufacturer warranty.',
        imgPathDesktop: "SOURCES/CATEGORIES/chandeliers/chandelier2.jpg",
    },
    {
        id:13,
        price: '3200',
        title: 'Minka Lavery West Liberty Linear Chandelier in Olympus Gold',
        details: 'If you like things pretty and feminine but far from predictable, you’ll love the West Liberty linear chandelier from Minka Lavery. Olympus Gold finish with crystal accents 23.5" high x 15.75" wide x 36" long Uses six incandescent candelabra bulbs, up to 60 watts each (not included); dimmable Includes 72" adjustable chain; adaptable for sloped ceiling mounting',
        imgPathDesktop: "SOURCES/CATEGORIES/chandeliers/chandelier3.jpg",
    },
    {
        id:14,
        price: '2600',
        title: 'Savoy House Lyrique 6-Light Chandelier in Bronze with Brass Accents',
        details: 'Adjustable arms provide a fun chance to customize your lighting look with the Lyrique 6-light chandelier from Savoy House. Bronze finish with brass accents Chandelier is 7” high x 21.75” wide x 21.75” long; four 12” downrods and one 6” downrod included to customize installation height; sloped ceiling compatible Uses six standard size bulbs; up to 60 watts each (not included) Adjustable arms allow for customized looks',
        imgPathDesktop: "SOURCES/CATEGORIES/chandeliers/chandelier4.jpg",
    },
    {
        id:15,
        price: '5500',        
        title: 'Empire Chandelier Multi-lights',
        details: 'The Empire Chandelier is inspired by the stunning architecture of the Empire State Building. It’s a masterpiece chandelier with an extravagant shape, capable of transforming every space into a stunning scenario. Due to its vigorous personality, it creates an exclusive atmosphere.',
        imgPathDesktop: "SOURCES/CATEGORIES/chandeliers/chandelier5.jpg",
    },
    {
        id:16,
        price: '4200',        
        title: 'Quorum Celeste 8-Light Globe Chandelier in Zinc',
        details: 'This 8-light globe chandelier from Quorum International is a part of the Celeste collection and comes in a zinc finish. Chandelier measures 33" wide x 34" high. Uses eight candelabra light bulbs up to 60 watts each. Unique look combines the grey zinc finish with a spherical atomic shape.',
        imgPathDesktop: "SOURCES/CATEGORIES/chandeliers/chandelier6.jpg",
    },
    {
        id:17,
        price: '2750',        
        title: 'George Kovacs Swing Time 30" Pendant Light in Brushed Silver',
        details: 'This pendant light from George Kovacs is a part of the Swing Time collection and comes in a brushed silver finish. It measures 30" wide x 26" high. Uses an integrated LED. For indoor use.',
        imgPathDesktop: "SOURCES/CATEGORIES/chandeliers/chandelier7.jpg",
    },
    {
        id:18,
        price: '1350',        
        title: 'Meridian Daphne 5-Light Chandelier in Natural Brass',
        details: 'The chic Daphne chandelier combines retro style with a customized light fixture; The hanging cords are adjustable, allowing you to create your own unique look. Natural brass finish with white glass orbs. Each Orb height can be adjusted to fit your room and style. Chandelier is 26" wide. Height can vary from 18 to 137. Uses five candelabra light bulbs up to 60 watts each (not included).',
        imgPathDesktop: "SOURCES/CATEGORIES/chandeliers/chandelier8.jpg",
    },
    {
        id:19,
        price: '1150',        
        title: 'Meridian Cheryl Orb Chandelier in Natural Brass',
        details: 'Meridian crafted a chandelier that you can make your own: the hanging cords are adjustable, allowing you to create your own unique look. The Cheryl chandelier features three hanging orbs and" high style look for a great price. Natural Brass finish and white opal glass shades. Chandelier is 15" wide by 7 tall. Can be hung from 7 to 127 from the ceiling. Uses three candelabra light bulbs up to 60 watts each (not included).',
        imgPathDesktop: "SOURCES/CATEGORIES/chandeliers/chandelier9.jpg",
    },
    {
        id:20,
        price: '2180',        
        title: 'Hudson Valley Easton 4-Light 14" Pendant Light in Aged Brass',
        details: 'This 4-light pendant light from Hudson Valley is a part of the Easton collection comes in aged brass finish. Light measures 14" high. Includes a stem. Uses four candelabra bulbs up to 60 watts each. This light would look best in the dining room or kitchen. Damp Rated. Can be used in humid environments like bathrooms or covered outdoor areas. Includes a 1 Year Limited Manufacturer Warranty.',
        imgPathDesktop: "SOURCES/CATEGORIES/chandeliers/chandelier10.jpg",
    },
    
    

];

const productsString = JSON.stringify(products);
localStorage.setItem('productsListInsideStorage', productsString);
const productsStringFromStorage= localStorage.getItem('productsListInsideStorage');
const productsList=JSON.parse(productsStringFromStorage);




//CREAREA FIECARUI ARTICOL DIN CATEGORIE, FARA BAGAREA ACESTORA IN CATEGORIE SI FARA CREAREA CATEGORIEI---------------------------------//
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
    //APASAREA PE ARTICOL CA SA NE DUCA LA PRODUS---------------------------------//
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



const maxLenghtPerPages=8;

//CREAREA FIECAREI PAGINI DE PRODUSE SI AFISAREA ITEMELOR IN FUNCTIE DE NR PAGINII PE CARE S-A APASAT---------------------------//
function createProductsList(indexStart,list){
    const productsDiv = document.querySelector('.products');
    productsDiv.innerHTML='';        //Aici golim lista noastra de produse.//
    //Daca nu punem linia asta de cod, de fiecare data cand apasam pe nr unei pagini,//
    //o sa ne adauge in continuare itemele (e ca si cum nu trecem la o pagina noua)//
    for(let i=indexStart; i<indexStart+maxLenghtPerPages&& i<list.length;i++){
        // const item = Math.floor(Math.random()*chandeliersList.length);
        const titleProduct = list[i].title;
        const idItem= list[i].id;
        const price= list[i].price;
        const img= list[i].imgPathDesktop;
        const createdArticle = createElementProduct(idItem, titleProduct,img, price);
        productsDiv.appendChild(createdArticle);
    }
}



//CREAREA NUMERELOR PAGINILOR SI ASCULTAREA CLICK-ULUI PE ELE---------------------------//
function createPages(list){
    const container= document.querySelector('.pagesNumbers');
    const ul= document.createElement('ul');
    const pagesNumber = Math.ceil(list.length/maxLenghtPerPages);

    for(let i=0;i<pagesNumber; i++){
        const li=document.createElement('li');
        li.textContent=i + 1;
        ul.appendChild(li);
    }
    ul.addEventListener('click',(ev)=>{
        const curentPageNumber= ev.target.textContent;
        console.log(curentPageNumber);
        if(curentPageNumber.length===1){   //Fara acest if, cand apasam intre li-uri (adiac doar pe continutul ul-ului) n-o sa ne afiseze niciuna din pagini.
            const curentPageNumberParse= parseInt(curentPageNumber);
            const startIndex=(curentPageNumberParse-1)*maxLenghtPerPages;
            createProductsList(startIndex,list);
        }

    });
    container.appendChild(ul);
}

createPages(productsList);
createProductsList(0,productsList);




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

