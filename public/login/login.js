var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");

var body = document.querySelector("body");

btnSignin.addEventListener("click", function(){
    body.className ="sign-in-js";
});

btnSignup.addEventListener("click", function(){
    body.className = "sign-up-js";
}
);


    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;
    

    app.post('/', (req,res)=>{
        if(req.body.password == senha  && req.body.login == login){
            req.session.login = login;
    }
        res.render('index');
    })
    
    
    app.get('/', (req,res) => {
    if(req.session.login){
        res.render('formm');
    }else{
        res.render('index');
    }
    })

    app.listen(port,()=>{
    console.log('servidor rodando');
    })