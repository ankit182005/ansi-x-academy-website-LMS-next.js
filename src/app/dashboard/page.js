export default function DashboardHome() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">
        Welcome Back 👋
      </h1>

      <p className="text-gray-400 mb-6">
        Track your learning progress and continue building.
      </p>

      <div className="h-px bg-gray-800 mb-10"></div>

      <div className="relative">
        {/* Softer Glow */}
        <div className="absolute w-80 h-80 bg-blue-600 blur-3xl opacity-10 -top-10 left-20"></div>

        <div className="relative grid md:grid-cols-3 gap-8">

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-700 hover:scale-105 transition-transform duration-300 shadow-lg">
            <h3 className="text-lg font-semibold mb-2">
              Enrolled Programs
            </h3>
            <p className="text-3xl font-bold text-blue-500">
              2
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-700 hover:scale-105 transition-transform duration-300 shadow-lg">
            <h3 className="text-lg font-semibold mb-2">
              Completed Modules
            </h3>
            <p className="text-3xl font-bold text-green-500">
              8
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-700 hover:scale-105 transition-transform duration-300 shadow-lg">
            <h3 className="text-lg font-semibold mb-2">
              Progress
            </h3>
            <p className="text-3xl font-bold text-purple-500">
              65%
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
