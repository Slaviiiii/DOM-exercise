function search() {
   let towns = document.querySelectorAll('ul#towns li');
   let result = document.getElementById('result');
   let searchText = document.getElementById('searchText').value;
   let matches = 0;

   for (let element of towns) {
      element.style.fontWeight = 'normal';
      element.style.textDecoration = '';
   }

   for (let element of towns) {
      let text = element.textContent;
      if (text.match(searchText)) {
         matches++;
         element.style.fontWeight = 'bold';
         element.style.textDecoration = 'underline';
      }
   }
   result.textContent = `${matches} matches found`;
   console.log(matches);
}