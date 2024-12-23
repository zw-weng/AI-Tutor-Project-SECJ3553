const features = [
    { title: "AI-Powered Summarization", description: "Understand concepts faster.", icon: "/icons/summarization.svg" },
    { title: "Tailored Self-Assessments", description: "Track your progress effortlessly.", icon: "/icons/assessment.svg" },
    { title: "Contextual Examples", description: "Learn through practical examples.", icon: "/icons/examples.svg" },
    { title: "Interactive Flashcards", description: "Reinforce knowledge on the go.", icon: "/icons/flashcards.svg" },
  ];
  
  export default function Features() {
    return (
      <section id="features" className="py-16 bg-white">
        <h2 className="text-center text-3xl font-bold mb-8">Features</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center max-w-sm">
              <img src={feature.icon} alt={feature.title} className="w-16 mx-auto" />
              <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  