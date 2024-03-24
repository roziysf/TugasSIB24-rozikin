function goToForm() {
  window.location.href = "formapi.html"; // Mengalihkan ke halaman formulir
}

async function fetchPosts() {
  try {
    const response = await fetch(
      "https://crudcrud.com/api/2752d172c18b45428bf8355602c6c64d/posts/"
    );
    const data = await response.json();

    const postsContainer = document.getElementById("items");
    postsContainer.innerHTML = "";

    data.forEach((post) => {
      const postElement = document.createElement("div");
      postElement.classList.add("item");
      postElement.innerHTML = `
                        <img src="${post.image}" alt="${post.name}">
                        <h4>${post.name}</h4>
                        <p>${post.price}</p>
                        <button onclick="deletePost('${post._id}')">Delete</button>
                        <a href="editapi.html?id=${post._id}&name=${post.name}&price=${post.price}&image=${post.image}"><button>Edit</button></a>
                    `;
      postsContainer.appendChild(postElement);
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}

async function deletePost(postId) {
  try {
    const response = await fetch(
      "https://crudcrud.com/api/2752d172c18b45428bf8355602c6c64d/posts/" +
        postId,
      {
        method: "DELETE",
      }
    );

    if (response.ok) {
      console.log("Post deleted successfully");
      fetchPosts(); // Memuat ulang daftar produk setelah penghapusan berhasil
    } else {
      console.error("Error deleting post:", response.status);
    }
  } catch (error) {
    console.error("Error deleting post:", error);
  }
}

// Fetch posts when the page loads
fetchPosts();

// Javascript file formapi.html
const baseURL = "https://crudcrud.com/api/2752d172c18b45428bf8355602c6c64d"; // Ganti dengan URL API dan API key Anda

document
  .getElementById("input-form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const image = document.getElementById("image").value;

    try {
      const response = await fetch(baseURL + "/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, price, image }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log("Data added:", data);
        alert("Data berhasil ditambahkan!");
        document.getElementById("input-form").reset(); // Reset form after successful submission
      } else {
        throw new Error("Failed to add data");
      }
    } catch (error) {
      console.error("Error adding data:", error);
      alert("Terjadi kesalahan saat menambahkan data!");
    }
  });

//   javascript editapi.html
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const name = params.get("name");
const price = params.get("price");
const image = params.get("image");

document.getElementById("id").value = id;
document.getElementById("name").value = name;
document.getElementById("price").value = price;
document.getElementById("image").value = image;


document
  .getElementById("edit-form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const newName = document.getElementById("name").value;
    const newPrice = document.getElementById("price").value;
    const newImage = document.getElementById("image").value;

    try {
      const response = await fetch(baseURL + "/posts/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: newName,
          price: newPrice,
          image: newImage,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log("Data updated:", data);
        alert("Data berhasil diperbarui!");
      } else {
        throw new Error("Failed to update data");
      }
    } catch (error) {
      console.error("Error updating data:", error);
      alert("Terjadi kesalahan saat memperbarui data!");
    }
  });
