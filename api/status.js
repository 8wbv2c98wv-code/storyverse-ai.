// StoryVerse AI is enabled only when Cloudflare Workers AI free-tier credentials exist.
// Do not publish authentication tokens or secret values.
export default function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Метод не поддерживается.' });
  res.setHeader('Cache-Control', 'no-store');
  res.status(200).json({ ready: Boolean(
    process.env.CLOUDFLARE_ACCOUNT_ID?.trim() &&
    process.env.CLOUDFLARE_AI_TOKEN?.trim() &&
    process.env.AI_ACCESS_CODE?.trim()
  ) });
}
