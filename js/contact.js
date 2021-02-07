

function checkName() {
    var name = document.getElementById("name").value;
   
        if(/^[А-я]+((\-\)?([А-я])+))?$/i.test(name) == true){}
    
    else if(/^[а-я]+((\s)?([а-я])(?!(?:.* ))+)*$/.test(name) == true){
     //if(/^[а-яё]{2}+$/i.test(name) == true){
        //if(/^(?! )(?!.* $)(?!(?:.* ){2}).*$/i.test(name) == true){
         
    }
    else {
    document.getElementById("error_name").style.display='block'
    }
    if(name == ""){
        document.getElementById("error_name").style.display='none'
    }
}

function checkEmail(){
    var name = document.getElementById("email").value;
    
    if(/^[0-9a-z_-]+@[0-9a-z_-]+.[a-z]+\.[a-z]{2,5}$/i.test(name) == true){
        
    }
    else{
        document.getElementById("error_mail").style.display='block'
    }
     if(name.includes('@') == false){
        document.getElementById("error_mail").style.display='block'
    }

    if(name == ""){
        document.getElementById("error_mail").style.display='none'
    }
}
function checkPhone(){
    var phone = document.getElementById("phone").value;
    var phoneStr = phone.toString();

    let regex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;

    if(regex.test(phone) == true) {

    }
    else{
        document.getElementById("error_phone").style.display='block'
    }
    if( phoneStr.length < 11){
        document.getElementById("error_phone").style.display='block'
    }
    if(phone == ""){
        document.getElementById("error_phone").style.display='none'
    }
}

function no_error_email(){
    document.getElementById("error_mail").style.display='none'
    var str = document.getElementById("email").value;
    
}
function no_error_name(){
    document.getElementById("error_name").style.display='none'
}
function no_error_phone(){
    document.getElementById("error_phone").style.display='none'
    var str = document.getElementById("phone").value;
    
}



