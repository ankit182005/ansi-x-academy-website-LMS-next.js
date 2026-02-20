export default function Assignments() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">
        Assignments
      </h1>

      <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 max-w-2xl">

        <h3 className="text-xl font-semibold mb-4">
          Build REST API for Hospital Module
        </h3>

        <p className="text-gray-400 mb-6">
          Submit GitHub repository link for evaluation.
        </p>

        <input
          type="text"
          placeholder="Paste GitHub Link"
          className="w-full mb-4 p-3 rounded bg-gray-800 border border-gray-700"
        />

        <button className="bg-blue-600 px-6 py-3 rounded hover:bg-blue-700">
          Submit Assignment
        </button>

      </div>
    </div>
  );
}
