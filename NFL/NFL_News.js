document.addEventListener("DOMContentLoaded", () => {
  fetch("news.json")
    .then(response => response.json())
    .then(data => renderNews(data))
    .catch(error => console.error("Error loading news:", error));
});

function renderNews(data) {
  const container = document.getElementById("news-container");
  container.innerHTML = "";

  data.sections.forEach(section => {
    const sectionTitle = document.createElement("h2");
    sectionTitle.className = "section-title";
    sectionTitle.textContent = section.title;
    container.appendChild(sectionTitle);

    section.articles.forEach(article => {
      const card = document.createElement("div");
      card.className = "news-card";

      const imageHTML = article.image
        ? `<img src="${article.image}" alt="${article.headline}" class="news-img">`
        : "";

      card.innerHTML = `
        ${imageHTML}
        <div class="news-text">
          <h2>${article.headline}</h2>
          <div class="news-meta">${article.date} — ${article.source}</div>
          <p>${article.content.replace(/\n/g, "<br>")}</p>
        </div>
      `;

      container.appendChild(card);
    });
  });
}
