export default function Certificates() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">
        My Certificates
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        
        <div className="bg-gray-900 p-8 rounded-xl border border-gray-800">
          <h3 className="text-xl font-semibold mb-4">
            Full Stack Java Developer
          </h3>

          <p className="text-gray-400 mb-6">
            Completed on: 12 March 2026
          </p>

          <button className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">
            Download Certificate
          </button>
        </div>

      </div>
    </div>
  );
}
