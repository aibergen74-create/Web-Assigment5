
const userProfile = {
    name: "Aibergen Amanzhol",
    birthYear: 2006,
    isDeveloper: true,
    hobbies: ["football", "music", "gaming"]
};

console.log(userProfile);
console.log("Name:", userProfile.name);
console.log("Birth year:", userProfile.birthYear);
console.log("Is developer:", userProfile.isDeveloper);
console.log("Hobbies:", userProfile.hobbies);

console.log(typeof userProfile.name);
console.log(typeof userProfile.birthYear);
console.log(typeof userProfile.isDeveloper);
console.log(Array.isArray(userProfile.hobbies));


const currentYear = new Date().getFullYear();
const age = currentYear - userProfile.birthYear;
const months = age * 12;
const hobbiesCount = userProfile.hobbies.length;

console.log("Current year:", currentYear);
console.log("Age:", age);
console.log("Months old:", months);
console.log("Hobbies count:", hobbiesCount);

document.getElementById("ageText").textContent = "Age: " + age;
document.getElementById("monthsText").textContent = "Months old: " + months;
document.getElementById("hobbiesText").textContent = "Hobbies count: " + hobbiesCount;


const form = document.getElementById("profileForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const newName = document.getElementById("username").value;
    const newYear = document.getElementById("birthYear").value;

    if (newName === "" || newYear === "") {
        alert("Please fill in all fields");
        return;
    }

    userProfile.name = newName;
    userProfile.birthYear = Number(newYear);

    const newAge = currentYear - userProfile.birthYear;
    const newMonths = newAge * 12;

    console.log("Profile updated:", userProfile);
    console.log("New age:", newAge);

    document.getElementById("ageText").textContent = "Age: " + newAge;
    document.getElementById("monthsText").textContent = "Months old: " + newMonths;
});


const list = document.getElementById("hobbyList");
const newItemInput = document.getElementById("newItem");
const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");

addBtn.addEventListener("click", function () {
    const text = newItemInput.value;

    if (text === "") {
        alert("Please enter an item");
        return;
    }

    const li = document.createElement("li");
    li.textContent = text;
    list.appendChild(li);

    newItemInput.value = "";
    console.log("Item added:", text);
});

removeBtn.addEventListener("click", function () {
    const lastItem = list.lastElementChild;

    if (lastItem === null) {
        alert("The list is empty");
        return;
    }

    list.removeChild(lastItem);
    console.log("Last item removed");
});