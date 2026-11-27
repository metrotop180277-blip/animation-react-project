import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../../../app/Modal/Modal';
import { useSearchParams } from 'react-router-dom';

import k1 from '../../../assets/MenuPageImage/K1.gif';
import k2 from '../../../assets/MenuPageImage/K2.gif';
import k3 from '../../../assets/MenuPageImage/K3.gif';
import k4 from '../../../assets/MenuPageImage/K4.gif';
import k5 from '../../../assets/MenuPageImage/K5.gif';
import k6 from '../../../assets/MenuPageImage/K6.gif';
import k7 from '../../../assets/MenuPageImage/K7.gif';
import k8 from '../../../assets/MenuPageImage/K8.gif';
import k10 from '../../../assets/MenuPageImage/K10.gif';
import k11 from '../../../assets/MenuPageImage/K11.gif';
import a1 from '../../../assets/MenuPageImage/a1.png';
import a2 from '../../../assets/MenuPageImage/a2.png';
import a3 from '../../../assets/MenuPageImage/a3.png';
import a4 from '../../../assets/MenuPageImage/a4.png';
import a5 from '../../../assets/MenuPageImage/a5.png';
import b1 from '../../../assets/MenuPageImage/ArrowCircleRight.png';
import b2 from '../../../assets/MenuPageImage/price_renge.png';
import b3 from '../../../assets/MenuPageImage/product-20.png';
import b4 from '../../../assets/MenuPageImage/star1.png';

const initialCards = [
  { id: 1, img: k1, title: "Sandwiches", price: 12.00, category: "Sandwiches" },
  { id: 2, img: k1, title: "Sandwiches", price: 60.00, category: "Sandwiches" },
  { id: 3, img: k10, title: "Burger", price: 43.00, category: "Burger" },
  { id: 4, img: k3, title: "Country Burger", price: 23.00, category: "Burger" },
  { id: 5, img: k3, title: "Country Burger", price: 36.00, category: "Burger" },
  { id: 6, img: k7, title: "Chicken Chup", price: 14.00, category: "Chicken Chup" },
  { id: 7, img: k7, title: "Chicken Chup", price: 10.00, category: "Chicken Chup" },
  { id: 8, img: k6, title: "Drink", price: 21.00, category: "Drink" },
  { id: 9, img: k6, title: "Drink", price: 26.00, category: "Drink" },
  { id: 10, img: k8, title: "Pizza", price: 45.00, category: "Pizza" },
  { id: 11, img: k8, title: "Pizza", price: 23.00, category: "Pizza" },
  { id: 12, img: k4, title: "Fresh Lime", price: 38.00, category: "Thi" },
  { id: 13, img: k2, title: "Chocolate Muffin", price: 28.00, category: "Thi" },
  { id: 14, img: k5, title: "Cheese Butter", price: 50.00, category: "Non Veg" },
  { id: 15, img: k5, title: "Cheese Butter", price: 28.00, category: "Non Veg" },
  { id: 16, img: k5, title: "Cheese Butter", price: 28.00, category: "Uncategorized" },
  { id: 17, img: k2, title: "Chocolate Muffin", price: 28.00, category: "Uncategorized" },
  { id: 18, img: k4, title: "Fresh Lime", price: 38.00, category: "Uncategorized" },
];

const allCategories = [...new Set(initialCards.map(c => c.category))];

export default function MenuTovar() {

  const [searchParams] = useSearchParams();
  const initialSearchFromURL = searchParams.get('search') || '';
  const [cards] = useState(initialCards);
  const [searchTerm, setSearchTerm] = useState(initialSearchFromURL);
  const [selectedCategories, setSelectedCategories] = useState(new Set());
  const [sortBy, setSortBy] = useState('');
  const [showOnly, setShowOnly] = useState('');
  const [priceSort, setPriceSort] = useState(null);
  const [priceRange, setPriceRange] = useState(300);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('lastSearch');
    if (saved) setSearchTerm(saved);
  }, []);


  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value.trim()) {
      localStorage.setItem('lastSearch', value.trim());
    } else {
      localStorage.removeItem('lastSearch');
    }
  };

  const toggleCategory = (cat) => {
    setSelectedCategories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(cat)) {
        newSet.delete(cat);
      } else {
        newSet.add(cat);
      }
      return newSet;
    });
  };

  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortBy(value);
    if (value) setShowOnly('');
  };

  const handleShowOnlyChange = (e) => {
    const value = e.target.value;
    setShowOnly(value);
    if (value) setSortBy('');
  };

  const handlePriceFilter = () => {
    setPriceSort(prev => {
      if (prev === null) return 'asc';
      if (prev === 'asc') return 'desc'; 
      return null;
    });
  };

  const handlePriceRangeChange = (e) => {
    const newPriceRange = Number(e.target.value);
    setPriceRange(newPriceRange);
  };

  const filteredCards = cards.filter(card => {
    const matchesSearch = card.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategories.size === 0 || selectedCategories.has(card.category);
    const matchesPrice = card.price <= priceRange;
    let matchesFilter = true;
    if (showOnly) {
      matchesFilter = card.category === showOnly;
    } else if (sortBy) {
      matchesFilter = card.category === sortBy;
    }
    return matchesSearch && matchesCategory && matchesFilter && matchesPrice;
  });

  const sortedCards = priceSort === null
    ? filteredCards
    : [...filteredCards].sort((a, b) => {
      if (priceSort === 'asc') {
        return a.price - b.price; 
      } else {
        return b.price - a.price; 
      }
    });

  const openModal = (card) => {
    setSelectedItem(card);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <section className="menu-tovar" style={{ display: "flex", marginLeft: "300px", marginRight: "300px", marginTop: "120px" }}>
      <div className="glav-menu-tovar">
        <div className="manu-tovar" style={{ width: "984px" }}>

          <div className="glav-input" style={{display: 'flex'}}>
            <span className="input" style={{ position: "relative", left: "0px" }}>
              Sort By:
              <select id="sort-filter" value={sortBy} onChange={handleSortChange} style={{ width: "236px", height: "46px", position: "relative", left: "17px" }}>
                <option value=""></option>
                {allCategories.map(cat => (
                  <option key={`sort-${cat}`} value={cat}>{cat}</option>
                ))}
              </select>
            </span>
            <span className="input" style={{ position: "relative", left: "40px" }}>
              Show:
              <select
                id="show-filter"
                value={showOnly}
                onChange={handleShowOnlyChange}
                style={{ width: "236px", height: "46px", position: "relative", left: "17px" }}
              >
                <option value=""></option>
                {allCategories.map(cat => (
                  <option key={`show-${cat}`} value={cat}>{cat}</option>
                ))}
              </select>
            </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', position: 'relative', left: '100px' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '30px',
            }}>
              <span style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px'}}><b>{sortedCards.length}</b><span style={{fontSize: '16px', color: 'orange'}}>positions</span></span>
            </div>
            <div>
            </div>
          </div>
          </div>
          <div className="grid-container" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", width: "984px" }}>
            {sortedCards.map(card => (
              <div key={card.id} className="card" style={{ width: "312px", height: "330px", marginTop: "24px", cursor: 'pointer' }} data-category={card.category} onClick={() => openModal(card)}>
                <img className="img-card" src={card.img} alt={card.title} style={{ width: "312px", height: "267px", transition: "all 0.3s ease" }} />
                <p className="glav-text-card" style={{ fontSize: "18px" }}><b>{card.title}</b></p>
                <p className="price-card" style={{ color: "#FF9F0D", fontSize: "16px" }}>{`$${card.price.toFixed(2)}`}</p>
              </div>
            ))}
          </div>

          <div className="img-menu" style={{ marginTop: "56px", alignItems: "center", display: "flex", justifyContent: "center", gap: '10px', marginBottom: '128px' }}>
                        <span class="img-manu"><img src={a1} alt="" /></span>
                        <span class="img-manu"><img src={a2} alt="" /></span>
                        <span class="img-manu"><img src={a3} alt="" /></span>
                        <span class="img-manu"><img src={a4} alt="" /></span>
                        <span class="img-manu"><img src={a5} alt="" /></span>
          </div>
        </div>
      </div>

      <div className="glav-poisk-menu" style={{ width: "312px", height: "1489px", border: "1px solid rgba(0, 0, 0, 0.089)", borderRadius: "6px", marginTop: "70px", marginLeft: "24px" }}>
        <input className="input1" style={{ width: "248px", height: "46px", marginTop: "24px", marginLeft: "30px", marginRight: "34px", marginBottom: "24px", backgroundColor: "#FF9F0D1A", border: "none" }} type="text" placeholder="   Search Product" value={searchTerm} onChange={handleSearchChange}/>
        <div className="kategores" style={{ marginLeft: "30px", marginRight: "34px", marginBottom: "24px" }}>
          <p className="text-kategores" style={{ fontSize: "20px", color: "#333333", margin: "0", marginBottom: "24px" }}><b>Category</b></p>
          <form style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {allCategories.map(cat => (
              <div key={cat} className="checkbox1" style={{ display: "flex" }}>
                <label>
                  <input type="checkbox" value={cat} checked={selectedCategories.has(cat)} onChange={() => toggleCategory(cat)}/>
                  {cat}
                </label>
              </div>
            ))}
          </form>
        </div>

        <div className="bludo" style={{ backgroundImage: `url(${k11})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", width: "248px", height: "286px", marginLeft: "30px", marginRight: "34px", marginBottom: "24px", position: "relative" }}>
          <h1 className="bludo-glav-text" style={{ color: "white", fontSize: "16px", position: "absolute", left: "23px", top: "29px", margin: "0" }}>Perfect Taste</h1>
          <h1 className="bludo-text" style={{ color: "white", fontSize: "20px", position: "absolute", left: "23px", top: "57px", margin: "0" }}>Classic Restaurant</h1>
          <p className="bludo-price" style={{ color: "orange", fontSize: "20px", position: "absolute", left: "23px", top: "98px", margin: "0" }}><b>45.00$</b></p>
          <Link to="/shop" style={{ textDecoration: 'none', color: 'inherit' }}>
            <p className="bludo-a" style={{ color: "white", fontSize: "20px", position: "absolute", left: "23px", top: "231px", margin: "0" }}>Shop Now</p>
            <img className="bludo-img" style={{ position: "absolute", left: "119px", top: "233px" }} src={b1} alt="" />
          </Link>
        </div>
        <div className="price" style={{ width: "248px", height: "87px", marginLeft: "30px", marginRight: "34px", marginBottom: "24px", position: "relative" }}>
          <p className="price-text" style={{ fontSize: "20px", margin: "0", marginBottom: "10px" }}><b>Filter By Price</b></p>
          <div style={{ position: "absolute", right: "1px", width: "248px", height: "20px", display: "flex", alignItems: "center" }}>
            <img className='price-image' src={b2} alt="" />
          </div>
          <div className="price-text-text" style={{ display: "flex", justifyContent: "space-between", position: "relative", top: "30px" }}>
            <p className="price-color" style={{ color: "#0d0d0d5b", margin: "0" }}>From $0 to ${priceRange}</p>
            <Link onClick={handlePriceFilter} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#00000047',  fontSize: '16px', padding: 0, margin: 0 }} aria-label={`Sort by price ${priceSort === 'asc' ? 'ascending' : priceSort === 'desc' ? 'descending' : 'none'}`}>
              {priceSort === 'asc' ? '↑' : priceSort === 'desc' ? '↓' : 'Filter'}
            </Link>
          </div>
        </div>

        <div className="Latest-Products" style={{ width: "252px", height: "368px", marginLeft: "30px", marginRight: "34px", marginBottom: "24px" }}>
          <h1 className="latest-glav-text" style={{ fontSize: "20px" }}>Latest Products</h1>
          <div className="latest-card" style={{width: '252px', height: '67px', display: 'flex', marginTop: '16px'}}>
            <img src={b3} alt="" />
            <div className="latest-card1" style={{marginLeft:'16px'}}>
              <p className="latest-card-text" style={{margin: '0', marginBottom: '8px'}}>Pizza</p>
              <img src={b4} alt="" />
              <p className="latest-card-price" style={{fontSize: '14px', margin: '0', marginTop: '4px'}}>$35.00</p>
            </div>
          </div>
          <div className="latest-card" style={{width: '252px', height: '67px', display: 'flex', marginTop: '16px'}}>
            <img src={b3} alt="" />
            <div className="latest-card1" style={{marginLeft:'16px'}}>
              <p className="latest-card-text" style={{margin: '0', marginBottom: '8px'}}>Pizza</p>
              <img src={b4} alt="" />
              <p className="latest-card-price" style={{fontSize: '14px', margin: '0', marginTop: '4px'}}>$35.00</p>
            </div>
          </div>
          <div className="latest-card" style={{width: '252px', height: '67px', display: 'flex', marginTop: '16px'}}>
            <img src={b3} alt="" />
            <div className="latest-card1" style={{marginLeft:'16px'}}>
              <p className="latest-card-text" style={{margin: '0', marginBottom: '8px'}}>Pizza</p>
              <img src={b4} alt="" />
              <p className="latest-card-price" style={{fontSize: '14px', margin: '0', marginTop: '4px'}}>$35.00</p>
            </div>
          </div>
          <div className="latest-card" style={{width: '252px', height: '67px', display: 'flex', marginTop: '16px'}}>
            <img src={b3} alt="" />
            <div className="latest-card1" style={{marginLeft:'16px'}}>
              <p className="latest-card-text" style={{margin: '0', marginBottom: '8px'}}>Pizza</p>
              <img src={b4} alt="" />
              <p className="latest-card-price" style={{fontSize: '14px', margin: '0', marginTop: '4px'}}>$35.00</p>
            </div>
          </div>
        </div>

        <div className="Product-Tags" style={{ marginLeft: "30px", marginRight: "34px", width: "225px", height: "162px", display: "flex", flexDirection: "column", gap: "16px" }}>
          <h1 className="Product-Tags-text" style={{ fontSize: "20px", margin: "0", marginBottom: "20px" }}>Product Tags</h1>
          <div>
            <Link className="product-text" style={{ color: "#4F4F4F", fontSize: "16px", marginRight: "20px" }}>Services</Link>
            <Link className="product-text1" style={{ color: "#4F4F4F", fontSize: "16px", marginRight: "16px" }}>Our Menu</Link>
            <Link className="product-text2" style={{ color: "#4F4F4F", fontSize: "16px", marginRight: "16px" }}>Pizza</Link>
          </div>
          <div>
            <Link className="product-text3" style={{ color: "#4F4F4F", fontSize: "16px", marginRight: "16px" }}>Cupcake</Link>
            <Link className="product-text4" style={{ color: "orange", fontSize: "16px", marginRight: "16px" }}>Burger</Link>
            <Link className="product-text5" style={{ color: "#4F4F4F", fontSize: "16px", marginRight: "16px" }}>Cookies</Link>
          </div>
          <div>
            <Link className="product-text6" style={{ color: "#4F4F4F", fontSize: "16px", marginRight: "16px" }}>Our Shop</Link>
            <Link className="product-text7" style={{ color: "#4F4F4F", fontSize: "16px", marginRight: "16px" }}>Tandoori Chicken</Link>
          </div>
        </div>
      </div>

      {/* ✅ МОДАЛЬНОЕ ОКНО В КОНЦЕ */}
      <Modal
        isOpen={!!selectedItem}
        onClose={closeModal}
        image={selectedItem?.img}
        title={selectedItem?.title}
        price={`$${selectedItem?.price?.toFixed(2) || '0.00'}`}
      />
    </section>
  );
}
