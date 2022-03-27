// 1.Write a JavaScript program to test the first character of a string is uppercase or not.
    function check1(){
        let r1=document.getElementById("inputr1").value;
        var regexp1 = /^[A-Z]/;
        if(regexp1.test(r1)){
            document.getElementById("outputr1").innerHTML="Present";
        }
        else{
            document.getElementById("outputr1").innerHTML="Not Present";
        }
    }

// 2.Write a JavaScript program to check a credit card number.
    function check2(){
        let r2=document.getElementById("inputr2").value;
        regexp2 = /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/;
        if(regexp2.test(r2)){
            document.getElementById("outputr2").innerHTML="Yup! it is";
        }
        else{
            document.getElementById("outputr2").innerHTML="Nope it's Not";
        }
    }

// 3.Write a pattern that matches e-mail addresses.
    function check3(){
        let r3=document.getElementById("inputr3").value;
        regexp3 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
        if(regexp3.test(r3)){
            document.getElementById("outputr3").innerHTML="Yup! it is";
        }
        else{
            document.getElementById("outputr3").innerHTML="Nope it's Not";
        }
    }


// 4.Write a JavaScript program to count number of words in string.
    function check4(){
        let r4=document.getElementById("inputr4").value;
        //str1= document.getElementById("InputText").value;
        //exclude  start and end white-space
        r4=r4.replace(/(^\s*)|(\s*$)/gi,"");
        //convert 2 or more spaces to 1  
        r4=r4.replace(/[ ]{2,}/gi," ");
        // exclude newline with a start spacing  
        r4=r4.replace(/\n /,"\n");
        document.getElementById("outputr3").value = r4.split(' ').length;
    }


// 5.Write a JavaScript function to check whether a given value is alpha numeric or not

    function check5(){
        let r5=document.getElementById("inputr5").value;
        regexp5 = /^[A-Za-z0-9]+$/;      
        if(regexp5.test(r5)){
            document.getElementById("outputr5").innerHTML="Yup! it is";
        }
        else{
            document.getElementById("outputr5").innerHTML="Nope it's Not";
        }
    }
