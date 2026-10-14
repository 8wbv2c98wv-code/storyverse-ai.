// Public feature-availability indicator. Does not disclose secrets.
export default function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Метод не поддерживается.' });
  res.setHeader('Cache-Control', 'no-store');
  return res.status(200).json({
    ready: Boolean(process.env.OPENAI_API_KEY?.trim() && process.env.AI_ACCESS_CODE?.trim())
  });
}
