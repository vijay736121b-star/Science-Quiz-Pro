export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { topic } = req.body;
    const apiKey = process.env.GEMINI_API_KEY;

    const response = await fetch(
      `https://googleapis.com{apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `Generate 3 science MCQ questions about "${topic}". Reply ONLY with a valid JSON array. Do not include markdown formatting or backticks. Format: [{"question": "text", "options": ["A", "B", "C", "D"], "answer": "correct_option"}]`
            }]
          }]
        })
      }
    );

    const data = await response.json();
    const aiText = data.candidates.content.parts.text;

    return res.status(200).json(JSON.parse(aiText.trim()));

  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch quiz', details: error.message });
  }
  }
      
