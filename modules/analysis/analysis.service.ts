import axios from "axios";
import { openai } from "../../utils/openai";

export const analyzeWebsite = async (url: string) => {
  const response = await axios.get(url);
  const html = response.data.slice(0, 4000);

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: "You are a SaaS website audit AI. Return JSON."
      },
      {
        role: "user",
        content: `Analyze this website HTML:\n${html}
Return:
{
designScore: number,
authorityGap: number,
conversionWeakness: number,
upgradeUrgencyScore: number
}`
      }
    ]
  });

  return JSON.parse(completion.choices[0].message.content!);
};
