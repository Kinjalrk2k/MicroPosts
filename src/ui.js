class UI {
  constructor() {
    this.post = document.querySelector("#posts");

    // inputs
    this.titleInput = document.querySelector("#title");
    this.bodyInput = document.querySelector("#body");
    this.idInput = document.querySelector("#id");
    this.postSubmit = document.querySelector(".post-submit");
    this.formState = "add";
  }

  showPosts(posts) {
    let output = "";
    posts.forEach((post) => {
      output += `
          <div class="card mb-3">
            <div class="card-body">
              <h4 class="card-title">${post.title}</h4>
              <p class="card-text">${post.body}</p>
              <a href="#" class="edit card-link" data-id="${post.id}"><i class="fas fa-edit"></i></a>
              <a href="#" class="delete card-link" data-id="${post.id}"><i class="fas fa-trash-alt"></i></a>
            </div>
          </div>
        `;
    });

    this.post.innerHTML = output;
  }

  showAlert(message, className) {
    this.clearAlert();

    // create div
    const div = document.createElement("div");
    // add classes
    div.className = className;
    // add text
    div.appendChild(document.createTextNode(message));
    // get parent
    const container = document.querySelector(".postsContainer");
    // get posts
    const posts = document.querySelector("#posts");
    // insert alert div
    container.insertBefore(div, posts);

    // timeout
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  clearAlert() {
    const currentAlert = document.querySelector(".alert");
    if (currentAlert) {
      currentAlert.remove();
    }
  }

  clearIDInput() {
    this.idInput.value = "";
  }

  clearFields() {
    this.titleInput.value = "";
    this.bodyInput.value = "";
  }

  fillForm(data) {
    this.idInput.value = data.id;
    this.titleInput.value = data.title;
    this.bodyInput.value = data.body;

    this.changeFormState("edit");
  }

  changeFormState(type) {
    if (type === "edit") {
      this.postSubmit.textContent = "Update Post";
      this.postSubmit.className = "post-submit btn btn-warning btn-block col-4";

      // cancel button
      const button = document.createElement("button");
      button.className = "post-cancel btn btn-light col-4";
      button.append(document.createTextNode("Cancel Edit"));

      this.postSubmit.insertAdjacentElement("afterend", button);
    } else {
      this.postSubmit.textContent = "Post it!";
      this.postSubmit.className = "post-submit btn btn-success btn-block col-9";

      // remove cancel btn if there
      if (document.querySelector(".post-cancel")) {
        document.querySelector(".post-cancel").remove();
      }

      // clear id from hidden field
      this.clearIDInput();
      this.clearFields();
    }
  }
}

export const ui = new UI();
