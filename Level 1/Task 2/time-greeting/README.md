# Time-Based Greeting Alert

Click a button to see a greeting that changes based on the current hour (or a fake hour you enter for testing).

## Files

- index.html — UI with a button
- styles.css — a simple card layout and decent spacing
- app.js — time logic and the alert trigger

## How to use

- Open `index.html`
- Click “Show Greeting”

## Time ranges

- Morning: 05:00–11:59
- Afternoon: 12:00–16:59
- Evening: 17:00–20:59
- Night: 21:00–04:59

## Notes

- Uses `alert()` intentionally for simplicity
- Local device time is used

## Future ideas

- Replace alert with a toast/snackbar
- Auto-detect locale and say “Namaste” or similar based on region
- Add emojis because it’s 2025 🙂