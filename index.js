// * direccion del server
const BASE_URL = 'http://localhost:5000';
// * 
const lista = document.querySelector('#lista');
// const boton = document.querySelector('#boton');

// ! Traer la lista de amigos y crear una lista con el
// ! nombre de cada uno y los pinta en el DOM

// * crea un item (li)
const createListItems = (name) =>  {
  const item = document.createElement('li');
  item.textContent = name;
  return item;
};

  // * eliminar los item de la lista en el DOM
  const deleteNodes = (nodeContainer, items) => {
    items.forEach(item => {
      nodeContainer.removeChild(item);
    })
  }

// * le asigna un valor a cada item y los ingresa dentro 
// * de la lista
const getFriendName = (friends) => {
  const items = document.querySelectorAll('li');
  deleteNodes(lista, items);
  friends.forEach(friend => {
    const name = `${friend.name}`;
    lista.appendChild(createListItems(name));
  });
};

// * metrae la informacion que necesito y pinta los item de la
// * lista en el DOM 
const getFriendsName = () => {
  $.get(`${BASE_URL}/amigos`, getFriendName);

  if(document.querySelectorAll('.loaders').length != 0) {
    const items = document.querySelectorAll('.loaders');
    deleteNodes(image, items);
  }
};

//* Escuchando el evento del click y ejecutando getFriends
boton.addEventListener('click', getFriendsName);

//**************************************************** */

// ! Buscar a un amigo y lo pintarlo en el DOM

// *
// const search = document.querySelector('#search');
// const input = document.querySelector('#input');
// const amigo = document.querySelector('#amigo');

// * busca dentro dentro de la lista de amigos, al amigo que
// * corresponde a id dado y lo pinta en el DOM
const getFriendId = (friends) => {
  friends.forEach(friend => {
    if(friend.id === Number(input.value)) {
      amigo.textContent = friend.name;
    }
  })
}

const getFriendsId = () => {
  $.get(`${BASE_URL}/amigos`, getFriendId);
}

search.addEventListener('click', getFriendsId);

//******************************************************** */

// ! Delete: Eliminar un amigo de la lista

// *
// const inputDelete = document.querySelector('#inputDelete');
const delete_ = document.querySelector('#delete');
// const success = document.querySelector('#success');

const messageDelete = () => {
  getFriendsName();
  success.textContent = 'あなたの友達は正常に削除されました';
}

const deleteFriend = () => {
  $.ajax({
    url: `${BASE_URL}/amigos/${Number(inputDelete.value)}`,
    type: 'Delete',
    success: messageDelete
  })
}

delete_.addEventListener('click', deleteFriend);
