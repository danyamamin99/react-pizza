import React, { useState } from "react";

// СДЕЛАТЬ КЛАССОВЫЙ КОМПОНЕНТ - ПОПРОБОВАТЬ

function Categories({items}) {
  const [activeItem, setActiveItem] = useState(null);
  const onSelectItem = index => setActiveItem(index);

  return (
    <div className="categories">
      <ul>
        <li 
          onClick={() => setActiveItem(null)} 
          className={activeItem === null ? 'active' : ''}
        >
          Все
        </li>
        {items &&
          items.map((item, index) => ( 
            <li 
              className={activeItem === index ? 'active' : ''} 
              onClick={() => onSelectItem(index)} 
              key={`${item}_${index}`}>
                {item}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Categories;
