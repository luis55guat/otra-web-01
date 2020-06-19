/* busca la clase en el index y la guarda en la constante */
const btntoggle = document.querySelector('.toggle-btn');
/* escucha el evento click de la clase almacenada en la constante */
btntoggle.addEventListener('click',function(){
    /* agrega o quita una clase a un elemento */
    document.getElementById('sidebar').classList.toggle('active');
})