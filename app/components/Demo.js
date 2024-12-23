import { useState } from 'react';

export default function Demo() {
  const [response, setResponse] = useState('');

  const handleDemo = async () => {
    const res = await fetch('/api/demo', { method: 'POST', body: JSON.stringify({ question: 'What is AI?' }) });
    const data = await res.json();
    setResponse(data.answer);
  };

  return (
    <section id="demo" className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-8">Try the AI Tutor</h2>
      <textarea
        placeholder="Ask the AI Tutor or upload a sample document..."
        className="w-3/4 p-4 border rounded"
      ></textarea>
      <button className="ml-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={handleDemo}>
        Submit
      </button>
      {response && <p className="mt-6 text-xl">{response}</p>}
    </section>
  );
}
