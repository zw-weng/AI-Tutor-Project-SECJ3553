const steps = [
    { title: "Upload Materials", description: "Upload notes, slides, or PDFs.", icon: "/icons/upload.svg" },
    { title: "Select Action", description: "Choose summaries, quizzes, or examples.", icon: "/icons/select.svg" },
    { title: "Get Results", description: "Receive AI-generated outputs instantly.", icon: "/icons/result.svg" },
  ];
  
  export default function HowItWorks() {
    return (
      <section className="py-16 bg-gray-100">
        <h2 className="text-center text-3xl font-bold mb-8">How It Works</h2>
        <div className="flex justify-around">
          {steps.map((step, index) => (
            <div key={index} className="text-center max-w-xs">
              <img src={step.icon} alt={step.title} className="w-16 mx-auto" />
              <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  