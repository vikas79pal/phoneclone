function arrange(){
    for (let i = 0; i < document.getElementById('contacts').children.length; i++) {

        for (let j = i + 1; j < document.getElementById('contacts').children.length; j++) {
    
            if (document.getElementById('contacts').children[i].getElementsByTagName('p')[0].innerText.toUpperCase() > document.getElementById('contacts').children[j].getElementsByTagName('p')[0].innerText.toUpperCase()) {
    
                let a = document.getElementById('contacts').children[i].innerHTML;
    
                document.getElementById('contacts').children[i].innerHTML = document.getElementById('contacts').children[j].innerHTML;
                document.getElementById('contacts').children[j].innerHTML = a;
    
            }
    
        }
    }
}

function findElementAtHistory(element){
    var isOrNot=false;
    let historyname=''
    for (let i =0; document.getElementById('history').children.length;i++){
        if (element== document.getElementById('history').children[i].getElementsByTagName('p')[1].innerText){
            
            document.getElementById('history').children[i].remove();
            historyname=document.getElementById('history').children[i].getElementsByTagName('p')[0].innerText
            isOrNot=true;
        }
    }
    return historyname;
}

function createElementAtHistory(){


    
    let contactNum=document.getElementById("clickedNumber").value;
    let contactName=document.getElementById("clickedNumber").value;
    
    

    let a= document.getElementById('history').innerHTML;


    let lastelement=document.getElementById("history").children.length-1;

    let li1=document.createElement("li");
    li1.className="number";
    let ic=document.createElement("i");
    ic.className="far fa-2x fa-user-circle";
    ic.style="color: rgb(195, 195, 197);background-color: #998b8b;border-radius: 100%; width: 39px; height: 35px;"

    let div=document.createElement('div');
    div.className="nameNumberTogether";

    let pName=document.createElement("p");
    pName.className="name";
    pName.innerText=contactName;

    let callbtn1=document.createElement('button');
    callbtn1.className="callbtn1";
    let callbtnicon=document.createElement('i');
    callbtnicon.className="fas fa-phone-alt";
    
    let pNumber=document.createElement('p');
    pNumber.className="contactNumber";
    pNumber.innerText=contactNum;

    callbtn1.append(callbtnicon)
    pName.append(callbtn1)
    div.append(pName);
    div.append(pNumber);
    li1.append(ic);
    li1.append(div);

    document.getElementById("history").append(li1);

    document.getElementById("history").innerHTML=document.getElementById("history").children[lastelement+1].outerHTML;
    document.getElementById("history").innerHTML+=a;
}



// filter according to the name of search
const searchName = document.getElementById('peoplesearch');

const ul = document.getElementById("history");


searchName.addEventListener('keyup', (e) => {
    console.log('h')
    for (let i = 0; i < ul.children.length; i++) {
        if (ul.children[i].innerText.toUpperCase().indexOf(e.target.value.toUpperCase()) != -1) {
            console.log(ul.children[i].innerText)
            ul.children[i].style.display = '';
        }
        else {
            ul.children[i].style.display = 'none';


        }
    }
})

//filtering name for contact page

const contactlist = document.getElementById("contacts");
// console.log(contactlist.children[0].children[1].innerText)
const contactsearch = document.getElementById('contact1search');
// l.children[0].innerText
// console.log(document.getElementById('contact1search').value)
contactsearch.addEventListener('keyup', (e) => {

    // console.log(e.target.value, contactlist.children[0].style.display = 'none')
    for (let i = 0; i < contactlist.children.length; i++) {

        
        contactlist.children[i].lastElementChild.innerText.toUpperCase().indexOf(e.target.value.toUpperCase()) != -1 ? contactlist.children[i].style.display = 'flex' : contactlist.children[i].style.display = 'none'

    }
})


//disabling click property of contact search button
document.getElementById('contactsearch').getElementsByTagName('button')[0].disabled = true;

// invoking dialpad by clicking on dialbtn(icon)

const dialbtn = document.getElementById('dialbtn')

var c = 1
dialbtn.addEventListener('click', () => {

    const dialerpad = document.getElementById('dialerpad');
    if (dialerpad.style.zIndex == '') {
        dialerpad.style.zIndex = '1'
    }
    else {
        dialerpad.style.zIndex = ''
    }


})

// cross (remove values inside contactbx after clicking cross icon )

const cross = document.getElementById('cross');
cross.addEventListener('click', () => {
    searchName.value = '';
    // load the recent calls value after clicking on a cross(remove btn)

    for (let i = 0; i < ul.children.length; i++) {
        ul.children[i].style.display = 'flex';
    }


})

// cross (remove values inside contactpgbx after clicking cross icon )

const cross1=document.getElementById('cross1');
cross1.addEventListener('click',()=>{
    // console.log('clicked')
    document.getElementById("contact1search").value="";
    for (let i = 0; i < document.getElementById('contacts').children.length; i++) {
        document.getElementById('contacts').children[i].style.display = 'flex';
    }
})



// //displaying No.of saved contacts dynamically

// var noOfContactSaved1 = 0;
// for (let i = 0; i < document.getElementById('contacts').children.length; i++) {
//     console.log('dyy')
//     //if parseInt returns a Nan that means the value is of type string which means it is a saved contact number
//     if (isNaN(parseInt(document.getElementById('contacts').children[i].children[1].children[0].innerText)) == true) {
//         noOfContactSaved1 += 1;
//         console.log('dyy1')
//     }
        
        
//     }
// document.getElementById('peoplesearch').placeholder = ` ${noOfContactSaved1} contacts `

// fetching clicked number on a dialpad and displaying it on just above the dialer pad


document.getElementById('row1').addEventListener('click', (e) => {
    console.log(e.target.innerText)
    console.log(document.getElementById('row0').children[0].value += e.target.innerText);
})
document.getElementById('row2').addEventListener('click', (e) => {
    // console.log(e.target.innerText)

    console.log(document.getElementById('row0').children[0].value += e.target.innerText);
})
document.getElementById('row3').addEventListener('click', (e) => {
    console.log(e.target.innerText)
    console.log(document.getElementById('row0').children[0].value += e.target.innerText);
})
document.getElementById('row4').addEventListener('click', (e) => {
    console.log(e.target.innerText)
    console.log(document.getElementById('row0').children[0].value += e.target.innerText);
})

// activating or displaying the number when user will first click on any button of the dialer pad

const dialerpad = document.getElementById('dialerpad');
dialerpad.addEventListener('click', () => {
    document.getElementById('row0').style.display = 'flex';
    console.log(document.getElementById('dialerpad').style)
    document.getElementById('dialerpad').style.bottom = "248px";
    console.log(document.getElementById('dialerpad').style.bottom)
    document.getElementById('dialerpad').style.height = "240px";
    
    // code to remove dialed number
    if (document.getElementById('clickedNumber').value.length == 0) {
        console.log('iff')
        document.getElementById('row0').style.height = '0px';
        document.getElementById('backspace').style.display = 'none';
        document.getElementById('clickedNumber').style.display = 'none'
    }
    else {
        document.getElementById('row0').style.height = '30px';
        document.getElementById('backspace').style.display = '';
        document.getElementById('clickedNumber').style.display = ''
    }
    
    
    
})

if (document.getElementById('row0').children[0].value == '') {
    document.getElementById('row0').style.display = 'none';
}

//backspace 

document.getElementById('backspace').addEventListener('click', () => {
    let cntnumber = document.getElementById('clickedNumber').value.length
    document.getElementById('clickedNumber').value = document.getElementById('clickedNumber').value.substring(0, cntnumber - 1);

})


//shifting from recentlist to contact list

document.getElementById('contact').addEventListener('click', () => {
    document.getElementById('contact').style.backgroundColor = 'yellow';
    document.getElementById('recentlist').style.display = 'none';
    document.getElementById('contactlist').style.display = 'flex';
    
    document.getElementById('recentcalls').style.backgroundColor = 'black';
    
    document.getElementById('contactsearch').style.display = 'none';
    document.getElementById('contactpgsearch').style.display = 'flex';
    

    // changing a dialbtn to addcntc
    
    document.getElementById('addcntct').style.display = 'block';
    document.getElementById('dialerpad').style.display = 'none';
    // document.getElementById('dialbtn').style.display='flex';

})

//disabling click property of contact page search button
document.getElementById('contactpgsearch').getElementsByTagName('button')[0].disabled = true;




    
document.getElementById('recentcalls').addEventListener('click', () => {
    document.getElementById('recentcalls').style.backgroundColor = 'lightblue';
    document.getElementById('contactlist').style.display = 'none';
    document.getElementById('recentlist').style.display = 'flex';

    document.getElementById('contactsearch').style.display = 'flex';
    document.getElementById('contactpgsearch').style.display = "none";

    document.getElementById('contact').style.backgroundColor = 'black';

    document.getElementById('dialerpad').style.display = '';

    // changing a addcntc to dialbtn 
    document.getElementById('addcntct').style.display = 'none';
    document.getElementById('dialbtn').style.display = '';
})

document.getElementById('addcntct').addEventListener('click', (e) => {

    
    document.getElementById('contactpg').style.display = 'none';
    document.getElementById('addcntctpage').style.display = "flex";
    document.getElementById('addcntctpage').style.zIndex = "4";

    
})

// after clicking on cross btn get back to the original page

document.getElementById('x').addEventListener('click', () => {
    document.getElementById('contactpg').style.display = '';
    document.getElementById('addcntctpage').style.display = "none";
    document.getElementById('addcntctpage').style.zIndex = "-1";
    document.getElementById('name1').value = null;
})

// after clicking yes save that contact number and get back to the original page

document.getElementById('yes').addEventListener('click', (e) => {
    var avoidcpy=0;
    if(document.getElementById('yes').value ==null)
    for (let i =0;i<document.getElementById('contacts').children.length;i++){
        
        if (document.getElementById('name1').value.toUpperCase()==(document.getElementById('contacts').children[i].children[1].children[0].innerText.toUpperCase()) || (document.getElementById('mobile').value==document.getElementById('contacts').children[i].children[1].children[1].innerText )){
            avoidcpy+=1;
            break
        }
    }


    if (document.getElementById('name1').value !="" && document.getElementById('mobile').value !="" && avoidcpy==0){

        
        let newcontact = document.createElement('li');
        newcontact.className = "number";
        
        // usericon
        let usericon = document.createElement("i");
        usericon.className = "far fa-2x fa-user-circle";
        usericon.style = "color: rgb(195, 195, 197);background-color: #998b8b;border-radius: 100%; width: 39px; height: 35px;";
        
        //name
        let username = document.createElement('div');
        username.className = "nameNumberTogether";
        
        let name1 = document.createElement('p');
        
        name1.style="font-size: 30px; padding-bottom: 0px; padding-top: 3px;margin-top: 0px;"

        let callbtn1=document.createElement('button');
        callbtn1.className="callbtn1";
        let callbtnicon=document.createElement('i');
        callbtnicon.className="fas fa-phone-alt";
        
        
        let cnnumber = document.createElement('p');
        cnnumber.style = "color:rgb(245, 227, 227); font-size:26px; padding-bottom: px;padding-top: 0px;margin-top: -37px;margin-left: 40px;font-weight:bold ;display:none";
        
        cnnumber.className="contactNumber";
        cnnumber.innerText=document.getElementById('mobile').value;
        
        let firstletter=document.getElementById('name1').value[0].toUpperCase();
        if (document.getElementById('name1').value.length==2){

            let remainingletter=document.getElementById('name1').value[1];
            console.log(remainingletter,"if")
            firstletter+=remainingletter
        }
        else if (document.getElementById('name1').value.length>2){
            let remainingletter=document.getElementById('name1').value.slice(1,document.getElementById('name1').value.length);
            
            firstletter+=remainingletter
        }
    
        name1.innerText = `${firstletter}`;

        document.getElementById('name1').value = null;
        document.getElementById('mobile').value=null;
        callbtn1.append(callbtnicon);
        name1.append(callbtn1);
        username.append(name1);
        username.append(cnnumber);
        newcontact.append(usericon);
        newcontact.append(username);
        
        document.getElementById("contacts").append(newcontact)
        
        
        // }
        document.getElementById('contactpg').style.display = '';
        document.getElementById('addcntctpage').style.display = "none";
        
        
        arrange();
        //displaying No.of saved contacts dynamically on contact page
        let noOfContactSaved1 = contactlist.children.length;

    
        
        document.getElementById('contact1search').placeholder = ` ${noOfContactSaved1} contacts `;
        document.getElementById('peoplesearch').placeholder = ` ${noOfContactSaved1} contacts `
    
    }

})






// after clicking on a contact pg contacts , that specific clicked contact get appears on a recentlist page



document.getElementById("contacts").addEventListener('click',(e)=>{
    console.log()
    // if (e.target.className=="fas fa-phone-alt") {
    //     document.getElementById('contactpg').style.display="none";
    //     document.getElementById('call').style.display="flex";
    //     console.log(e.target.parentElement.parentElement.parentElement.getElementsByTagName('p')[1].innerText)
    // }
    // console.log(e.target.className=="fas fa-phone-alt"

    if (e.target.className=="fas fa-phone-alt"){
        console.log(e.target.parentElement.parentElement.parentElement.children[0].innerText)
        console.log(e.target.parentElement.parentElement.parentElement.children[1].innerText)
        // displaying call page
        document.getElementById('call').style.display="flex";

        //displaying name and number on a call screen of user
        document.getElementById("callName").innerText=e.target.parentElement.parentElement.parentElement.children[0].innerText;
        document.getElementById('callNum').innerHTML= ` <i class="fas fa-sim-card fa-xs" style="padding-right: 6px;"></i> ${e.target.parentElement.parentElement.parentElement.children[1].innerText} | India`


    //

        document.getElementById('contactpg').style.display="none";

        document.getElementById("endcall").addEventListener("click",()=>{
            document.getElementById('call').style.display="none";

            document.getElementById('contactpg').style.display="";
        })

        //removing the same contact name from recent list

            for (let i=0;i<document.getElementById('history').children.length;i++){
                if (e.target.parentElement.parentElement.parentElement.children[0].innerText.includes(document.getElementById('history').children[i].getElementsByTagName('p')[0].innerText.slice(0,document.getElementById('history').children[i].getElementsByTagName('p')[0].innerText.length-4)) && (e.target.parentElement.parentElement.parentElement.children[1].innerText==document.getElementById('history').children[i].getElementsByTagName('p')[1].innerText) ){
                
                    document.getElementById('history').children[i].remove();
                    break
                }
                
                
            }

        let a = document.getElementById("history").innerHTML;
        

        // adding the contact to the top of the recent list

        let lastelement=document.getElementById("history").children.length-1;
        
        let contactName=e.target.parentElement.parentElement.parentElement.children[0].innerText

        let contactNum=e.target.parentElement.parentElement.parentElement.children[1].innerText
        

        let li1=document.createElement("li");
        li1.className="number";
        let ic=document.createElement("i");
        ic.className="far fa-2x fa-user-circle";
        ic.style="color: rgb(195, 195, 197);background-color: #998b8b;border-radius: 100%; width: 39px; height: 35px;"

        let div=document.createElement('div');
        div.className="nameNumberTogether";

        let pName=document.createElement("p");
        pName.className="name";
        pName.innerText=contactName;

        let callbtn1=document.createElement('button');
        callbtn1.className="callbtn1";
        let callbtnicon=document.createElement('i');
        callbtnicon.className="fas fa-phone-alt";
        
        let pNumber=document.createElement('p');
        pNumber.className="contactNumber";
        pNumber.innerText=contactNum;

        callbtn1.append(callbtnicon)
        pName.append(callbtn1)
        div.append(pName);
        div.append(pNumber);
        li1.append(ic);
        li1.append(div);

        document.getElementById("history").append(li1);

        document.getElementById("history").innerHTML=document.getElementById("history").children[lastelement+1].outerHTML;
        document.getElementById("history").innerHTML+=a;
    
    }
    



})

document.getElementById('history').addEventListener('click',(e)=>{
    // displaying call page
    if (e.target.className=="fas fa-phone-alt"){
        console.log(e.target.parentElement.parentElement.parentElement.children[0].innerText)
        console.log(e.target.parentElement.parentElement.parentElement.children[1].innerText)

        
        document.getElementById('call').style.display="flex";
        
        
        //displaying name and number on a call screen of user
        document.getElementById("callName").innerText=e.target.parentElement.parentElement.parentElement.children[0].innerText;
        document.getElementById('callNum').innerHTML= ` <i class="fas fa-sim-card fa-xs" style="padding-right: 6px;"></i>${e.target.parentElement.parentElement.parentElement.children[1].innerText} | India`
        
        //call is picked up and displaying the no.of seconds dynamically
    let randNum=Math.ceil((Math.random()*10));
    console.log(randNum)
    var time= new Date();
    var min=0;
    var sec=time.getDay();
    console.log(sec)
    
    
    // setTimeout(() => {
        //     // document.getElementById("status").innerText=
        //    let time1=new Date();
    //     console.log(time1.getHours(),"diff");
    // }, randNum*1000);
    
    document.getElementById('contactpg').style.display="none";
    
    document.getElementById("endcall").addEventListener("click",()=>{
    document.getElementById('call').style.display="none";
    document.getElementById('contactpg').style.display="";
})
}

})

//to make a call by entering a number on a dial pad
document.getElementById("sim1").addEventListener("click",(e)=>{
    // whether the entered number is present or not; if presentOrNot=0 that means, that number is not there in a contact list or vice versa

    var presentOrNot1=0;
    if (document.getElementById("clickedNumber").value.length==10){
        for (let i=0;i<document.getElementById('contacts').children.length;i++){
            console.log(document.getElementById("clickedNumber").value)
            if(document.getElementById("clickedNumber").value==document.getElementById('contacts').children[i].getElementsByTagName('p')[1].innerText){
                console.log('yes')
                presentOrNot1=1;

                document.getElementById('call').style.display="flex";

                //displaying name and number on a call screen of user
                document.getElementById("callName").innerText=document.getElementById('contacts').children[i].getElementsByTagName('p')[0].innerText;
                document.getElementById('callNum').innerHTML= ` <i class="fas fa-sim-card fa-xs" style="padding-right: 6px;"></i>${document.getElementById('contacts').children[i].getElementsByTagName('p')[1].innerText} | India`
                document.getElementById('contactpg').style.display="none";


                // // console.log(document.getElementById("callName").innerText,"callName"
                //             console.log("found")
                //             document.getElementById('contacts').children[i].getElementsByTagName('p')[0].style.fontSize="20px";
                //             document.getElementById('contacts').children[i].getElementsByTagName('p')[1].style.display="";
                //             //storing the changed html in temp variable to display it at the top of the recent page
                //             let temp =document.getElementById('contacts').children[i].outerHTML;
                //             console.log(temp,"temp")
                //             document.getElementById('contacts').children[i].getElementsByTagName('p')[0].style.fontSize="30px";
                //             document.getElementById('contacts').children[i].getElementsByTagName('p')[1].style.display="none";
                //             var flag=0;
                //             for (let k=0;k<document.getElementById('history').children.length;k++){

                //                 console.log(document.getElementById('history').children[k].getElementsByTagName('p')[0].innerText.slice(0,document.getElementById('history').children[k].getElementsByTagName('p')[0].innerText.length-4))
                //                 // when that dialled saved contact already exists in a recent page
                //                 if (document.getElementById("callName").innerText==document.getElementById('history').children[k].getElementsByTagName('p')[0].innerText.slice(0,document.getElementById('history').children[k].getElementsByTagName('p')[0].innerText.length-4)){
                //                     console.log('ha bhai haa');
                //                     let temp2=document.getElementById('history').children[k].outerHTML;
                //                     document.getElementById('history').children[k].remove()
                //                     let a=document.getElementById('history').innerHTML;
                //                     document.getElementById('history').innerHTML=temp2;
                //                     document.getElementById('history').innerHTML+=a;
                //                     flag=1

                //                 }
                                
                                
                //             }
                //             // when that dialled contact already exists in a recent page
                //             if (flag==0){
                //                     let a=document.getElementById('history').innerHTML;
                //                     document.getElementById('history').innerHTML=temp;
                //                     document.getElementById('history').innerHTML+=a;
                //             }




                //             break
                //         }
                    


                 document.getElementById("endcall").addEventListener("click",()=>{
                    

                    document.getElementById('call').style.display="none";
                    
                    document.getElementById('contactpg').style.display="";
                })

                break

            }
        }
        if (presentOrNot1==0){

            document.getElementById('call').style.display="flex";
            
            //displaying name and number on a call screen of user
            document.getElementById("callName").innerText=document.getElementById("clickedNumber").value;
            document.getElementById('callNum').innerHTML= ` <i class="fas fa-sim-card fa-xs" style="padding-right: 6px;"></i> 2 | India`
            console.log(document.getElementById("callName").innerText,"callName")
            document.getElementById('contactpg').style.display="none";
                        
        }

    }
    
    
    // for (let j=0;j<document.getElementById('history').children.length;j++){
    //     if(document.getElementById('history').children[j].getElementsByTagName('p')[1].innerText==document.getElementById("clickedNumber").value){

    //         let cntct=document.getElementById('history').children[j].outerHTML;
            
    //         console.log(cntct)
    //         document.getElementById('history').children[j].remove();
    //         let hist=document.getElementById("history").innerHTML;
    //         document.getElementById("history").innerHTML=cntct;
    //         document.getElementById("history").innerHTML+=hist;


    //     }
    //     else{
    //         createElementAtHistory()

    //     }
    // }
})

// document.getElementById('history').addEventListener('click',(e)=>{
//     // displaying call page
  
        
//         document.getElementById('call').style.display="flex";
        
        
//         //displaying name and number on a call screen of user
//         document.getElementById("callName").innerText=e.target.parentElement.children[0].innerText;
//         document.getElementById('callNum').innerHTML= ` <i class="fas fa-sim-card fa-xs" style="padding-right: 6px;"></i> ${e.target.parentElement.getElementsByTagName('p')[1].innerText} | India`
        
//         //call is picked up and displaying the no.of seconds dynamically
//     let randNum=Math.ceil((Math.random()*10));
//     console.log(randNum)
//     var time= new Date();
//     var min=0;
//     var sec=time.getDay();
//     console.log(sec)
    
    
//     // setTimeout(() => {
//         //     // document.getElementById("status").innerText=
//     //    let time1=new Date();
//     //     console.log(time1.getHours(),"diff");
//     // }, randNum*1000);
    
//     document.getElementById('contactpg').style.display="none";
    
//     document.getElementById("endcall").addEventListener("click",()=>{
//     document.getElementById('call').style.display="none";
//     document.getElementById('contactpg').style.display="";
// })

// })
document.getElementById("sim2").addEventListener("click",(e)=>{
    // whether the entered number is present or not; if presentOrNot=0 that means, that number is not there in a contact list or vice versa

    var presentOrNot=0;
    if (document.getElementById("clickedNumber").value.length==10){
        for (let i=0;i<document.getElementById('contacts').children.length;i++){

            if(document.getElementById("clickedNumber").value==document.getElementById('contacts').children[i].getElementsByTagName('p')[1].innerText){
                console.log('yes')
                presentOrNot=1;

                document.getElementById('call').style.display="flex";

                //displaying name and number on a call screen of user
                document.getElementById("callName").innerText=document.getElementById('contacts').children[i].getElementsByTagName('p')[0].innerText;
                document.getElementById('callNum').innerHTML= ` <i class="fas fa-sim-card fa-xs" style="padding-right: 6px;"></i>${document.getElementById('contacts').children[i].getElementsByTagName('p')[1].innerText} | India`
                
                document.getElementById('contactpg').style.display="none";

                // document.getElementById("endcall").addEventListener("click",()=>{
                //     document.getElementById('call').style.display="none";

                //     document.getElementById('contactpg').style.display="";
                // })
                break

            }
        }
        if (presentOrNot==0){

            document.getElementById('call').style.display="flex";
            
            //displaying name and number on a call screen of user
            document.getElementById("callName").innerText=document.getElementById("clickedNumber").value;
            document.getElementById('callNum').innerHTML= ` <i class="fas fa-sim-card fa-xs" style="padding-right: 6px;"></i> 2 | India`
            
            document.getElementById('contactpg').style.display="none";
            
            // document.getElementById("endcall").addEventListener("click",()=>{
            //     document.getElementById('call').style.display="none";
                
            //     document.getElementById('contactpg').style.display="";
            // })
        }
    }
})


// displaying a recent call at the top of recent page made from recent page

document.getElementById('history').addEventListener('click',(e)=>{

    if (e.target.className=="fas fa-phone-alt"){
        console.log(e.target.parentElement.parentElement.parentElement.children[0].innerText)
        console.log(e.target.parentElement.parentElement.parentElement.children[1].innerText)

    // console.log(e.target.parentElement.parentElement)
    let name=e.target.parentElement.parentElement.parentElement.children[0].innerText;
    let number=e.target.parentElement.parentElement.parentElement.children[1].innerText;
    let displayAtTop=e.target.parentElement.parentElement.parentElement.parentElement.outerHTML;
    // console.log(displayAtTop)
    e.target.parentElement.parentElement.parentElement.parentElement.remove();
    let remaining= document.getElementById("history").innerHTML;
    document.getElementById("history").innerHTML=displayAtTop;
    document.getElementById("history").innerHTML+=remaining;
    }

})


// callend event listener


document.getElementById("endcall").addEventListener("click",(e)=>{
    document.getElementById('call').style.display="none";

    document.getElementById('contactpg').style.display="";


    // displaying that entered contact into the top of the recent list 

    // for (let i=0;i<document.getElementById("history").children.length;i++){

    // }
})



// call page

const video=document.getElementById('video');
const addcall=document.getElementById('addcall');
const note=document.getElementById('note');
const hold=document.getElementById('hold');
const speaker=document.getElementById('speaker');
const record=document.getElementById('record');
const mute=document.getElementById('mute');
const unmute=document.getElementById('unmute');
const normal=document.getElementById("normal");
var videoclickcheck=0
video.addEventListener("click",(e)=>{
    if ((videoclickcheck==0)){
        videoclickcheck=1
        video.style.color="rgb(88 88 160)";
        console.log(e.target.innerHtml)
    }
    else {
        videoclickcheck=0
        video.style.color="wheat";
        console.log(e.target.innerHtml)
        
        
    }
})
var addcallclickcheck=0;
addcall.addEventListener("click",(e)=>{
    if (( addcallclickcheck==0)){
        addcallclickcheck=1
        addcall.style.color="rgb(88 88 160)";
        console.log(e.target.innerHtml)
    }
    else {
        addcallclickcheck=0
        addcall.style.color="wheat";
        console.log(e.target.innerHtml)
        
        
    }
})

var noteclickcheck=0;
note.addEventListener("click",(e)=>{
    if (( noteclickcheck==0)){
        noteclickcheck=1
        note.style.color="rgb(88 88 160)";
        console.log(e.target.innerHtml)
    }
    else {
        noteclickcheck=0
        note.style.color="wheat";
        console.log(e.target.innerHtml)
        
        
    }
})

var holdclickcheck=0;
hold.addEventListener("click",(e)=>{
    if (( holdclickcheck==0)){
        holdclickcheck=1
        hold.style.color="rgb(88 88 160)";
        console.log(e.target.innerHtml)
    }
    else {
        holdclickcheck=0
        hold.style.color="wheat";
        console.log(e.target.innerHtml)
        
        
    }
})

mute.addEventListener('click',(e)=>{
    console.log(e.target)
    
    document.getElementById('layer2').children[0].children[1].style.display="";
    document.getElementById('layer2').children[0].children[0].style.display="none";

    // let add="<i id='mute' class='fas fa-microphone fa-2x' style='color: wheat; margin-right: 13px;cursor: pointer;' ></i>"

    // let backup=document.getElementById("layer2").innerHtml;
    // document.getElementById("layer2").innerHtml= add;
    // document.getElementById("layer2").innerHtml+=backup;
    console.log(document.getElementById("layer2").innerHTML)
    // console.log(e.target.parentElement.children)
})

unmute.addEventListener('click',(e)=>{
    console.log(e.target)
    document.getElementById('layer2').children[0].children[1].style.display="none";
    document.getElementById('layer2').children[0].children[0].style.display="";
    // let add="<i id='mute' class='fas fa-microphone fa-2x' style='color: wheat; margin-right: 13px;cursor: pointer;' ></i>"

    // let backup=document.getElementById("layer2").innerHtml;
    // document.getElementById("layer2").innerHtml= add;
    // document.getElementById("layer2").innerHtml+=backup;
    console.log(document.getElementById("layer2").innerHTML)
    // console.log(e.target.parentElement.children)
})


var recordclickcheck=0;
record.addEventListener("click",(e)=>{
    if (recordclickcheck==0){

        e.target.style.color="rgb(88 88 160)";
        document.getElementById('record').style.border="4px solid rgb(88 88 160)";
        recordclickcheck=1
    }
    else{
        e.target.style.color="wheat";
        document.getElementById('record').style.border="4px solid wheat";
        recordclickcheck=0
        
    }
})

//speaker to normal 

// var speakerclickcheck=0
speaker.addEventListener("click",(e)=>{
    // if (speakerclickcheck==0){
       
    // }

    speaker.style.display="none";
    normal.style.display="";
})
normal.addEventListener("click",(e)=>{
    speaker.style.display="";
    normal.style.display="none";
})