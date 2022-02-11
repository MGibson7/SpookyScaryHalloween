const inputs = document.querySelectorAll("input");

const patterns = {
    username: /^[\da-z]{5,12}$/i,
    telephone:/^\d{11}$/,
    password:/^[\w@_-]{8,20}$/,
    slug: /^[a-z\d-]{8,20}$/,
    email: /^[\w-\.]+@[\w-]+\.[a-z\d]{2,8}(\.[\w-]{2,8})?$/i


};


function validate (field, regex){
    //checking if regex is true or false
    if(regex.test(field.value)){    
        field.className = 'valid';
    }
    else {
        field.className = 'invalid';
    }
}

inputs.forEach((input) => {

    input.addEventListener('keyup',(e) => {

        //console.log(e.target.attributes.name.value);
        validate(e.target,patterns[e.target.attributes.name.value])



    });


});

