const img = document.getElementById("img");
const image_input = document.querySelector("#image_input");
const radio = document.getElementsByClassName("radio");
const ptag = document.getElementById("ptag");

image_input.addEventListener("change", () => {
    img.src = URL.createObjectURL(image_input.files[0]);
    console.log(img.src)
});

// name
let aname =document.getElementById("name");

const handleSubmit = (e) =>{

    e.preventDefault();

    const nameReturn = namefunction();
    const ageReturn = handleage();
    const emailReturn = handleemail();
    const contactReturn = handlecontact();
    const genderReturn = radioValidation(radio,ptag);
    // const departmentReturn = handledepartment();

    // if(nameReturn){
    //     alert("Form Submit")
    // }
}
const namefunction = () => {
    if (aname.value){
        if(aname.value.length > 3 ){
            aname.style.border ="";
            document.getElementById("nfield").innerText ="";
            return true;
        }
    } 
    else {
        aname.style.border = '2px solid red';
        document.getElementById("nfield").innerText = "--plz enter valid name";

       return false;
    }
}

// age
const ag = document.getElementById("age");

function handlecontact() {

    // let x = document.myform.age.value;

    if (Number(ag.value) >= 18  ) {

        ag.style.border ="";
        document.getElementById("agefield").innerText = "";
        return true;
    } else {

        ag.style.border = '2px solid red';
        document.getElementById("agefield").innerText = "--plz enter above 18";
        return false;

    }

}


// contact
const phone = document.getElementById("phone");

function handleage() {

    // let x = document.myform.age.value;

    if (Number(phone.value) > 0  ) {

        phone.style.border ="";
        document.getElementById("phonefield").innerText = "";
        return true;
    } else {

       
        phone.style.border = '2px solid red';
        document.getElementById("phonefield").innerText = "--plz enter valid no";
        return false;

    }

}

// email

const mail = document.getElementById("email");
function handleemail()  {
    if (mail.value)
        {
            return true;
        }
    
    else {
        mail.style.border = '2px solid red';
        document.getElementById("mailfield").innerText = "--plz enter valid mail";

       return false;
    }
}

// select
         
//  const department = document.getElementById('select'); // or in jQuery use: select = this;
// if (select.value) {
//   // value is set to a valid option, so submit form
//   return true;
// }
// return false;
           
// gender


const radioValidation = (radio, ptag) => {
    ptag.innerText = "";
    // document.getElementById("radioall").style.border = "";
  
    if (radio[0].checked || radio[1].checked || radio[2].checked) {
      return true;
    } else {
      ptag.innerText = "Gender not Checked. ";
      ptag.style.color=''
    //   document.getElementById("radioall").style.border = "5px solid red";
      return false;
    }
  };