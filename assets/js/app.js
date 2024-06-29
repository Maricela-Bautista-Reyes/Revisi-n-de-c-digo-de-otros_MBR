const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
// Se corrige el selector de name
const $n = document.querySelector('#name');
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');

//Se corrige la función displayUser como async. Para poder usar await dentro de la función.
async function displayUser(username) {
  $n.textContent = 'cargando...';
  //Usa try-catch dentro de la función displayUser para manejar errores, 
  //y así evitar tener que usar .catch(handleError) al llamar la función.
  try {
  const response = await fetch(`${usersEndpoint}/${username}`);
  if (!response.ok) throw new Error('Network response was not ok');
  //Esperar la respuesta de la solicitud: 
  //Se necesitas convertir la respuesta a JSON.
  const data = await response.json();
  console.log(data);
 
  //Remover las comillas simples 
  $n.textContent = `${data.name}`;
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`;
} catch (error) {
  handleError(error);
}
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err.message}`
}

displayUser('stolinski');
//.catch(handleError);