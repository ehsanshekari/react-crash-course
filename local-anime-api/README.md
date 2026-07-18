# Local anime API

This dependency-free server replaces the Jikan search used by the course examples.
It supports the `dororo` and `pokemon` search terms and serves cover artwork locally.

Start it in one terminal:

```powershell
cd local-anime-api
npm start
```

Then start either React project in another terminal. The compatible endpoint is:

```text
http://localhost:3001/v4/anime?limit=6&q=dororo
```

The response has the Jikan properties used by the examples, including
`data`, `mal_id`, `title`, `score`, and `images.jpg.image_url`.
