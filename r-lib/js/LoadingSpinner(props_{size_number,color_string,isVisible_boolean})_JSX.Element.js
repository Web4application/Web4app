import React from 'react';

let _spinnerStylesInjected = false;
function ensureSpinnerStyles() {
  if (typeof document === 'undefined') return;
  if (_spinnerStylesInjected) return;
  const style = document.createElement('style');
  style.id = 'loading-spinner-styles';
  style.textContent = `
    @keyframes js-loading-spinner-spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;
  document.head.appendChild(style);
  _spinnerStylesInjected = true;
}

export function LoadingSpinner(props) {
  const {
    size = 24,
    color = '#333',
    isVisible = true
  } = props || {};

  if (!isVisible) return null;

  const diameter = Math.max(4, Number(size) || 24);
  const border = Math.max(2, Math.floor(diameter / 8));

  if (typeof document !== 'undefined') {
    ensureSpinnerStyles();
  }

  const outerStyle = {
    display: 'inline-block'
  };

  const innerStyle = {
    width: diameter,
    height: diameter,
    borderRadius: '50%',
    border: `${border}px solid ${color}`,
    borderTopColor: 'transparent',
    boxSizing: 'border-box',
    animation: 'js-loading-spinner-spin 1s linear infinite'
  };

  return React.createElement(
    'div',
    { style: outerStyle, role: 'status', 'aria-label': 'Loading' },
    React.createElement('div', { style: innerStyle })
  );
}