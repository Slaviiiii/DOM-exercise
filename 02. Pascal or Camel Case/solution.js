function solve() {
  let text = document.getElementById('text').value;
  let textCase = document.getElementById('naming-convention').value;
  let result = '';
  if (textCase != 'Camel Case' && textCase != 'Pascal Case') {
    return document.getElementById('result').textContent = 'Error!';
  }
  let words = text.split(/(\s+)/).filter(x => x != ' ');
  for (let index = 0; index < words.length; index++) {
    words[index] = words[index].toLowerCase()
    if (index != 0 || textCase == 'Pascal Case') {
      words[index] = words[index].charAt(0).toUpperCase() + words[index].substring(1);
    }
  }
  result = words.join('');
  document.getElementById('result').textContent = result;
}