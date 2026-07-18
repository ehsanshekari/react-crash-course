import { createReadStream } from 'node:fs';
import { createServer } from 'node:http';
import { extname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const port = Number(process.env.PORT) || 3001;
const publicDirectory = fileURLToPath(new URL('./public', import.meta.url));

const anime = [
  { mal_id: 37520, title: 'Dororo', score: 8.25, cover: 'dororo.png' },
  { mal_id: 5760, title: 'Dororo to Hyakkimaru', score: 7.18, cover: 'dororo-2.png' },
  { mal_id: 100375, title: 'Dororo: The Wandering Swordsman', score: 7.91, cover: 'dororo-3.png' },
  { mal_id: 100376, title: 'Dororo: Moonlit Spirits', score: 7.64, cover: 'dororo-4.png' },
  { mal_id: 100377, title: 'Dororo: Temple of Shadows', score: 7.42, cover: 'dororo-5.png' },
  { mal_id: 100378, title: 'Dororo: The Last Demon', score: 7.83, cover: 'dororo-6.png' },
  { mal_id: 527, title: 'Pokemon', score: 7.39, cover: 'pokemon.png' },
  { mal_id: 1564, title: 'Pokemon Advanced Generation', score: 7.13, cover: 'pokemon-2.png' },
  { mal_id: 1565, title: 'Pokemon Diamond & Pearl', score: 7.19, cover: 'pokemon-3.png' },
  { mal_id: 9107, title: 'Pokemon Best Wishes!', score: 6.99, cover: 'pokemon-4.png' },
  { mal_id: 19291, title: 'Pokemon XY', score: 7.46, cover: 'pokemon-5.png' },
  { mal_id: 28091, title: 'Pokemon XY&Z', score: 7.71, cover: 'pokemon-6.png' },
];

const coverFiles = new Set(anime.map((item) => item.cover));

const withJikanImages = (item, origin) => ({
  mal_id: item.mal_id,
  title: item.title,
  score: item.score,
  images: {
    jpg: {
      image_url: `${origin}/images/${item.cover}`,
      small_image_url: `${origin}/images/${item.cover}`,
      large_image_url: `${origin}/images/${item.cover}`,
    },
    webp: {
      image_url: `${origin}/images/${item.cover}`,
      small_image_url: `${origin}/images/${item.cover}`,
      large_image_url: `${origin}/images/${item.cover}`,
    },
  },
});

const sendJson = (response, status, body) => {
  response.writeHead(status, {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json; charset=utf-8',
  });
  response.end(JSON.stringify(body));
};

createServer((request, response) => {
  const url = new URL(request.url, `http://${request.headers.host}`);

  if (url.pathname === '/v4/anime' && request.method === 'GET') {
    const query = (url.searchParams.get('q') || '').trim().toLowerCase();
    const requestedLimit = Number.parseInt(url.searchParams.get('limit') || '25', 10);
    const limit = Number.isNaN(requestedLimit) ? 25 : Math.min(Math.max(requestedLimit, 1), 25);
    const matches = anime.filter((item) => item.title.toLowerCase().includes(query));
    const data = matches.slice(0, limit).map((item) => withJikanImages(item, url.origin));

    sendJson(response, 200, {
      pagination: {
        last_visible_page: 1,
        has_next_page: false,
        current_page: 1,
        items: { count: data.length, total: matches.length, per_page: limit },
      },
      data,
    });
    return;
  }

  if (url.pathname.startsWith('/images/') && ['GET', 'HEAD'].includes(request.method)) {
    const filename = url.pathname.slice('/images/'.length);
    if (!coverFiles.has(filename)) {
      sendJson(response, 404, { status: 404, message: 'Image not found' });
      return;
    }

    response.writeHead(200, {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': extname(filename) === '.png' ? 'image/png' : 'application/octet-stream',
      'Cache-Control': 'public, max-age=3600',
    });
    if (request.method === 'HEAD') {
      response.end();
      return;
    }
    createReadStream(join(publicDirectory, filename)).pipe(response);
    return;
  }

  sendJson(response, 404, { status: 404, message: 'Not found' });
}).listen(port, () => {
  console.log(`Local anime API: http://localhost:${port}/v4/anime?limit=6&q=dororo`);
});
