let items = document.querySelectorAll(".items"),
  score = document.querySelectorAll(".bold--score"),
  icon=document.querySelectorAll("img");

async function fetchdata() {
  try {
    const response = await fetch("data.json");
    const data = await response.json();
    console.log(data);
   
    for (let index = 0; index < data.length; index++) {
      items[index].textContent = data[index].category;
      score[index].textContent= data[index].score;
      icon[index].src=data[index].icon;
    }
  } catch (err) {
    console.log(err);
  }
}
fetchdata()
