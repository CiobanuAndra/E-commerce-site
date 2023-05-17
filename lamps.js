const products=[
    {
        id:42,
        price: '1400',        
        title: 'Hudson Valley Piton Table Lamp in Aged Brass and Soft Black',
        details: 'This table lamp from Hudson Valley is a part of the Piton collection comes in aged brass and soft black finish. This light measures 6" wide x 22" high. This light uses one standard bulb. For indoor use. This light includes a 1 Year Limited Manufacturer Warranty.',
        imgPathDesktop: "SOURCES/CATEGORIES/lamps/lamp1.jpg",
    },
    {
        id:43,
        price: '1500',        
        title: 'Quoizel Indus 2-Light 23" Table Lamp in Vintage Bronze',
        details: 'It is 2-light table lamp from Quoizel is a part of the Indus collection and comes in a vintage bronze finish. Light measures 16" wide x 23" high. Uses two standard bulbs up to 60 watts each. This light would look best in a bedroom. Special features include glass color in tiffany lighting products vary in color. no two pieces are identical. For indoor use.',
        imgPathDesktop: "SOURCES/CATEGORIES/lamps/lamp2.jpg",
    },
    {
        id:44,
        price: '450',        
        title: 'George Kovacs Simple Table Lamp in Black and Gold',
        details: 'This table lamp from George Kovacs is a part of the Simple collection and comes in a black and gold finish. It measures 9" long x 9" wide x 13" high. Includes one standard bulb. For indoor use.',
        imgPathDesktop: "SOURCES/CATEGORIES/lamps/lamp3.jpg",
    },
    {
        id:45,
        price: '2000',        
        title: 'Z-Lite Soriano 2-Light Floor Lamp Light In Matte Black With Brushed Nickel',
        details: 'This 2-Light Floor Lamp Light From Z-Lite Is A Part Of The Soriano Collection And Comes In A Matte Black With Brushed Nickel Finish. It Measures 56" High X 12" Long X 28" Wide. This Light Uses 2 Medium Bulb(S). Dry Rated. Can Be Used In Dry Environments Like Living Rooms Or Bedrooms.',
        imgPathDesktop: "SOURCES/CATEGORIES/lamps/lamp4.jpg",
    },
    {
        id:46,
        price: '1850',        
        title: 'Visual Comfort Studio Dean Floor Lamp in Burnished Brass by Ellen Degeneres',
        details: 'This floor lamp by Ellen Degeneres for Visual Comfort Studio is a part of the Dean collection and comes in a burnished brass finish. It measures 20" long x 16" wide x 64" high. This light includes one standard bulb. For indoor use.',
        imgPathDesktop: "SOURCES/CATEGORIES/lamps/lamp5.jpg",
    },
    {
        id:47,
        price: '2120',        
        title: 'Uttermost Rondure 72" 3-Light Sphere Floor Lamp in Dark Oil Rubbed Bronze',
        details: 'Metal Armillary Sphere Finished In A Dark Oil Rubbed Bronze And French Gold Leaf Sitting On Top Of A Sleek Tapered Base. Three 60 Watt BT58,Antique Style Bulbs Included. For indoor use, only one lightning bulb.',
        imgPathDesktop: "SOURCES/CATEGORIES/lamps/lamp6.jpg",
    },
    {
        id:48,
        price: '3750',        
        title: 'Hudson Valley Montague Floor Lamp in Aged Brass',
        details: 'This floor lamp from Hudson Valley is a part of the Montague collection comes in aged brass finish. This light measures 34" high. This light uses one standard bulb. Damp rated. Light can be used in humid environments like bathrooms or covered outdoor areas. This light includes a 1 Year Limited Manufacturer Warranty.',
        imgPathDesktop: "SOURCES/CATEGORIES/lamps/lamp8.jpg",
    },
    {
        id:49,
        price: '810',        
        title: 'Visual Comfort Studio Joan Desk Lamp in Midnight Black And Burnished Brass by Ellen Degeneres',
        details: 'This desk lamp by Ellen Degeneres for Visual Comfort Studio is a part of the Joan collection and comes in a midnight black and burnished brass finish. It measures 9" long x 7" wide x 25" high. This light includes one standard bulb. For indoor use.',
        imgPathDesktop: "SOURCES/CATEGORIES/lamps/lamp9.jpg",
    },
    {
        id:50,
        price: '480',        
        title: 'Uttermost Felice 18" Accent Lamp in Distressed Oak Charcoal',
        details: 'Intricately Shaped Ceramic,Finished In A Heavily Distressed Dark Charcoal With A Metallic Silver Undertone,Accented With Polished Nickel Plated Details. The Tapered Round Hardback Shade Is A Light Gray Linen Fabric With Natural Slubbing.For indoor use.This light includes one standard bulb.',
        imgPathDesktop: "SOURCES/CATEGORIES/lamps/lamp10.jpg",
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

