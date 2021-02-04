function validate(){
    var unam=document.getElementById("uname");
    var pwor=document.getElementById("pword");
    var pword=document.getElementById("pwords");
    var emai=document.getElementById("email");
    var mo=document.getElementById("mob");



    if(unam.value.trim()==""){
        unam.style.border="solid 2px red";
        document.getElementById("uname1").innerHTML="**Username cannot be blank";
        return false;
    }

    if(unam.value.length <= 2 || unam.value.length > 20 ){
        unam.style.border="solid 2px red";
        document.getElementById("uname1").innerHTML="**Username length should be between 3 and 20";
        return false;
    }

    if(!isNaN(unam.value)){
        unam.style.border="solid 2px red";
        document.getElementById("uname1").innerHTML="**Username should only contain character";
        return false;
    }

    if(pwor.value.trim()==""){
        pwor.style.border="solid 2px red";
        document.getElementById("pword1").innerHTML="**Password cannot be blank";
        return false;
    }

    if(pwor.value.length <= 5 || pwor.value.length > 20 ){
        pwor.style.border="solid 2px red";
        document.getElementById("pword1").innerHTML="**Username length should be between 5 and 20";
        return false;
    }

    if(pword.value.trim()==""){
        pword.style.border="solid 2px red";
        document.getElementById("pwords1").innerHTML="**Password cannot be blank";
        return false;
    }

    if(pwor.value != pword.value){
        pword.style.border="solid 2px red";
        document.getElementById("pwords1").innerHTML="**Passwords are not matching";
        return false;
    }

    if(emai.value.trim()==""){
        emai.style.border="solid 2px red";
        document.getElementById("email1").innerHTML="**Email cannot be blank";
        return false;
    }

    if(emai.value.indexOf('@') <= 0){
        emai.style.border="solid 2px red";
        document.getElementById("email1").innerHTML="**@ can't come at beginning";
        return false;
    }

    if((emai.value.charAt(emai.value.length-4)!='.') &&  (emai.value.charAt(emai.value.length-3)!='.')){
        emai.style.border="solid 2px red";
        document.getElementById("email1").innerHTML="** email not valid";
        return false;
    }

    if(mo.value.trim()==""){
        mo.style.border="solid 2px red";
        document.getElementById("mob1").innerHTML="**Mobile No. cannot be blank";
        return false;
    }

    if(isNaN(mo.value)){
        mo.style.border="solid 2px red";
        document.getElementById("mob1").innerHTML="**Only Numbers allowed";
        return false;
    }

    if(mo.value.length != 10){
        mo.style.border="solid 2px red";
        document.getElementById("mob1").innerHTML="**Mobile No. should contain 10 digits";
        return false;
    }
    
}