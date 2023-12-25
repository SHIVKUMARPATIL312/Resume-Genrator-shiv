
let addNewWorkExperience =()=>{
    
    let shiv=document.createElement('textarea')
    shiv.classList.add('form-control')
    shiv.classList.add('weField')
    shiv.classList.add("mt-2")
    shiv.setAttribute("rows",3)
    shiv.setAttribute("placeholder", "enter hear..........")


    let weob=document.getElementById("we")
    let weaddbutton=document.getElementById('weAddButton')
    weaddbutton.classList.add("btn")
    weaddbutton.classList.add('btn-primary')
    weob.insertBefore(shiv, weaddbutton)

}

let addNewEducationField=()=>{

    let newNode=document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('eqField')
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows",3)
    newNode.setAttribute("placeholder", "enter hear..........")


    let weob=document.getElementById("aq")
    let weaddbutton=document.getElementById('eqAddButton')
    weaddbutton.classList.add("btn")
    weaddbutton.classList.add('btn-primary')
    weob.insertBefore(newNode, weaddbutton)
}

//genrating cv
function genrateCV(){
    
    let nameField=document.getElementById('nameField').value;
    let namet1=document.getElementById("name")
    let namet2=document.getElementById("namet2")
    namet1.innerHTML=nameField
    namet2.innerHTML=nameField

    let contactfeild=document.getElementById('contactfeild').value;
    let contact=document.getElementById("contact")
    contact.innerHTML=contactfeild

    let addFeild=document.getElementById('addFeild').value;
    let City=document.getElementById("City")
    City.innerHTML=addFeild


    let InstagramField=document.getElementById('InstagramField').value;
    let techno=document.getElementById("techno")
    techno.innerHTML=InstagramField

    let LinkedLink=document.getElementById('LinkedLink').value;
    let facebook=document.getElementById("facebook")
    facebook.innerHTML=LinkedLink

    let Whatsapp=document.getElementById('Whatsapp').value;
    let techMahendra=document.getElementById("techMahendra")
    techMahendra.innerHTML=Whatsapp



    //it for for Object
    let Obj=document.getElementById('ObjFeild').value;
    let ObjectT2=document.getElementById("ObjectT2")
    ObjectT2.innerHTML=Obj





//   here we are going to work for work Experience
  let Work=document.getElementsByClassName("weField")
  let str=""
    

  for(let s of Work){
    str=str+`<li> ${s.value}</li>`;
  }

 document.getElementById("Wokrexperiset2").innerHTML=str



//lets work for getting educational qualification
 let education=document.getElementsByClassName("weField")
  let eight=""
    

  for(let s of education){
    eight=eight+`<li> ${s.value}</li>`;
  }

 document.getElementById("educationt2").innerHTML=eight


 //image
 let file=document.getElementById("photo").files[0]

 let reader=new FileReader();
reader.readAsDataURL(file);
reader.onloadend=function(){
    let file2=document.getElementById("image2").src=reader.result;

}

 document.getElementById("cv-form").style.display="none";
 document.getElementById("cv-template").style.display="block";
}

function printCV(){
    window.print();
}

