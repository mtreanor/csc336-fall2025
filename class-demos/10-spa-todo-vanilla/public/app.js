// public/app.js

// --------------------
// Application state
// --------------------
var state = {
  page: "home",   // "home" | "todos" | "about"
  todos: []       // will be loaded from server
};

// --------------------
// Utility: fetch todos from server
// --------------------
async function loadTodosFromServer() {
  try {
    var response = await fetch("/api/todos");
    if (!response.ok) {
      throw new Error("Network error: " + response.status);
    }
    var result = await response.json();
    // result.todos is expected
    // copy into state.todos explicitly (no fancy map)
    state.todos = [];
    for (var i = 0; i < result.todos.length; i++) {
      var t = result.todos[i];
      state.todos.push({ id: t.id, text: String(t.text), done: Boolean(t.done) });
    }
  } catch (err) {
    console.error("Failed to load todos:", err);
    // leave state.todos as is
  }
}

// --------------------
// Navigation helpers
// --------------------
function setActiveNav() {
  var homeLink = document.getElementById("nav-home");
  var todosLink = document.getElementById("nav-todos");
  var aboutLink = document.getElementById("nav-about");

  homeLink.classList.remove("active");
  todosLink.classList.remove("active");
  aboutLink.classList.remove("active");

  if (state.page === "home") homeLink.classList.add("active");
  else if (state.page === "todos") todosLink.classList.add("active");
  else if (state.page === "about") aboutLink.classList.add("active");
}

function goToPage(pageName) {
  state.page = pageName;
  renderApp();
}

// Attach nav events once (no need to reattach on render)
function attachNavHandlers() {
  var homeLink = document.getElementById("nav-home");
  var todosLink = document.getElementById("nav-todos");
  var aboutLink = document.getElementById("nav-about");

  homeLink.addEventListener("click", function (ev) {
    ev.preventDefault();
    goToPage("home");
  });

  todosLink.addEventListener("click", function (ev) {
    ev.preventDefault();
    goToPage("todos");
  });

  aboutLink.addEventListener("click", function (ev) {
    ev.preventDefault();
    goToPage("about");
  });
}

// --------------------
// Rendering functions (explicit, no fancy helpers)
// --------------------
function renderApp() {
  setActiveNav();
  var content = document.getElementById("content");
  // Clear content
  content.innerHTML = "";

  if (state.page === "home") {
    renderHome(content);
  } else if (state.page === "todos") {
    renderTodosPage(content);
  } else if (state.page === "about") {
    renderAbout(content);
  }
}

// Home
function renderHome(container) {
  var h1 = document.createElement("h1");
  h1.textContent = "Welcome — Vanilla SPA Demo";

  var p = document.createElement("p");
  p.textContent = "This is a handcrafted single page app. Click Todos to see problems we solve manually.";

  container.appendChild(h1);
  container.appendChild(p);
}

// About
function renderAbout(container) {
  var h1 = document.createElement("h1");
  h1.textContent = "About";

  var p = document.createElement("p");
  p.textContent = "We manually update DOM, rebind events, and manage state here. Frameworks reduce this boilerplate.";

  container.appendChild(h1);
  container.appendChild(p);
}

// Todos page
function renderTodosPage(container) {
  var h1 = document.createElement("h1");
  h1.textContent = "Todos";

  // Add form to create todo
  var form = document.createElement("form");
  form.id = "todo-form";

  var input = document.createElement("input");
  input.type = "text";
  input.id = "todo-input";
  input.placeholder = "New todo";
  input.autocomplete = "off";

  var addButton = document.createElement("button");
  addButton.type = "submit";
  addButton.textContent = "Add";

  form.appendChild(input);
  form.appendChild(addButton);

  // Container for the list
  var listContainer = document.createElement("div");
  listContainer.id = "todo-list";

  // Render each todo (explicit loop)
  for (var i = 0; i < state.todos.length; i++) {
    var t = state.todos[i];

    var item = document.createElement("div");
    item.className = "todo";
    if (t.done) item.classList.add("done");
    item.setAttribute("data-id", String(t.id));

    // text
    var span = document.createElement("span");
    span.className = "text";
    span.textContent = t.text;

    // toggle button
    var toggleBtn = document.createElement("button");
    toggleBtn.className = "toggle-btn";
    toggleBtn.textContent = t.done ? "Undo" : "Done";
    toggleBtn.setAttribute("data-action", "toggle");
    toggleBtn.setAttribute("data-id", String(t.id));

    // delete button
    var delBtn = document.createElement("button");
    delBtn.className = "delete-btn";
    delBtn.textContent = "Delete";
    delBtn.setAttribute("data-action", "delete");
    delBtn.setAttribute("data-id", String(t.id));

    item.appendChild(span);
    item.appendChild(toggleBtn);
    item.appendChild(delBtn);

    listContainer.appendChild(item);
  }

  // Show a message if empty
  if (state.todos.length === 0) {
    var emptyP = document.createElement("p");
    emptyP.textContent = "No todos. Add one!";
    listContainer.appendChild(emptyP);
  }

  container.appendChild(h1);
  container.appendChild(form);
  container.appendChild(listContainer);

  // After we re-render the list, we must attach event listeners for form submit.
  // Note: if we attached per-item buttons here, they would be lost on the next render.
  attachTodoFormHandler();
  // We do NOT attach per-item handlers here — see delegation below.
}

// --------------------
// Form handler (explicit)
function attachTodoFormHandler() {
  var form = document.getElementById("todo-form");
  if (!form) return;

  // Remove previous listener if any to avoid duplicate handlers
  // (We check and remove—demonstrates a pattern teams sometimes use.)
  if (form._attached) return;
  form._attached = true;

  form.addEventListener("submit", async function (ev) {
    ev.preventDefault();
    var input = document.getElementById("todo-input");
    var text = input.value.trim();
    if (text === "") return;

    // POST to server (explicit fetch)
    try {
      var res = await fetch("/api/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: text })
      });
      if (!res.ok) {
        console.error("Failed to create todo", res.status);
      } else {
        // reload list from server (explicit)
        await loadTodosFromServer();
        // clear input
        input.value = "";
        // re-render app
        renderApp();
      }
    } catch (err) {
      console.error("Network error while creating todo:", err);
    }
  });
}

// --------------------
// Event delegation for list actions
//
// Instead of attaching click listeners to each button (and then losing them
// when we re-render the list), we attach a single listener to the parent container.
// --------------------
function attachListDelegation() {
  var listContainer = document.getElementById("content"); // attach high-level
  if (!listContainer) return;

  // Avoid attaching multiple times
  if (listContainer._delegationAttached) return;
  listContainer._delegationAttached = true;

  listContainer.addEventListener("click", async function (ev) {
    // Walk up from the clicked node until we find something with data-action
    var node = ev.target;
    while (node && node !== listContainer) {
      if (node.nodeType === 1 && node.hasAttribute && node.getAttribute("data-action")) {
        var action = node.getAttribute("data-action");
        var idStr = node.getAttribute("data-id");
        var id = Number(idStr);
        if (action === "toggle") {
          // call toggle endpoint
          try {
            var res = await fetch("/api/todos/" + id + "/toggle", { method: "PUT" });
            if (res.ok) {
              await loadTodosFromServer();
              renderApp();
            } else {
              console.error("Toggle failed", res.status);
            }
          } catch (err) {
            console.error("Network error toggling", err);
          }
          return;
        } else if (action === "delete") {
          try {
            var res = await fetch("/api/todos/" + id, { method: "DELETE" });
            if (res.ok) {
              await loadTodosFromServer();
              renderApp();
            } else {
              console.error("Delete failed", res.status);
            }
          } catch (err) {
            console.error("Network error deleting", err);
          }
          return;
        }
      }
      node = node.parentNode;
    }
  });
}

// --------------------
// Boot: load data, attach nav, attach delegation, initial render
// --------------------
async function boot() {
  attachNavHandlers();      // attach nav once
  attachListDelegation();   // attach delegation once
  await loadTodosFromServer();
  renderApp();
}

// Start the app
boot();
