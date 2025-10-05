# Mini Add-Only Calculator

A tiny calculator that adds two numbers and shows the result below the form. Built to stay super simple.

## Files

- index.html — the form and result box
- styles.css — layout + small responsive tweaks
- calc.js — handles parsing and addition

## How to run

- Open `index.html` in your browser
- Enter two numbers
- Click “Add” (or press Enter)

## Features

- Adds integers and decimals
- Handles commas in input (e.g., 1,234.56)
- Friendly error message if inputs are invalid
- Doesn’t reload the page on submit

## Edge cases

- Empty fields -> asks for valid numbers
- Very long decimals -> trims to 6 places (not scientific accuracy)
- Locale formatting is minimal (kept simple on purpose)

## Future improvements

- Keyboard shortcuts (Ctrl+Enter)
- Better number formatting by locale
- Subtract / Multiply / Divide tabs
- Unit tests (maybe… eventually)
