function search(query) {
  if (!query || !query.trim()) return;
  const url = `https://www.bing.com/search?q=${encodeURIComponent(query)}`;
  window.location.href = url;
}

function updateTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  const timeElement = document.getElementById('currentTime');
  if (timeElement) {
    timeElement.textContent = `${hours}:${minutes}:${seconds}`;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  const popupSearchInput = document.getElementById('popupSearchInput');
  const searchBtn = document.getElementById('searchBtn');
  const popupSearchBtn = document.getElementById('popupSearchBtn');

  if (searchInput) {
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        search(searchInput.value);
      }
    });
  }

  if (popupSearchInput) {
    popupSearchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        search(popupSearchInput.value);
      }
    });
  }

  if (searchBtn) {
    searchBtn.addEventListener('click', () => {
      search(searchInput?.value || popupSearchInput?.value);
    });
  }

  if (popupSearchBtn) {
    popupSearchBtn.addEventListener('click', () => {
      search(popupSearchInput?.value || searchInput?.value);
    });
  }

  updateTime();
  setInterval(updateTime, 1000);
});