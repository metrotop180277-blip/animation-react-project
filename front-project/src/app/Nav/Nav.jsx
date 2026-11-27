// src/components/Nav.jsx
import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // ✅ useNavigate для перехода
import handbag from '../../assets/MainPageImage/Handbag.png';

// Список подсказок
const SUGGESTIONS = [
  'Burger', 'Pizza', 'Salad', 'Drink', 'Dessert',
  'Sandwich', 'Chicken', 'Soup', 'Pasta', 'Sushi'
];

export default function Nav() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef(null);
  const suggestionsRef = useRef(null);

  const navigate = useNavigate(); // ✅ для программного перехода

  // Фильтрация подсказок
  const filteredSuggestions = SUGGESTIONS.filter(s =>
    s.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Показ/скрытие подсказок
  useEffect(() => {
    if (searchQuery.trim() && filteredSuggestions.length > 0) {
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  }, [searchQuery, filteredSuggestions]);

  // Закрытие подсказок при клике вне
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(e.target) &&
        suggestionsRef.current &&
        !suggestionsRef.current.contains(e.target)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Обработчик нажатия клавиш
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const query = searchQuery.trim();
      if (query) {
        // ✅ Переход на /menu с параметром поиска
        navigate(`/menu?search=${encodeURIComponent(query)}`);
        setShowSuggestions(false);
      }
    }
  };

  // Выбор подсказки
  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    // ✅ Сразу переходим на страницу меню с параметром поиска
    navigate(`/menu?search=${encodeURIComponent(suggestion)}`);
    setShowSuggestions(false);
  };

  return (
    <nav className="header-glav-nav">
      <div className="header-nav">
        <ul className="nav-lists">
          <li className="nav-list">
            <Link className="nav-list-link" to="/">Home</Link>
          </li>
          <li className="nav-list">
            <Link className="nav-list-link" to="/menu">Menu</Link>
          </li>
          <li className="nav-list">
            <Link className="nav-list-link" to="/blog">Blog</Link>
          </li>
          <li className="nav-list">
            <Link className="nav-list-link" to="/page">Pages</Link>
          </li>
          <li className="nav-list">
            <Link className="nav-list-link" to="/about">About</Link>
          </li>
          <li className="nav-list">
            <Link className="nav-list-link" to="/shop">Shop</Link>
          </li>
          <li className="nav-list">
            <Link className="nav-list-link" to="/contact">Contact</Link>
          </li>
        </ul>

        {/* === ТВОЯ ИСХОДНАЯ РАЗМЕТКА ПОИСКА === */}
        <div className="input-wrapper">
          <input
            ref={inputRef}
            className="poisk"
            type="text"
            placeholder="     Search...."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown} // ✅ ловим Enter
          />
          {/* Подсказки — абсолютно позиционированные, не ломают layout */}
          {showSuggestions && (
            <div
              ref={suggestionsRef}
              className="suggestions"
              style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                width: '100%',
                background: 'transparent',
                border: '1px solid transparent',
                borderRadius: '4px',
                zIndex: 1000,
                maxHeight: '180px',
                overflowY: 'auto',
                marginTop: '2px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              }}
            >
              {filteredSuggestions.map((item, i) => (
                <div
                  key={i}
                  onClick={() => handleSuggestionClick(item)}
                  style={{
                    padding: '8px 12px',
                    cursor: 'pointer',
                    borderBottom: '1px solid transparent',
                  }}
                  onMouseEnter={(e) => (e.target.style.background = 'transparent')}
                  onMouseLeave={(e) => (e.target.style.background = 'transparent')}
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>

        <img
          className="header-poisk-decoration"
          src={handbag}
          alt="Сумочка"
          width="15"
          height="15"
        />
      </div>
    </nav>
  );
}