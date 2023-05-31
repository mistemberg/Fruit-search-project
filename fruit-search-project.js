const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = [
  'Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant',
  'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry',
  'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba',
  'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango',
  'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine',
  'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon',
  'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant',
  'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'
];

//Function to filter the fruits based on user input
function search(str) { // str = ''
  let results = [];
  if (str === ''){
	return [];
  }

  results = fruit.filter(fruitName => {
    const lowercaseFruit = fruitName.toLowerCase();
    const lowercaseInput = str.toLowerCase();
    return lowercaseFruit.includes(lowercaseInput);
  });
  return results;
}

//function to update the suggestions list with the filters fruits
function showSuggestions(suggestedFruits) {
  suggestions.innerHTML = '';
  suggestedFruits.forEach(fruit => {
    const li = document.createElement('li');
    li.textContent = fruit;
    suggestions.appendChild(li);
  });
}

// Function to handle the user selecting a suggestion
function useSuggestion(e) {
  const selectedFruit = e.target.textContent;
  input.value = selectedFruit;
  suggestions.innerHTML = '';
}

//function to handle user input and update suggestions accordingly 
function searchHandler(e) {
  const userInput = e.target.value;
  const searchResults = search(userInput);
  showSuggestions(searchResults);
}

input.addEventListener('input', searchHandler);
suggestions.addEventListener('click', useSuggestion);
