document.addEventListener("DOMContentLoaded", () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const imageContainer = document.getElementById("dog-image-container");
  
    fetch(imgUrl)
      .then(response => response.json())
      .then(data => {
        data.message.forEach(imgUrl => {
          const imgElement = document.createElement("img");
          imgElement.src = imgUrl;
          imgElement.alt = "Random Dog";
          imgElement.style.width = "200px";  
          imgElement.style.margin = "10px"; 
          imageContainer.appendChild(imgElement);
        });
      })
      .catch(error => {
        console.error("Error fetching images:", error);
      });
  });
  