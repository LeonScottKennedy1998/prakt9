let batons = [];

function addBaton() {
  const nameInput = document.getElementById('name');
  const typeInput = document.getElementById('type');
  const priceInput = document.getElementById('price');

  const name = nameInput.value.trim();
  const type = typeInput.value.trim();
  const price = parseFloat(priceInput.value);

  if (name && type && !isNaN(price) && price > 0) {
    const newBaton = { name, type, price };
    batons.push(newBaton);
    renderBatons();
    
    nameInput.value = '';
    typeInput.value = '';
    priceInput.value = '';
  } else {
    alert('Пожалуйста, введите корректные данные для батона.');
  }
}

function renderBatons() {
  const batonList = document.getElementById('baton-list');
  batonList.innerHTML = '';
  batons.forEach((baton, index) => {
    const batonItem = document.createElement('div');
    batonItem.innerHTML = `<strong>${baton.name}</strong> - ${baton.type}, Цена: ${baton.price} руб. 
                          <button onclick="editBaton(${index})">Изменить</button>
                          <button onclick="deleteBaton(${index})">Удалить</button>`;
    batonList.appendChild(batonItem);
  });
}

function editBaton(index) {
  const editedName = prompt('Введите новое название батона:');
  const editedType = prompt('Введите новый тип батона:');
  const editedPrice = parseFloat(prompt('Введите новую цену батона:'));

  if (editedName && editedType && !isNaN(editedPrice) && editedPrice > 0) {
    batons[index].name = editedName;
    batons[index].type = editedType;
    batons[index].price = editedPrice;
    renderBatons();
  } else {
    alert('Пожалуйста, введите корректные данные для батона.');
  }
}

function deleteBaton(index) {
  if (confirm('Вы уверены, что хотите удалить этот батон?')) {
    batons.splice(index, 1);
    renderBatons();
  }
}


renderBatons();
