document.querySelector('.card-numer').oninput = () =>{
    document.querySelector('.numer-card').innerText = document.querySelector('.card-numer').value;
}

document.querySelector('.card-holder').oninput = () =>{
    document.querySelector('.holder-card-name').innerText = document.querySelector('.card-holder').value;
}

document.querySelector('.month').oninput = () =>{
    document.querySelector('.ex-month').innerText = document.querySelector('.month').value;
}



document.querySelector('.year').oninput = () =>{
    document.querySelector('.ex-year').innerText = document.querySelector('.year').value;
}

