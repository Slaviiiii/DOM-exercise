function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   let elementList = document.querySelectorAll('tbody tr');
   let searchText = document.getElementById('searchField');

   function onClick() {
      for (let element of elementList) {
         element.classList.remove('select');
         if (element.innerHTML.includes(searchText.value)) {
            element.className = 'select';
         }
      }
   }
}