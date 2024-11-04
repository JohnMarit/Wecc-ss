const client = contentful.createClient({
    space: 'qj4ec65i8wxw',
    accessToken: 'l7Trovyyq40hxtVrqnj5J0_rB4v9aDfB3HPO6Stt5WU'
  });


  async function displayPosts() {
    const posts = await fetchBlogPosts();
    const blogSection = document.getElementById("blog");
  
    posts.forEach(post => {
      const postElement = document.createElement("div");
      postElement.className = "blog-post";
      postElement.innerHTML = `
        <h2>${post.fields.title}</h2>
        <p>${post.fields.body}</p>
      `;
      blogSection.appendChild(postElement);
    });
  }
  
  displayPosts();
  