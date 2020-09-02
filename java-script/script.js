var theadEle = document.querySelector("thead");
var tbodyEle = document.querySelector("tbody");
var thead1 = document.createElement("th");
var thead2 = document.createElement("th");
var thead3 = document.createElement("th");
var thead4 = document.createElement("th");
var thead5 = document.createElement("th");
var thead6 = document.createElement("th");

thead1.textContent = "id"
thead2.textContent = "name"
thead3.textContent = "email"
thead4.textContent = "phone"
thead5.textContent = "website"
thead6.textContent = "Username"

theadEle.append(thead1)
theadEle.append(thead2)
theadEle.append(thead3)
theadEle.append(thead4)
theadEle.append(thead5)
theadEle.append(thead6)


fetch("https://jsonplaceholder.typicode.com/users").then((data) => data.json()).then(function (item) {
const userArray=item;
console.log(userArray)
console.log(userArray[0].id);

for(var i=0;i<userArray.length;i++)
{
    var trEle1 = document.createElement("tr");
    var thEle1 = document.createElement("td");
    var thEle2 = document.createElement("td");
    var thEle3 = document.createElement("td");
    var thEle4 = document.createElement("td");
    var thEle5 = document.createElement("td");
    var thEle6 = document.createElement("td");



    thEle1.textContent = userArray[i].id;
    thEle2.textContent = userArray[i].name;
    thEle3.textContent = userArray[i].email;
    thEle4.textContent = userArray[i].phone;
    thEle5.textContent = userArray[i].website;
    thEle6.textContent = userArray[i].username;



    trEle1.append(thEle1);
    trEle1.append(thEle2);
    trEle1.append(thEle3);
    trEle1.append(thEle4);
    trEle1.append(thEle5);
    trEle1.append(thEle6);

    tbodyEle.append(trEle1);
    



}

});

