export default function AdministrationAppStatus({ name, uptime }: { name: string, uptime: number }) {

    const uptimeDays = Array.from({ length: 90 }, (_, i) => ({
        day: i,
        uptime: uptime,
        date: new Date(Date.now() - (89 - i) * 24 * 60 * 60 * 1000),
      }));
    

  return (
    <div className="bg-white rounded-4xl border border-gray-200 shadow-sm p-6 mb-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-gray-900">{name}</h3>
        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
          <svg
            className="w-4 h-4 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
      </div>

      {/* Uptime Visualization - Horizontal bars */}
      <div className="flex items-end justify-between gap-[4px] h-16 mb-4">
              {uptimeDays.map((day) => (
                <div
                  key={day.day}
                  className="flex-1 bg-emerald-500 hover:bg-emerald-600 hover:scale-110 rounded-sm transition-colors cursor-pointer group relative"
                  style={{ height: `${day.uptime}%` }}
                  title={`${day.date.toLocaleDateString()} - ${day.uptime}%`}
                >
                  {/* Hover tooltip */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-900 text-white text-xs rounded px-2 py-1 whitespace-nowrap z-10">
                    {day.date.toLocaleDateString()} - {day.uptime}%
                  </div>
                </div>
              ))}
            </div>

      {/* Footer */}
      <div className="flex items-center justify-between text-sm">
        <span className="text-gray-500">90 day ago</span>
        <span className="text-gray-900 font-medium">100.0 % uptime</span>
        <span className="text-gray-500">Today</span>
      </div>
    </div>
  );
}

