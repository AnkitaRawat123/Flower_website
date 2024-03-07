const search = () => {
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeitems = document.getElementById("product-list");
    const product = document.querySelectorAll(".product");
    const pname = storeitems.getElementsByTagName("h3");

    for (var i = 0; i < pname.length; i++) {
        let match = product[i].getElementsByTagName('h3')[0];
        if (match) {
            let textvalue = match.textContent || match.innerHTML;
            if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
                product[i].style.display = "";
            } else {
                product[i].style.display = "none";
            }
        }
    }
}


function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "ankitarawat094@gmail.com",
        Password : "9412161367",
        To : 'ankitarawat094@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Enquiry",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}


//                                                      Api


let ul = document.querySelector('ul');

// XMLHttpsRequest -- methods 1
let req = new XMLHttpRequest();

// CONNECTION BANA HAI BASICALLY
// req.open('GET' , 'https://inshorts.deta.dev/news?category=science');
req.open('GET' , 'https://inshorts.deta.dev/news?category=entertainment')

// BHEJNI HAI APNI REQUEST/DEMAND
req.send();

// jab sahi salamat data mile or jab saara kaam sahi se hojaae 
req.onload = function(){
    // console.log(this , 'SAM');
    let samachaar = JSON.parse(this.response);
    // console.log(samachaar);
    for(let d of samachaar.data){
        let li = document.createElement('li');
        li.innerHTML = `
            <img src=${d.imageUrl} height="100px" />
            <span>${d.title}</span>
        `
        ul.appendChild(li);
    }
}

// lekin agar erorr aaya to 
req.onerror = function(){
    console.log(this);
}