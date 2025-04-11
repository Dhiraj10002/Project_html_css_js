const form = document.querySelector('form');

form.addEventListener('submit' , function (e) {
     e.preventDefault();

const height = parseInt(document.querySelector('#height').value);
const weight = parseInt(document.querySelector('#weight').value);
const results = this.querySelector('#results');
const weight_guide = this.querySelector('#weight_guide')

if(height === '' || height <0 || isNaN(height)){
    results.innerHTML = `Please give a valid height ${height}`;
}
else if(weight === '' || weight <0 || isNaN(weight)){
    results.innerHTML = ` Please give a valid wight ${weight}`;
}
else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
   // show the results
   results.innerHTML = `<span>${bmi}</span>`;
}

});


// try to create weight guide but not succeed may be i try later or someday