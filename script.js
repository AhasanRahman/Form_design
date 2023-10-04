const img = document.getElementById("img");
const image_input = document.querySelector("#image_input");


image_input.addEventListener("change", () => {
    const storImg = imgValidation(image_input.files[0]);
    if (storImg) {
        img.src = URL.createObjectURL(storImg);
    }
});

const pic=  document.getElementById("pic")

const imgValidation = (img) => {
    if (img.size < 102400 ) {
       pic.innerText = "";
        if (img.type === 'image/jpg'||img.type === 'image/png') {
            pic.innerText = "";
            return img;
        } else {
            // console.log('type not metch');
            pic.innerText = "file type not match ";
        }
    } else {
        // console.log('big size');
        pic.innerText = "file size over  ";
    }

    return false;
}


// name
let aname = document.getElementById("name");

const handleSubmit = (e) => {

    e.preventDefault();

    const nameReturn = namefunction();
    const ageReturn = handleage();
    const emailReturn = handleemail();
    const contactReturn = handlecontact();
    const genderReturn = radioValidation(radio, ptag);
    const languageReturn = checkboxValidation(checkbox, pcheck);
    const hobbyReturn = hobbyValidation(check,phobby);
    const dateReturn = dateValidation(date,datefield);
    // const departmentReturn = handledepartment();
 
}
const namefunction = () => {
    if (aname.value) {
        if (aname.value.length > 3) {
            aname.style.border = "";
            document.getElementById("nfield").innerText = "";
            return true;
        }
    }
    else {
        aname.style.border = '2px solid red';
        nfield.style.color = 'red'
        document.getElementById("nfield").innerText = "  Enter valid name";

        return false;
    }
}

// age
const ag = document.getElementById("age");

function handlecontact() {

    // let x = document.myform.age.value;

    if (Number(ag.value) >= 18) {

        age.style.border = "";
        document.getElementById("agefield").innerText = "";
        return true;
    } else {

        age.style.border = '2px solid red';
        agefield.style.color = 'red'
        document.getElementById("agefield").innerText = " Enter age above 18";
        return false;

    }

}


// contact
const phone = document.getElementById("phone");

function handleage() {

    // let x = document.myform.age.value;

    if (Number(phone.value) > 0) {

        phone.style.border = "";
        document.getElementById("phonefield").innerText = "";
        return true;
    } else {


        phone.style.border = '2px solid red';
        phonefield.style.color = 'red'
        document.getElementById("phonefield").innerText = "  Enter valid number";
        return false;

    }

}

 //email
const mail = document.getElementById("email");
function handleemail() {

    let x = document.registration.email.value;
    let atposition = x.indexOf("@");
    let dotposition = x.lastIndexOf(".");

    if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= x.length) {

        
        email.style.border = '2px solid red';
        mailfield.style.color = 'red'
        document.getElementById("mailfield").innerText = "   Enter valid email";
        return false;
    }
    email.style.border = "";
    document.getElementById("mailfield").innerText = "";
    return true;
}

// gender
const radio = document.getElementsByClassName("radio");
const ptag = document.getElementById("ptag");

const radioValidation = (radio, ptag) => {
    ptag.innerText = "";
    
    if (radio[0].checked || radio[1].checked || radio[2].checked) {
        return true;
    } else {
        ptag.innerText = "Gender not select. ";
        ptag.style.color = 'red'
   
        return false;
    }
};

// language

const checkbox = document.getElementsByClassName("checkbox");
const pcheck = document.getElementById("pcheck");

const checkboxValidation = (checkbox, pcheck) => {
    pcheck.innerText="";

    if(checkbox[0].checked || checkbox[1].checked || checkbox[2].checked || checkbox[3].checked || checkbox[4].checked){
        return true
    }
    else{
        pcheck.innerText ="language not select";
        pcheck.style.color = 'red'
        return false;
    }

}

// hobby
 
const check = document.getElementsByClassName("check");
const phobby   = document.getElementById("phobby");

const hobbyValidation = (check,phobby ) => {
    phobby.innerText = "";
    
    if (check[0].checked || check[1].checked || check[2].checked ||check[3].checked ) {
        return true;
    } else {
        phobby.innerText = "Hobbies not select. ";
        phobby.style.color = 'red'
   
        return false;
    }
};

// date
 