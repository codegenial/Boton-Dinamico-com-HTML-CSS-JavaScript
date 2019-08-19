const dell = document.querySelector('h1');
dell.addEventListener('click', updateName);

function updateName() {
    let name =prompt('Ingresa un nuevo nombre');
        dell.textContent = 'Nombre : ' + name;
}