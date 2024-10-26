export default function Services() {
  return (
    <div className="p-10 bg-white min-h-screen">
      <h1 className="text-3xl font-semibold mb-4 text-center">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
        <div className="bg-blue-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2">Essay Writing</h2>
          <p>High-quality essays for your academic needs.</p>
        </div>
        <div className="bg-blue-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2">Research Papers</h2>
          <p>Well-researched papers with proper citations.</p>
        </div>
        <div className="bg-blue-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2">Dissertations</h2>
          <p>Complete dissertations from topic selection to conclusion.</p>
        </div>
      </div>
    </div>
  );
}
