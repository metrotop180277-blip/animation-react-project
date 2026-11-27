document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.querySelector(".poisk");

  if (searchInput) {
    searchInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        const query = this.value.trim();
        const url = new URL("./index1.html", window.location);
        if (query) {
          url.searchParams.set("search", query);
        }
        window.location.href = url.toString();
      }
    });
  }
});



document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.poisk');
    let suggestionsBox = null;

    // Возможные подсказки (в реальном проекте это может приходить с сервера)
    const suggestions = [
        'Burger',
        'Pizza',
        'Salad',
        'Drink',
        'Dessert',
        'Sandwich',
        'Chicken',
        'Soup',
        'Pasta',
        'Sushi'
    ];

    // Функция для отображения подсказок
    function showSuggestions(matches) {
        if (!suggestionsBox) {
            suggestionsBox = document.createElement('div');
            suggestionsBox.className = 'suggestions';
            suggestionsBox.style.cssText = `
                position: absolute;
                background: rgba(0, 0, 0, 0);
                border-top: none;
                max-height: 200px;
                overflow-y: auto;
                z-index: 1000;
                width: calc(100% - 30px);
            `;
            searchInput.parentNode.insertBefore(suggestionsBox, searchInput.nextSibling);
        }

        if (matches.length === 0) {
            suggestionsBox.style.display = 'none';
            return;
        }

        suggestionsBox.innerHTML = '';
        suggestionsBox.style.display = 'block';

        matches.forEach(item => {
            const div = document.createElement('div');
            div.textContent = item;
            div.style.padding = '10px';
            div.style.cursor = 'pointer';
            div.style.transition = 'background 0.2s';
            div.addEventListener('mouseenter', () => div.style.background = 'rgba(0, 0, 0, 0)');
            div.addEventListener('mouseleave', () => div.style.background = 'rgba(0, 0, 0, 0)');
            div.addEventListener('click', () => {
                searchInput.value = item;
                suggestionsBox.style.display = 'none';
            });
            suggestionsBox.appendChild(div);
        });
    }

    // Обработчик ввода
    searchInput.addEventListener('input', () => {
        const input = searchInput.value.trim().toLowerCase();
        if (input === '') {
            if (suggestionsBox) suggestionsBox.style.display = 'none';
            return;
        }

        const matches = suggestions.filter(s => s.toLowerCase().includes(input));
        showSuggestions(matches);
    });

    // Закрыть подсказки при клике вне поля
    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && suggestionsBox && !suggestionsBox.contains(e.target)) {
            suggestionsBox.style.display = 'none';
        }
    });
});