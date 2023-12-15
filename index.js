import OpenAI from "openai";

const openai = new OpenAI({
    apiKey : "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"
});

async function main() {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "안녕"}
      ],
      stream: true,
    });
    for await (const chunk of completion) {
      console.log(chunk.choices[0].delta.content);
    }
}

main();