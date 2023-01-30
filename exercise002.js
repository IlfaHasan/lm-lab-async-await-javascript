import fetch from "node-fetch";

const jsonTypicode = "https://jsonplaceholder.typicode.com/todos/1";

/*const fetchData = (apiEndPoint) => {
  fetch(apiEndPoint)
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.log(error));
};*/

const fetchDataWithAsync = async (apiEndPoint) => {
  try {
    const response = await fetch(apiEndPoint);
    //console.log(response);
    const responseJson = await response.json();
    console.log(responseJson);
  } catch (error) {
    console.log(error);
  }
};

const jsonCat="https://api.thecatapi.com/v1/images/0XYvRd7oD";

fetchDataWithAsync(jsonTypicode);
fetchDataWithAsync(jsonCat); //get data
