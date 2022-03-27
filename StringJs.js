// 1.Write a JavaScript function to check whether a string is blank or not
function check1(){
    let s1= document.getElementById("inputs1").value;
    if(s1.length==0){
        document.getElementById("outputs1").innerHTML="It's Empty";
    }
    else{
        document.getElementById("outputs1").innerHTML="It's Not Empty";
    }
}

// 2.Write a JavaScript function to split a string and convert it into an array of words.
function check2(){
    let s2=document.getElementById("inputs2").value;
    let s3=[s2.trim().split(" ")];
    document.getElementById("outputs2").innerHTML=s3;//.trim().split(" ");
}

// 3.Write a JavaScript function to extract a specified number of characters from a string
function check3(){
    let s4=document.getElementById("inputs3").value;
    var s5=document.getElementById("inputs4").value;
    document.getElementById("outputs3").innerHTML=s4.slice(0,s5);
}

// 4.Write a JavaScript function to hide email addresses to protect from unauthorized user.
function check4(){
    let s6=document.getElementById("inputs5").value;
    let splitter=s6.split("@");
    let p1=splitter[0];
    console.log(p1);
    let p2=splitter[1];
    avg=p1.length/2;
    p1=p1.substring(0,(p1.length-avg));
    console.log(p1);
    document.getElementById("outputs4").innerHTML=p1+"...@"+p2;
}

// 5.Write a JavaScript function to capitalize the first letter of each word in a string
function check5(){
    let s7=document.getElementById("inputs6").value;
    s7=s7.split(" ");
    for(i=0;i<s7.length;i++){
        s7[i]=s7[i][0].toUpperCase()+s7[i].substring(1);
    }
    s7=s7.join(" ");
    document.getElementById("outputs5").innerHTML=s7;
}

// 6.Write a JavaScript function to insert a string within a string at a particular position (default is 1)
function check6(){
    let s8=document.getElementById("inputs7").value;
    let s9=document.getElementById("inputs8").value;
    var s10=document.getElementById("inputs9").value;
    if(s10==null){
        s10=0;
    }
    if(typeof(s9)=='undefined'){
        s9="";
    }
    let s11=s8.slice(0,s10)+s9+" "+s8.slice(s10);
    document.getElementById("outputs6").innerHTML=s11;
}

// 7. Write a JavaScript function that can pad (left, right) a string to get to a determined length
   function check7(){
    let s12=document.getElementById("inputs10").value;// pad string
    let s13=document.getElementById("inputs11").value;// string
    let s14=document.getElementById("inputs12").value;//pos
    let s15;
    if(typeof(s13)=='undefined'){
        s15=s12;
    }
    if(s14=='l'){
        s15=(s12+s13);//;.slice(-s12.length);
    }
    else{
        s15=(s13+s12);//.substring(0,s12.length);
    }
    document.getElementById("outputs7").innerHTML=s15;
   }

// 8.Write a JavaScript function to convert ASCII to Hexadecimal format
   function check8(){
    let s16=document.getElementById("inputs13").value;
    var s17=[];
    for(var i=0;i<s16.length;i++){
        var hex=Number(s16.charCodeAt(i).toString(16));
        s17.push(hex);
    }
    s17=s17.join(',');
    document.getElementById("outputs8").innerHTML=s17;
   }

// 9.Write a JavaScript function to find a word within a string
function check9(){
    let s18=document.getElementById("inputs14").value;
    let s19=document.getElementById("inputs15").value;
    var x=0,y=0;
    for(var i=0;i<s18.length;i++){
        if(s18[i]==s19[0]){
            for(var j=i;j<i+s19.length;j++){
                if(s18[j]==s19[j-i]){
                    x++;
                }
                if(x==s19.length){
                    y++;
                }
            }
            x=0;
        }
    }
    if(y!=0){
        document.getElementById("outputs9").innerHTML="Present";
    }
    else{
        document.getElementById("outputs9").innerHTML="Not Present";
    }

}