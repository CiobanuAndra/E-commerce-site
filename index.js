
//NAVIGATION BAR HIDDEN STANGA----------------------------------------------------------//

const aside = document.getElementsByClassName('navigation-bar');
const bkg = document.getElementsByClassName('bkg')[0];
// console.log(aside[0]);
// console.log(bkg);

//Hamburger button------------//
const hamburger = document.getElementById('hamburger');
// console.log(hamburger);
function appear() {
    aside[0].classList.remove('hidden');
    aside[0].classList.add('visibility');
    bkg.classList.remove('hidden');
    bkg.classList.add('visibility');
}
hamburger.addEventListener('click', appear);


//Functie pentru aparatia/dispariatia aside-ului (meniul lateral)//
const x = document.getElementsByClassName('navigation-header')[0];
// console.log(x);
function disappear() {
    aside[0].classList.remove('visibility');
    aside[0].classList.add('hidden');
    bkg.classList.remove('visibility');
    bkg.classList.add('hidden');
}
x.addEventListener('click', disappear);







//---------------------------------------------------------------------------------------------------//
//TO CART------------------------------------//
const cartButtoN = document.getElementsByClassName('carT')[0];
function cartFunction() {
    location.replace('cart.html');
}
cartButtoN.addEventListener('click', cartFunction);










//-------------------------------------------------------------------------------------//
//  APPEAR AND DISSAPPEAR PE BUTON SIGN IN/"Hello, User"-----------------------------//
const signIn = document.getElementsByClassName('login')[0];
const signInForm = document.getElementsByClassName('signIn')[0];
const myAccount= document.getElementsByClassName('myAccount')[0];

let signInText = signIn.children[1]; 

//Verificam daca avem un utilizator logat deja luand value din local Storage. Daca avem, facem ca 
//la fiecare reload de pag sau cand schimbam pag, sa ne pastreze acelasi text in loc de butonul Sign In 
let signInNameUserLoged = JSON.parse(localStorage.getItem('signInNameUserLoged'))
// console.log(signInNameUserLoged)

if(signInNameUserLoged){
    // console.log(typeof(signInNameUserLoged))
    signInText.textContent=signInNameUserLoged;
}











//-----------------------------------------------------------------------------------------------//
//-----------------------------------------------------------------------------------------------//
//SHOWING CART NUMBER AND CART PRODUCTS PAGE-------------------//
const cartNumber=document.getElementsByClassName('cartNumberHero')[0];
console.log(cartNumber);
const panels=document.getElementsByClassName('panels')[0];
console.log(panels);


const addButton= document.getElementsByClassName('addButton')[0];





// afterClickOnAddToCartMakeTotalOfProducts()

// const addButton=document.querySelector('.addButton');

if(signInNameUserLoged){
    signInText.textContent=signInNameUserLoged;
}
const textUserLoged=signInText.textContent
//Verificam daca e cnv logat, si daca nu e atunci vom afisa mesaj cum ca nu are in ce cos sa adauge produsele
if(textUserLoged.includes("Hello")){
    let nrTotalProduseDinCart = JSON.parse(localStorage.getItem('nrTotalProduseDinCart'))
    if(nrTotalProduseDinCart){
        cartNumber.textContent=nrTotalProduseDinCart;
    
        cartNumber.classList.remove('hidden');
        cartNumber.classList.add('visibility');

    }

    

}else{
    function addButtonPressNotLoged(){
        textAlert.textContent='Please Log into your account before adding products in the cart!'
        alertMessage.classList.remove('hidden');
        alertMessage.classList.add('visibility');
        setTimeout(function(){ alertMessage.classList.remove('visibility');
        alertMessage.classList.add('hidden')}, 2000)
    }
    if(addButton){
        addButton.addEventListener('click',addButtonPressNotLoged)

    }
}

















//--------------------------------------------------------------------------------------------//
//LOGING OUT FROM ACCOUNT-------------//
const buttonLogOut= myAccount.getElementsByClassName('account')[0].children[0].children[2];
// console.log(buttonLogOut)
function logOutUser(){
    let signInUserAfterLogOut=signInText.textContent='Sign in';
    localStorage.setItem('signInNameUserLoged', JSON.stringify(signInUserAfterLogOut));
    myAccount.classList.remove('visibility');
    myAccount.classList.add('hidden'); 
    //facem reload la pagina ptc altfel nu ni se da refresh la datele noastre si nu percepe browserul 
    //ca acum ca utilizatorul nu mai e logat, trebuie sa faca toggle la sectiunea de Sign In//
    location.reload();
}
buttonLogOut.addEventListener('click',logOutUser)








//--------------------------------------------------------------------------------------------//
//CONEXION BETWEEN SIGN IN AND CREATE ACCOUNT BUTTON-------------//
const createAccountButton = document.getElementsByClassName('createAccount')[0];
const logInForm = document.getElementsByClassName('logIn')[0];
// console.log(createAccountButton);
function toCreateAccount() {
    signInForm.classList.remove('visibility');
    signInForm.classList.add('hidden');
    logInForm.classList.remove('hidden');
    logInForm.classList.add('visibility');
}
createAccountButton.addEventListener('click', toCreateAccount);



//Make CREATE ACCOUNT dissappear-------------------------------------------------------------------//

//Prin Cancel button-------------------//
const cancelButton = document.getElementsByClassName('cancel')[0];
// console.log(cancelButton);
function dissappearLogInFormCancel() {
    if(logInForm.classList.contains("visibility")){
        logInForm.classList.remove('visibility');
        logInForm.classList.add('hidden');
        }
}
if(cancelButton){
    cancelButton.addEventListener('click',dissappearLogInFormCancel)
}


//Prin Sign In button-----------------//
function dissappearLogInFormSignInButton() {
   
    if(logInForm.classList.contains("visibility")){
        logInForm.classList.remove('visibility');
        logInForm.classList.add('hidden');
        signInForm.classList.remove('visibility');
        signInForm.classList.add('hidden');
        }
}
signIn.addEventListener('click',dissappearLogInFormSignInButton)



//---------------------------------------------------------------------------------------------------//
//LOG IN----------------------------------------------------------//

const mailInput= document.querySelector('#email1');
const userpasswordInput= document.querySelector('#password1');
const submitButton= document.querySelector('#submitButton1');
// console.log(mailInput);
 let mailTastat='';
 let parolaTastata='';

//Validari mail--------------------------------------------------//
function checkMailLastAsperandSymbolAndDot(){
    mailTastat= mailInput.value;  
    // console.log(mailTastat)
    if(mailTastat.length!==0){
        if(mailTastat.includes('.')===false||mailTastat.includes('@')===false){
            // console.log('contine')
            mailInput.style.border="5px solid #B22222";
        }
        else{
            mailInput.style.border="none";
        }
       
    }
    else{
        mailInput.style.border="none";
    }
    return mailTastat;
};
mailInput.addEventListener('blur',checkMailLastAsperandSymbolAndDot);



//Validari parola -> Litera Mica, Litera Mare si Numar-------------//
function checkLowerCaseAndCapsLockAndNumberLetter(){
    parolaTastata= userpasswordInput.value;  
    if(parolaTastata.length!==0){
        // userpasswordInput.style.border="none";
        // console.log('nimic')
        if(parolaTastata.search(/[a-z]/) < 0||parolaTastata.search(/[A-Z]/) < 0||parolaTastata.search(/[0-9]/) < 0){
            // console.log('nu contine')
            userpasswordInput.style.border="5px solid #B22222";
        }
        else{
            userpasswordInput.style.border="none";
        }
    }
    else{
        userpasswordInput.style.border="none";
    }
    return parolaTastata;

};
userpasswordInput.addEventListener('blur',checkLowerCaseAndCapsLockAndNumberLetter);





//---------------------------------------------------------------------------------------------------//
//CREATE ACCOUNT- Creerea contului------------------------------------//
//Preluare Inpututuri si Butoane//
let firstNameCreateAccount= document.querySelector('#firstName');
let lastNameCreateAccount= document.querySelector('#lastName');
let mailCreateAccount= document.querySelector('#email2');
let passwordCreateAccount= document.querySelector('#password2');
let confirmPassword= document.querySelector('#confirmPassword');

let submitButtonCreateAccount= document.querySelector('#submitButton2');
// var validator;

//Validari First Name, Last Name-----------------------------------//
function checkIfFirstNameExists(){
    let firtNameTyped=firstNameCreateAccount.value;
    if(firtNameTyped.length===0){
        firstNameCreateAccount.style.border="5px solid #B22222";
        // validator=1;

    } else{
        firstNameCreateAccount.style.border="none";
        // validator=0;

    }
    // return validator;
}
firstNameCreateAccount.addEventListener('blur',checkIfFirstNameExists);

function checkIfLastNameExists(){
    let lastNameTyped=lastNameCreateAccount.value;
    if(lastNameTyped.length===0){
        lastNameCreateAccount.style.border="5px solid #B22222";
        // validator=1;
    } else{
        lastNameCreateAccount.style.border="none";
        // validator=0;

    }
    // return validator;

}
lastNameCreateAccount.addEventListener('blur',checkIfLastNameExists);




//Validari mail--------------------------------------------------//
function checkMailLastAsperandSymbolAndDotCreateAccount(){
    let mailTastatCreateAccount= mailCreateAccount.value;  
    if(mailTastatCreateAccount.length!==0){
        if(mailTastatCreateAccount.includes('.')===false||mailTastatCreateAccount.includes('@')===false){
            mailCreateAccount.style.border="5px solid #B22222";
            // validator=1;
        }
        else{
            mailCreateAccount.style.border="none";
            // validator=0;

        }
    }
    else{
        mailCreateAccount.style.border="none";
        // validator=0;

    }   
    // console.log('mail'+validator)
    
    return mailTastatCreateAccount;

};
mailCreateAccount.addEventListener('blur',checkMailLastAsperandSymbolAndDotCreateAccount);
    
    

//Validari parola -> Litera Mica, Litera Mare si Numar-------------//
function checkLowerCaseAndCapsLockAndNumberLetterCreateAccount(){
    let parolaTastataCreateAccount= passwordCreateAccount.value;  
    if(parolaTastataCreateAccount.length!==0){
        if(parolaTastataCreateAccount.search(/[a-z]/) < 0||parolaTastataCreateAccount.search(/[A-Z]/) < 0||parolaTastataCreateAccount.search(/[0-9]/) < 0){
            passwordCreateAccount.style.border="5px solid #B22222";
            // validator=1;
        }
        else{
            passwordCreateAccount.style.border="none";
            // validator=0;

        }
    }
    else{
        passwordCreateAccount.style.border="none";
        // validator=0;
    }
    // console.log('Password'+validator);
    return parolaTastataCreateAccount;
};
passwordCreateAccount.addEventListener('blur',checkLowerCaseAndCapsLockAndNumberLetterCreateAccount);



    
//Validari Confirm Password ------------------------------------//
function checkPasswordEqualConfirmPassword(){
    let parolaTastataConfirmPassword= confirmPassword.value;  
    const parolaTastataCreateAccount= passwordCreateAccount.value;  
        if(parolaTastataConfirmPassword.length!==0){
            if(parolaTastataCreateAccount!==parolaTastataConfirmPassword){
                confirmPassword.style.border="5px solid #B22222";
                // validator=1;
            }else if (parolaTastataCreateAccount===parolaTastataConfirmPassword){
                confirmPassword.style.border="none";
                // validator=0;

            }
        }
        // console.log('Password'+validator)

        return parolaTastataConfirmPassword;
};
confirmPassword.addEventListener('blur',checkPasswordEqualConfirmPassword);



//-------------------------------------------------------------------------------------------------------------------------------------------//
//CREATE ACCOUNT- Submit si Local Storage-----------------------------------------------------------------------------//

//Verificam daca mai avem utilizatori inregistrati in baza noastra de date:            //
let usersCreatedAccountsFromLocalStorage = JSON.parse(localStorage.getItem('UsersCreatedAccounts'))

//--Daca nu avem utilizatori: Construire Obiect gol unde vor fi pusi utilizatorii noi,
if (!usersCreatedAccountsFromLocalStorage){
    var listUsersSupport=[
    ];
    //si Array gol pentru fiecare utilizator nou si datele lui//
    var objUserSupport={
        firstName:"",
        mail:"",
        password:"",
    };
    //Facem o copie pentru ambele pentru ca am avut cazuri in care:
    //--salvam utilizatori noi, cu date diferite fata de primul, se adaugau cei noi, dar toti aveau aceleasi date ca ultimul utilizator
    //introdus (Asta se intampla ptc valorile complexe (Array uri si Obiecte) pointeaza spre aceeasi referinta in memoria heap, nu e
    // ca la valori simple unde se face copie pentru constantele ce reprezinta stringuri, numere etc)
    var listUsers=Object.assign([],listUsersSupport);
    var objUser=Object.assign({},objUserSupport);
    console.log(objUser)
}

//--Daca avem utilizatori: Preluam datele din Local Storage din "UsersCreatedAccounts"//
else{
    var objUserSupport={
        firstName:"",
        mail:"",
        password:"",
    };
    var listUsers=usersCreatedAccountsFromLocalStorage;
    var objUser=Object.assign({},objUserSupport);
    // console.log(objUser)
}




//Creare cont nou si OBJECT pt utilizatorii noi-------------------------------//

//Preluare mesaj Alert//
const alertMessage= document.getElementsByClassName('alertMessage')[0];
console.log(alertMessage)
const textAlert=alertMessage.children[0]
console.log(textAlert)

function submitFormCreateAccount(e){
    e.preventDefault();
    let mailTastatCreateAccountValidat=checkMailLastAsperandSymbolAndDotCreateAccount();
    let parolaTastataCreateAccountValidata=checkLowerCaseAndCapsLockAndNumberLetterCreateAccount();
    let firstNameCreateAccountValidated=firstNameCreateAccount.value;
    let lastNameCreateAccountValodated=lastNameCreateAccount.value;
    let confirmPasswordValidated=checkPasswordEqualConfirmPassword();

    if (!mailTastatCreateAccountValidat||!parolaTastataCreateAccountValidata||!firstNameCreateAccountValidated||!confirmPasswordValidated||!lastNameCreateAccountValodated){
        // alert('Please complete all the inputs!')
        textAlert.textContent='Please complete all the inputs!'
        alertMessage.classList.remove('hidden');
        alertMessage.classList.add('visibility');
        setTimeout(function(){ alertMessage.classList.remove('visibility');
        alertMessage.classList.add('hidden')}, 2000)

        return;
    }
    objUser.firstName=firstNameCreateAccountValidated;
    objUser.mail=mailTastatCreateAccountValidat;
    objUser.password=parolaTastataCreateAccountValidata;
    let objUser2=Object.assign({},objUser);

    listUsers.push(objUser2);
    console.log(listUsers)
    console.log(objUser)
    localStorage.setItem('UsersCreatedAccounts', JSON.stringify(listUsers));
    
    logInForm.classList.remove('visibility');
    logInForm.classList.add('hidden');
    // alert("Ati fost inregistrat in baza de date")
    textAlert.textContent='You have been registered!';
    alertMessage.classList.remove('hidden')
    alertMessage.classList.add('visibility')
    setTimeout(function(){ alertMessage.classList.remove('visibility');
    alertMessage.classList.add('hidden');
    location.reload()}, 2000)
}
submitButtonCreateAccount.addEventListener('click',submitFormCreateAccount);








//X BUTTON FROM ALERT MESSAGE--------------------------------------------------//
const xButton=alertMessage.children[1]
console.log(xButton)
function closeALert(){
    alertMessage.classList.remove('visibility');
    alertMessage.classList.add('hidden');
}
xButton.addEventListener('click',closeALert);



function closeAlertAfterLogInSucces(){
    location.reload()
}
xButton.addEventListener('click',closeAlertAfterLogInSucces);




//---------------------------------------------------------------------------------------------------//
//LOG IN-SUBMIT BUTTON si Local Storage-----------------------------------------------//

function logIn(e){
    //Preluare din Local Storage a listei de utilizatori (UsersCreatedAccounts)//
    const usersCreatedAccountsFromLocalStorage = JSON.parse(localStorage.getItem('UsersCreatedAccounts'))
    e.preventDefault();
    if(usersCreatedAccountsFromLocalStorage!==null){
        const foundUser=usersCreatedAccountsFromLocalStorage.find((user)=>{
            return user.mail===mailTastat && user.password===parolaTastata;
        });
    
        //Verificarea existentei contului in Local Storage (UsersCreatedAccounts)//
        if(foundUser){
            console.log('Am logat')
            // alert ('Ai fost logat')
            //Inlocuire text "Sign In" cu Nume Utilizator care are cont facut//
            signInText.textContent="Hello, ".concat(foundUser.firstName);
            let signInNameUser=signInText.textContent;
            //Salvarea numelui utiliz. logat in Local Storage---------------//
            localStorage.setItem('signInNameUserLoged', JSON.stringify(signInNameUser));
            //Inchidere fereastra de Sign In--------------------------------//
            signInForm.classList.remove('visibility');
            signInForm.classList.add('hidden');
            //Incercari pentru a face mai intai RELOAD la pag (astfel incat sa ne apara toggle-ul bun, cel cu log out, sub iconita de User) si apoi sa afisam mesajul de 'Login Successul!' 
            // setTimeout(location.reload(),"3000")
            // setTimeout(alert("3 sec"),"3000")
            // alertMessage.classList.remove('hidden');
            // alertMessage.classList.add('visibility');
            textAlert.textContent='Login Successul!';
            alertMessage.classList.remove('hidden')
            alertMessage.classList.add('visibility')
            setTimeout(function(){ alertMessage.classList.remove('visibility');
            alertMessage.classList.add('hidden');location.reload()}, 2000)
            // alertMessage.classList.add('visibility');
    
        }else{
            // alert ('Nu si introdus datele bune')
            textAlert.textContent='An error has occurred. Please check the inputs and try again.'
            signInForm.classList.remove('visibility');
            signInForm.classList.add('hidden');
            alertMessage.classList.remove('hidden');
            alertMessage.classList.add('visibility');
            setTimeout(function(){ alertMessage.classList.remove('visibility');
            alertMessage.classList.add('hidden')}, 2000)
        }
    }else{
        textAlert.textContent='An error has occurred. Please check the inputs and try again.'
        signInForm.classList.remove('visibility');
        signInForm.classList.add('hidden');
        alertMessage.classList.remove('hidden');
        alertMessage.classList.add('visibility');
        setTimeout(function(){ alertMessage.classList.remove('visibility');
        alertMessage.classList.add('hidden')}, 2000)

    }
    
    
}
submitButton.addEventListener('click',logIn)












//APPEAR AND DISSAPPEAR PE BUTON SIGN IN/"Hello, User" (care include si scenariul de dupa ce s-a logat si delogat cineva si s-a resetat
// valoarea din Local Storage pt "signInNameUserLoged-----------------------------------------------------------------------------------//
 

//Daca avem utilizator logat (deci valoarea din "signInNameUserLoged" din Local Storage nu e zero), nu mai 
//punem Dissapear si Appear pe aside-ul de Log in. Acesta devine inaccesibil si alocam acest action de 
//Appear/Dissapear pe aside-ul care contine My Account (cu butoanele Wish List, Account si Log Out)//
function appearAndDissapearMyAccount() {
    if(signInForm.classList.contains("hidden")){
        signInForm.classList.remove('hidden');
        signInForm.classList.add('visibility');
        return signInForm;
    }else if(signInForm.classList.contains("visibility")){
        signInForm.classList.remove('visibility');
        signInForm.classList.add('hidden');  
    }
}

//Iar daca nu e nimeni logat, ii alocam aside-ului de Log In acest appear/dissapear
function appearAndDissapearLogIn() {     
    if(myAccount.classList.contains("hidden")){
        myAccount.classList.remove('hidden');
        myAccount.classList.add('visibility');
        return;
    }
    if(myAccount.classList.contains("visibility")){
        myAccount.classList.remove('visibility');
        myAccount.classList.add('hidden');
    }
}

if(typeof signInNameUserLoged ==='string'&& signInNameUserLoged.includes("Hello")){
    signIn.addEventListener('click',appearAndDissapearLogIn)
}else{
    signIn.addEventListener('click',appearAndDissapearMyAccount)
}






//---------------------------------------------------------------------------------------------------//
//BUTOANE PAGINI DIN HERO------------------------------------//

const listProducts= document.getElementsByClassName('listProduct')[0];
const listProductChildren=listProducts.children;
const linksToPages= ['/bath.html','/ceiling.html','/chandeliers.html', '/pendants.html','/wall.html','/lamps.html','/outdoor.html','/sales.html','/brands.html'];
const ancore = listProducts.getElementsByTagName('a');

function selectEachButton (lista){
    for(let i=0; i<lista.length; i++){
        const redirectToProductPageButton =ancore[i];
        redirectToProductPageButton.setAttribute('href', linksToPages[i]);
        redirectToProductPageButton.style.textDecoration="none";
        redirectToProductPageButton.style.color="white"
    
    };

};
selectEachButton (listProductChildren);





//-----------------------------------------------------------------------------------------//
//BUTON SPRE HOME PAGE (LOGO-UL)-----------------------------//

const heroHeader= document.getElementsByClassName('element2')[0];
const ancoraLogo = heroHeader.getElementsByTagName('a')[0];
ancoraLogo.setAttribute('href', 'mainPage.html');




//---------------------------------------------------------------------------------------//
//BUTOANE PAGINI DIN MENIU LATERAL//

const lateralMenu= document.getElementById('root');
const lateralAside= lateralMenu.getElementsByTagName('aside')[0];
const navigationBody= lateralAside.getElementsByClassName('navigation-body')[0];
const navigationBodyListButtons= navigationBody.getElementsByTagName('ul')[0];

function selectEachButton2 (lista){
    for(let i=0; i<lista.children.length; i++){
        const li =lista.children[i];
        li.addEventListener('click', ()=>{
            location.replace(linksToPages[i]);
        });

    };
};
selectEachButton2(navigationBodyListButtons);









//-----------------------------------------------------------------------------------------------//
//-----------------------------------------------------------------------//
//SEARCH SI FILTRARE//

const allItemList = localStorage.getItem('allItemsListFromStorage')
const allItemListParsed = JSON.parse(allItemList);
//Am pus toata lista de produse aici, si am luat-o din local.storage (unde era salvata ca string)
//inca din documentul de initAllItems.js) si am transformat-o in obiect, ptc nu ne ajuta ca era string.
//Apasare ENTER de la tastatura//
const input = document.querySelector('#textSearch');
input.addEventListener('keypress', function(e) {
    const valueSearch= input.value;
    if(e.key==='Enter'){
        const filterListByTitle = allItemListParsed.filter((item)=>{
            return item.title.toLowerCase().includes(valueSearch.toLowerCase())
       
        });
    const filterListByTitleString = JSON.stringify(filterListByTitle);
    localStorage.setItem('filterListByTitleLocalStorage', filterListByTitleString);
    location.replace('filteredProducts.html');
    }
});










//-----------------------------------------------------------------------------------------------//
//BUTOANE FOOTER--------------------------------------------------------//

const logo= document.querySelector('.logo-footer')
logo.children[0].addEventListener('click', ()=>{
    location.replace('mainPage.html');
})
logo.children[1].addEventListener('click', ()=>{
    location.replace('mainPage.html');
})

const footerButtonsNav = document.getElementsByTagName('nav')[1];
const footerButtonsList =footerButtonsNav.getElementsByTagName('ul')[0]
const homeButton =footerButtonsList.children[0];
homeButton.addEventListener('click', ()=>{
    location.replace('mainPage.html');
})

const shopButton =footerButtonsList.children[1];
const cartButton =footerButtonsList.children[2];
cartButton.addEventListener('click', ()=>{
    location.replace('cart.html');
})



