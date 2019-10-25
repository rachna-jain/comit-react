function showEven(max){
          for (let x = 0; x <=max; x++) {
              if(x%2 === 0){
              console.log(`${x} is even`);
            }
    }

}
showEven(100);
function showUser(name,age,phone_number,street,postalcode,married){
    console.log("Name",name);
    console.log("age",age);
    console.log("Phone Number",phone_number);
    console.log("Street",street);
    console.log("Postal Code",postalcode);
    console.log("Married",married);
}
showUser("joe",21,456784, "fake street","S7h3C9",true);
/*function showUser(){
    let name="JOE";
    console.log(name);
    let age=14;
    console.log(age);
    let phone_number=456789;
    console.log(phone_number);
    let street_name="Fake Street";
    console.log(street_name);
    let married=("yes");
    console.log(Boolean(married));
}*/
    //showUser();
for(let i=1; i<=5;i++){
    showEven()
}

function fibonacci(max){
    let previous=0;
    console.log(previous);
    let current=1;
    console.log(current);
    let next= previous=current;
   for(let i=0;i<max;i++){
    console.log(next);
    previous=current;
    current=next;
   next=previous+current;

    }
}

fibonacci(8);


const showName = function(){
    console.log("==========");
    console.log("=Rachna=");
    console.log("==========")

}
showName();
showName();