export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { topic } = req.body;
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return res.status(500).json({ error: 'Vercel me API Key missing hai' });
    }

    // Bilkul sahi Google Gemini API URL
    const response = await fetch(
      `https://googleapis.com{apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `Generate exactly 3 science MCQ questions about "${topic}". Reply ONLY with a valid JSON array string. No markdown, no backticks, no markdown formatting. Format: [{"question": "text", "options": ["A", "B", "C", "D"], "answer": "correct_option"}]`
            }]
          }]
        })
      }
    );

    const data = await response.json();
    
    // Response check karna aur handle karna
    if (!data.candidates || !data.candidates[0] || !data.candidates[0].content.parts[0].text) {
      return res.status(500).json({ error: 'AI se galat response mila', raw: data });
    }

    const aiText = data.candidates[0].content.parts[0].text;

    // JSON array ko clean aur parse karna
    let cleanText = aiText.trim();
    if (cleanText.startsWith("```")) {
      cleanText = cleanText.replace(/^```json/, "").replace(/^```/, "").replace(/```$/, "").trim();
    }

    // Sahi JSON array parse karke bhejna
    const parsedQuiz = JSON.parse(cleanText);
    return res.status(200).json(parsedQuiz);

  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch quiz', details: error.message });
  }
            }
                             
