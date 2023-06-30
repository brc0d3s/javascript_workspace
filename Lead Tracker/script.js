const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const listEl = document.getElementById("list-el");
let myLeads = [];

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  renderLead();
});

function renderLead() {
  let listItem = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItem += `
     <li>
        <a href='${myLeads[i]}' target='_blank'>
        ${myLeads[i]}
        </a> 
     </li>
    `;
  }
  listEl.innerHTML = listItem;
}
