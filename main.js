let cards = document.querySelector(".cards");

async function fetchComments() {
  try {
      // Fetch API
      let response = await fetch('https://jsonplaceholder.typicode.com/comments');
      
      // Check if the response is OK (status 200-299)
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      
      // Jsonga o'tqazish
      let comments = await response.json();
      
      // 20 commentni ko'rsatish
      displayComments(comments.slice(0, 20));
  } catch (error) {
      // error ushlab olish
      console.error('Fetch error:', error);
  }
}

// komentlarni ko'rsatish
function displayComments(comments) {
  comments.forEach(comment => {
      let card = document.createElement("div");
      card.className = "card"

      let id = document.createElement("h2");
      id.innerHTML = `id: ${comment.id}`

      let name = document.createElement("h3");
      name.innerHTML = `name: ${comment.name}`

      let email = document.createElement("h3")
      email.innerHTML = `email: ${comment.email}`

      let body = document.createElement("p");
      body.innerHTML = `body: ${comment.body}`
      
      card.appendChild(id);
      card.append(name);
      card.append(email);
      card.append(body);
      cards.appendChild(card);


  });
}

// Call the fetchComments function to initiate fetching and displaying comments
fetchComments();