console.log("Hello world");
const inputFild = document.querySelector("#inputFild");
const inputForm = document.querySelector(".inputForm");
const todo_contentsUL = document.querySelector(".todo_contents ul");
const popup_box_for_alart = document.querySelector(".popup_box_for_alart");
// const popup_h2 = document.querySelector(".popup_box_for_alart");
let li = document.createElement("li");

inputForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const task = inputFild.value.trim();

  if (task === "") {
    let h3ForPopupConent = document.createElement("h3");
    let popRemove = document.createElement("button");
    popRemove.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    h3ForPopupConent.textContent = "task will be connt empty";
    popup_box_for_alart.appendChild(h3ForPopupConent);
    popup_box_for_alart.appendChild(popRemove);
    popRemove.addEventListener("click", () => {
      popup_box_for_alart.classList.remove("popup_active");
      popup_box_for_alart.removeChild(h3ForPopupConent);
      popup_box_for_alart.removeChild(popRemove);
    });

    popup_box_for_alart.classList.add("popup_active");
    console.log(popup_box_for_alart);
    return;
  }

  const li = document.createElement("li");
  const taskTitle = document.createElement("h3");
  taskTitle.textContent = task;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(taskTitle);
  li.appendChild(removeBtn);

  todo_contentsUL.appendChild(li);

  inputFild.value = "";
});
