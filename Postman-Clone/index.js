console.log('This is my PostMaster Project');

//utility function
//1.utility function to get dom element from string

function getElementFromSTring(string){
    let div = document.createElement('div');
    div.innerHTML= string;
    return div.firstElementChild;
}

//initialize number of parameters
let addedparamcount= 0;

//hide the parameters box initially
let parametersBox = document.getElementById('parametersBox');
parametersBox.style.display= 'none';

//if the user click on params box, hide the json box
let paramsRadio = document.getElementById('paramsRadio');
paramsRadio.addEventListener('click', ()=>{
   let requestJsonBox= document.getElementById('requestJsonBox');
    requestJsonBox.style.display= 'none';
    document.getElementById('parametersBox');
    parametersBox.style.display= 'block';
})
//if the user click on json box, hide the params box
let jsonRadio = document.getElementById('jsonRadio');
jsonRadio.addEventListener('click', ()=>{
    document.getElementById('parametersBox')
    parametersBox.style.display = 'none';
    document.getElementById('requestJsonBox');
    requestJsonBox.style.display='block';
})

let addparams = document.getElementById('addparams');
addparams.addEventListener('click', ()=>{
     let params = document.getElementById('params');
     let string = `  <div id="closeparams" class="row my-2">

     <label for="url" class=" col-sm-2 col-form-label">Parameter ${addedparamcount + 2}</label>
     <div class="col-md-4">
         <input type="text" class="form-control" id="parameterKey${addedparamcount + 2}" placeholder="Enter Parameter ${addedparamcount + 2} Key">

     </div>
     <div class="col-md-4">
         <input type="text" class="form-control" id="parameterValue${addedparamcount + 2}" placeholder="Enter Parameter ${addedparamcount + 2} Values">
     </div>
     <button class=" col-sm-2 btn btn-primary delparams">-</button>
     
 </div>`;
//convert the element string to dom node
let paramElement = getElementFromSTring(string)
params.appendChild(paramElement);

//add an event listner to remove the parameter on clicking - button
let delparams = document.getElementsByClassName('delparams');
for (item of delparams){
    item.addEventListener('click',(e)=>{
        alert('Do you want to delete?');
        e.target.parentElement.remove();

    })
}

addedparamcount ++;
});

//if user clicks on submit buttons
let submit = document.getElementById('submit');
submit.addEventListener('click',()=>{
    //show please wait in the response box to request patience from the user
    document.getElementById('responseJsonText').value = "Please wait.... Fetching response...";

    //Fetch all the values which user has entered
    let url = document.getElementById('url').value;
    let requestType = document.querySelector("input[name ='requestType']:checked").value;
    let contentType = document.querySelector("input[name ='contentType']:checked").value;


    //if user has used params option instead of json, collect all the parameters in an object

    if(contentType== 'params'){
        data = {};
        for(i=0; i<addedparamcount+1; i++){
            if(document.getElementById('parameterKey' + (i+1)) != undefined){

                let key = document.getElementById('parameterKey' + (i+1)).value;
                let value = document.getElementById('parameterValue' + (i+1)).value;
                data[key]= value;
            }
            data = JSON.stringify(data);
        }
    }

    else{
        data = document.getElementById('requestJsonText').value;
    }

     //log all the values in the consol for debugging
     console.log('url is', url);
     console.log('requestType is', requestType);
     console.log('contentType is', contentType);
     console.log('Data is', data);

    //if the request type is get, involve fetch api to creatte a request
    if(requestType == 'GET'){
        fetch(url,{
            method: 'GET'
        })
        .then(response=> response.text())
        .then((text)=>{
            document.getElementById('responseJsonText').value = text;
        })
    }

    else{
        fetch(url,{
            method: 'POST',
            body: data,
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response=> response.text())
        .then((text)=>{
            document.getElementById('responseJsonText').value = text;
        })
    }



});
