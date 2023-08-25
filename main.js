const url = "https://jsonplaceholder.typicode.com/users";
const cards = document.querySelector(".cards");

// console.log(axios.get(url).then((res) => res.json()));

// const fetchData = async () => {
//   const res = await fetch(url);
//   const data = await res.json();
//   console.log(data);
//   appData(data);
// };

const appData = (data) => {
  data.map((dataItem) => {
    const content = `<div class="card">
    <h1>Name: ${dataItem.name}</h1>
    <h2>username:${dataItem.username} </h2>
    <h4>email:${dataItem.email} </h4>
    <p>website: ${dataItem.website}</p>
  </div>
    `;
    cards.innerHTML += content;
  });
};
// fetchData();

// async function getData() {
//   const res = await axios.get(url);
//   const { data } = await res;
//   console.log(data);
//   appData(data);
// }
// getData();

// const { data } = await axios.get(url);

// console.log(data);
