

function register(event){
let password = document.getElementById('password').value;
let cpassword = document.getElementById('cpassword').value;
    event.preventDefault();
    if(password == cpassword){
  
    let form = event.target;
    let formdata = new FormData (form);

    fetch('http://localhost/frontEndProject/php/registration.php',{
        method:'post',
        body:formdata
    })
    .then(result=>{

        // if we want this data to be text
         return result.text()
         var x = result.text()
         
        // if we want this data to be JSON
        return result.json()
        
    })
    .then(final_result=>{
        console.log(final_result);
        if(final_result == "registration Successfully..."){
        window.location = "awu.html";
        }else{
            alert("Error username,email or password")
        }
    })
}else{
    alert("Error Password") ; 
}
}

function login(event){
        event.preventDefault();
        let form = event.target;
        let formdata = new FormData (form);
    
        fetch('http://localhost/frontEndProject/php/login.php',{
            method:'post',
            body:formdata
        })
        .then(result=>{
    
            // if we want this data to be text
             return result.text()
             var x = result.text()
             
            // if we want this data to be JSON
            return result.json()
            
        })
        .then(final_result=>{
            console.log(final_result);
            if(final_result == "Succeess!!"){
            window.location = "first_page.html";
            }else{
                alert("Error username or password")
            }
        })
    }
    


