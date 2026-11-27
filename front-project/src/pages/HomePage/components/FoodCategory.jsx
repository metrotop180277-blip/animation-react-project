// src/components/FoodCategory.jsx
import React, { useState, useEffect, useRef } from 'react';
import vkus1 from '../../../assets/MainPageImage/vkus1.jpg';
import vkus2 from '../../../assets/MainPageImage/vkus2.jpg';
import vkus3 from '../../../assets/MainPageImage/vkus3.jpg';
import vkus4 from '../../../assets/MainPageImage/vkus4.jpg';

const initialCards = [
  { id: 1, src: vkus1, alt: "супчик", title: "Soup" },
  { id: 2, src: vkus2, alt: "бургер", title: "Burger" },
  { id: 3, src: vkus3, alt: "салатик", title: "Salad" },
  { id: 4, src: vkus4, alt: "пончики", title: "Dessert" },
  { id: 5, src: vkus3, alt: "пончики", title: "Fresh" },
  { id: 6, src: vkus2, alt: "пончики", title: "Delicious" },
];

export default function FoodCategory() {
  const [cards, setCards] = useState(initialCards);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isHovered) {
      if (intervalRef.current) clearInterval(intervalRef.current);
    } else {
      intervalRef.current = setInterval(() => {
        if (isAnimating) return;
        
        setIsAnimating(true);
        // Анимация: начальный пробел плавно уменьшается до 0
        setTimeout(() => {
          setCards(prev => {
            const first = prev[0];
            return [...prev.slice(1), first];
          });
          setIsAnimating(false);
        }, 800);
      }, 3000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isHovered, isAnimating]);

  return (
    <section className="Food-Category" style={{ textAlign: 'center' }}>
      <h2 className="glav-nav-text-Food-Category">Food Category</h2>
      <h1 className="glav-text-Food-Category">
        <span className="colortext">Ch</span>oose Food Iteam
      </h1>

      {/* ✅ Контейнер для плавного исчезновения начального пробела */}
      <div
        className="slider-wrapper"
        style={{
          overflow: 'hidden',
          margin: '50px auto',
          width: '1336px',
          height: '348px',
          position: 'relative',
        }}
      >
        {/* ✅ Этот контейнер управляет начальным пробелом */}
        <div
          className="cards-container"
          style={{
            display: 'flex',
            // ✅ Плавная анимация начального пробела
            transition: isAnimating 
              ? 'padding-left 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)' 
              : 'none',
            // ✅ В начале: 16.5px (половина gap), при анимации: 0
            paddingLeft: isAnimating ? '0' : '16.5px',
            transform: isAnimating ? 'translateX(-321.5px)' : 'translateX(0)',
            gap: '33px',
            height: '100%',
            alignItems: 'center',
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {cards.map((card, index) => (
            <div
              key={`${card.id}-${index}`}
              className="carrd-food-category"
              style={{
                width: '305px',
                height: '328px',
                flexShrink: 0,
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: hoveredCard === index 
                  ? '0 20px 40px rgba(255, 159, 13, 0.4), 0 0 0 3px rgba(255, 159, 13, 0.2)' 
                  : '0 8px 24px rgba(0,0,0,0.15)',
                cursor: 'pointer',
                position: 'relative',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: hoveredCard === index ? 'scale(1.08) translateY(-8px)' : 'scale(1)',
                zIndex: hoveredCard === index ? '10' : '1',
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Градиентный оверлей */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '50%',
                  background: hoveredCard === index
                    ? 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.3), transparent)'
                    : 'linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.2), transparent)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  zIndex: 2,
                }}
              />
              
              <img
                className="carrd-food-category-image"
                src={card.src}
                alt={card.alt}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transform: hoveredCard === index ? 'scale(1.1)' : 'scale(1)',
                  transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                  filter: hoveredCard === index ? 'brightness(1.1) saturate(1.2)' : 'brightness(1) saturate(1)',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}