

const products=[
    {
        id:21,
        price: '350',        
        title: 'Trade Winds Lisa Metal Pendant Light in Polished Nickel',
        details: 'This 1-Light Lisa Metal Pendant Light is from Trade Winds Lighting and comes in a Polished Nickel finish It measures 14" high x 10.5" long x10.5" wide. Dry Rated. Intended to be used for indoor locations. Bulbs not included. Made with Metal',
        imgPathDesktop: "SOURCES/CATEGORIES/pendants/pendant1.jpeg",
    },
    {
        id:22,
        price: '250',        
        title: 'Savoy House Alden 1-Light Pendant in Matte Black',
        details: 'Let the bold beauty of pure matte black enrich your home with the elegant Alden pendant light from Savoy House. Pendant light has a matte black metal shade, rod, canopy and chain 12.5" high x 18.25" wide Uses one standard size light bulb up to 60 watts Comes with two 9.5" rods and 10 feet of chain for a customizable hanging height Adaptable for sloped ceilings',
        imgPathDesktop: "SOURCES/CATEGORIES/pendants/pendant2.jpeg",
    },
    {
        id:23,
        price: '850',        
        title: 'Millennium 3000 Series 5-Light Linear Pendant in Vintage Gold',
        details: 'Bring your home traditional style with a twist! This Millennium Lighting five-light pendant from the 3000 Series has an open, eye-catching design and a bold vintage gold finish. Vintage gold finish Pendant light is 12” wide x 40” long with a minimum height of 56”; 12’ chain and 18”, 12” and 6” stems included to customize installation height; sloped ceiling compatible Uses five candelabra-style bulbs, up to 60 watts each (not included)',
        imgPathDesktop: "SOURCES/CATEGORIES/pendants/pendant3.jpeg",
    },
    {
        id:24,
        price: '620',        
        title: 'Minka Lavery Aureum Pendant Light in Matte White With Honey Gold',
        details: 'This pendant light from Minka Lavery is a part of the Aureum collection and comes in a matte white with honey gold finish. It measures 7" wide x 12" high. Uses one standard dimmable bulb up to 60 watts. Damp Rated. Can be used in humid environments like bathrooms or covered outdoor areas.',
        imgPathDesktop: "SOURCES/CATEGORIES/pendants/pendant4.jpeg",
    },
    {
        id:25,
        price: '860',        
        title: 'Maxim Coronet Pendant Light in Satin Brass',
        details: 'This pendant light from Maxim Lighting is a part of the Coronet collection and comes in a satin brass finish. It measures 12" wide x 13" high. Uses one candelabra bulb up to 60 watts. For indoor use.',
        imgPathDesktop: "SOURCES/CATEGORIES/pendants/pendant5.jpeg",
    },
    {
        id:26,
        price: '990',        
        title: 'Kichler Edmar 3-Light 16" Pendant Light in Black',
        details: 'This 3-light pendant light from Kichler is a part of the Edmar collection and comes in a black finish. It measures 16" wide x 17" high. Uses three standard bulbs up to 75W watts each. This light would look best in the dining room or kitchen. For indoor use.',
        imgPathDesktop: "SOURCES/CATEGORIES/pendants/pendant6.jpeg",
    },
    {
        id:27,
        price: '480',        
        title: 'Golden Orwell 9" Pendant Light in Aged Brass',
        details: 'This pendant light from Golden Lighting is a part of the Orwell collection and comes in aged brass finish. Light measures 10" wide x 9" high. Uses one standard bulb up to 100 watts. This light would look best in the kitchen. Damp Rated. Can be used in humid environments like bathrooms or covered outdoor areas.',
        imgPathDesktop: "SOURCES/CATEGORIES/pendants/pendant7.jpeg",
    },
    {
        id:28,
        price: '2100',        
        title: 'Maxim Lighting Polaris 23" 12-Light Pendant in Polished Chrome',
        details: 'This 12-light pendant from Maxim Lighting is a part of the Polaris collection and comes in polished chrome finish. Is rated for Dry locations Measures 25" long x 25" wide x 23" high Uses 12, 60-watt candelabra bulbs',
        imgPathDesktop: "SOURCES/CATEGORIES/pendants/pendant8.jpeg",
    },
    {
        id:29,
        price: '1290',        
        title: 'Maxim Lighting Bjorn 13.5" 1-Light Pendant in Black/Natural Wood',
        details: 'This 1-light pendant from Maxim Lighting is a part of the Bjorn collection and comes in black/natural wood finish. Is rated for Dry locations Measures 23.25" long x 23.25" wide x 13.5" high. Uses 1, 60-watt standard bulbs',
        imgPathDesktop: "SOURCES/CATEGORIES/pendants/pendant9.jpeg",
    },
    {
        id:30,
        price: '640',        
        title: 'Maxim Lighting Early Electric 5-Light 5-Light Multi-Light Pendant in Black / Antique Brass',
        details: 'Cords of Black fabric support metal sockets finished in a natural Antique Brass allow you to create unique and fun lighting. All except the single pendant are supplied with hangers that attach to the ceiling to allow you to swag each socket. There are a number of optional bulbs to choose from.',
        imgPathDesktop: "SOURCES/CATEGORIES/pendants/pendant10.jpeg",
    },
];






//------------------------------------------------------------------------------//

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


//APASAREA PE ARTICOL CA SA NE DUCA LA PRODUS----------------------------------------------//

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

