import PropTypes from "prop-types";
import React, { useState } from 'react';
import "./MenuButton.css";
import { ReactComponent as Indicator } from './Indicator_big.svg'; // Importa el SVG

export const MenuButton = ({ property1 }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="tab"
    onMouseEnter={() => setIsHovered(true)} 
    onMouseLeave={() => setIsHovered(false)}
    >
      <div className="state-layer">
        <div className="tab-contents">
        {!isHovered && (
          <> 
            {
              property1.columns === 1 && ( 
              <div className="label">
                {property1.texts[0]}
              </div>
            )}

            {
              property1.columns === 2 && ( 
              <div className="label">
                {property1.texts[0]}
                <br />
                {property1.texts[1]}
              </div>
            )}

              
          </>
          )}
            
        {isHovered && (
          <>
            {
              property1.columns === 1 && ( 
              <div className="text-wrapper">
                {property1.texts[0]}
              </div>
            )}

            {
              property1.columns === 2 && ( 
              <div className="text-wrapper">
                {property1.texts[0]}
                <br/>
                {property1.texts[1]}
              </div>
            )}
            <Indicator className="indicator"/>
          </>
        )}
            
        </div>
      </div>
    </div>
  );
};

MenuButton.propTypes = {
  property1: PropTypes.shape({
    columns: PropTypes.number.isRequired, // Número de columnas
    texts: PropTypes.arrayOf(PropTypes.string).isRequired, // Lista de textos
  }).isRequired
};
