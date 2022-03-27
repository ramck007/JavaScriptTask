//1.Write a JavaScript function to get the current date. 
function getdate(){
    //const date = new Date();
    //const n= date.toDateString();
    //document.getElementById("output").innerHTML=n;
    //console.log("Date: "+ n);
    
    today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //As January is 0.
    var yyyy = today.getFullYear();
    document.getElementById("output").innerHTML=dd+"-"+mm+"-"+yyyy;
}

// 2.Write a JavaScript function to get the number of days in a month.
function getdate1(){
    let n=document.getElementById("input1").value;
    if(n<=12){
        today = new Date();
        var yyyy = today. getFullYear();
        daysInMonth = new Date(yyyy,n, 0).getDate();
        document.getElementById("output1").innerHTML=daysInMonth;
    }else{
        window.alert("oops Enter the month between 12");
        n="";
        n.focus();  
    }
}

//3.Write a JavaScript function to get the month name from a particular date

function getMonth(){
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let s=document.getElementById("input2").value;
    let s1= parseInt( s.substring(3,5));
    document.getElementById("output2").innerHTML=monthNames[s1-1];
  //  console.log(monthNames[s1-1]);
}

// 4.Write a JavaScript function to compare dates (i.e. greater than, less than or equal to)
function compare(){
    let s2=document.getElementById("input3").value;
    let s3=document.getElementById("input4").value;
    if(s2>s3){
        document.getElementById("output3").innerHTML="Date1 is greater than Date2";
    }
    else if(s2<s3){
        document.getElementById("output3").innerHTML="Date2 is greater than Date1";
    }
    else{
        document.getElementById("output3").innerHTML="Both dates are Equal";
    }
    
}

//5.Write a JavaScript function to add specified minutes to a Date object.
function add(){
    let min=document.getElementById("input5").value
    var dt1 = new Date();
    document.getElementById("output4").innerHTML=dt1;
    var dt = new Date();
    dt.setMinutes(dt.getMinutes()+min);
    document.getElementById("output5").innerHTML=dt;
}

//6.Write a JavaScript function to test whether a date is a weekend
function check(){
    let date1=document.getElementById("input6").value;
    var date2=new Date(date1);
    if(date2.getDay()==0||date2.getDay()==6){
        document.getElementById("output6").innerHTML="Yeah! It's Weekend. Enjoy!!!";
    }
    else{
        document.getElementById("output6").innerHTML="OOPS! It's not Weekend";
    }

}

//7.Write a JavaScript function to get difference between two dates in days
function difference1(){
    var s4=new Date(document.getElementById("input7").value);
    var s5= new Date(document.getElementById("input8").value);   
    var s6=s5.getTime()-s4.getTime();
    var day1=s6/(1000*60*60*24);
    document.getElementById("output7").innerHTML=day1;   
}

//8. Write a JavaScript function to calculate 'yesterday day'
function find(){
    var s7=new Date(document.getElementById("input9").value);
    var s8=new Date(s7.setDate(s7.getDate()-1)).toString();
    document.getElementById("output8").innerHTML=s8;   
}