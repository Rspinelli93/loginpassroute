# Session and secret-word exercise

A modular Express exercise that handles a form submission, stores session state, and protects a profile route using a configured secret word.

**Collection:** Node.js and APIs · [Project directory](https://github.com/Rspinelli93/Rspinelli93/blob/main/PROJECTS.md)

## Stack

`body-parser`, `dotenv`, `express`, `express-session`.

## Run locally

Install Node.js and npm, then run:

```bash
git clone https://github.com/Rspinelli93/loginpassroute.git
cd loginpassroute
npm install
npm start
```

The start script uses Node’s `--watch` option; use a Node version that supports it.

## Configuration

The source reads these environment variables. Configure them locally before starting the relevant integrations; values are not included here.

| Variable | Used by |
| --- | --- |
| `PALABRA_SECRETA` | [`middlewares.js`](middlewares.js), [`middlewares.js`](middlewares.js) |

## Available commands

| Command | Script in package.json |
| --- | --- |
| `npm run start` | `node --watch app.js` |

The `test` script is a placeholder; an automated test suite is not configured through that command.

## Repository guide

- [`app.js`](app.js)
- [`middlewares.js`](middlewares.js)
- [`package.json`](package.json)
- [`puzzle.js`](puzzle.js)
- [`routes.js`](routes.js)

---

[Back to my GitHub profile](https://github.com/Rspinelli93)
