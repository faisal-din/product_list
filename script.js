const searchBox = document.getElementById('search-item');

searchBox.addEventListener('keyup', search);
function search() {
  const searchValue = searchBox.value.toUpperCase();
  const storeItems = document.getElementById('product-list');

  const product = document.querySelectorAll('.product');
  const productName = storeItems.getElementsByTagName('h2');

  for (let i = 0; i < productName.length; i++) {
    let match = product[i].getElementsByTagName('h2')[0];

    if (match.innerHTML.toUpperCase().indexOf(searchValue) > -1) {
      product[i].style.display = 'block';
    } else {
      product[i].style.display = 'none';
    }
  }
}


