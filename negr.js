const btn = document.getElementById("btn");
const limit = document.getElementById("input");
const son = document.getElementById("input_2");
const allusers = document.getElementById("all-user");
const users = document.getElementById("filter-user");

btn.addEventListener("click", () => {
  if (son.value > 0 && limit.value > 0) {
    fetch(`https://dummyjson.com/users?limit=${limit.value}&skip`)
      .then((res) => res.json())
      .then((json) => userChizish(json.users));
  } else {
    alert("0 dan katta son kiriting");
  }
});

function userChizish(userlar) {
  for (let i = 0; i < userlar.length; i++) {
    const div = document.createElement("div");
    const ismi = document.createElement("h2");
    const email = document.createElement("h3");
    const manzil = document.createElement("p");
    const yosh = document.createElement("h2");
    const tel = document.createElement("p");
    const birth = document.createElement("p");

    ismi.textContent = userlar[i].firstName + " " + userlar[i].lastName;
    email.textContent = "Email: " + userlar[i].email;
    manzil.textContent = "Address: " + userlar[i].address.address;
    yosh.textContent = "Yoshi: " + userlar[i].age;
    tel.textContent = "Telefon: " + userlar[i].phone;
    birth.textContent = "Birthday: " + userlar[i].birthday;

    div.classList.add("user");
    div.appendChild(ismi);
    div.appendChild(email);
    div.appendChild(manzil);
    div.appendChild(yosh);
    div.appendChild(tel);
    div.appendChild(birth);

    allusers.appendChild(div);
    if(limit.value<userlar[i].age){
        users.appendChild(div);
    }
  }
}
