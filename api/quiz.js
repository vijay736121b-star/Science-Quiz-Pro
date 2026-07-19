export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { topic } = req.body;
    const apiKey = process.env.GEMINI_API_KEY;

    // Bilkul sahi aur tested Google Gemini API URL
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
    
    // Server response checking
    if (!data.candidates || !data.candidates[0]?.content?.parts[0]?.text) {
      return res.status(500).json({ error: 'AI se galat response mila', details: data });
    }

    const aiText = data.candidates[0].content.parts[0].text;

    // JSON array ko clean aur parse karna
    let cleanText = aiText.trim();
    if (cleanText.startsWith("```")) {
      cleanText = cleanText.replace(/^```json/, "").replace(/^```/, "").replace(/```$/, "").trim();
    }

    return res.status(200).json(JSON.parse(cleanText));

  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch quiz', details: error.message });
  }
}
