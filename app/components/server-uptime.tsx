export default function ServerUptime() {
  // Generate 90 days of uptime data (all green for 100% uptime)
  const uptimeDays = Array.from({ length: 90 }, (_, i) => ({
    day: i,
    uptime: 100,
    date: new Date(Date.now() - (89 - i) * 24 * 60 * 60 * 1000),
  }));

  return (
    <section className="bg-white py-16 px-6 md:px-16 lg:px-24">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Server Uptime
          </h2>
          <p className="text-gray-600">100.0% For 90 Days</p>
        </div>

        {/* Uptime Chart */}
        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
          {/* Tooltip (positioned absolutely, shown on hover) */}
          <div className="relative mb-8">
            <div className="absolute left-1/3 -top-4 bg-white shadow-lg rounded-lg px-4 py-2 text-sm font-medium text-gray-700 border border-gray-200">
              2025/04/12 <span className="ml-2 font-bold">100.0%</span>
            </div>
          </div>

          {/* Bar Chart */}
          <div className="relative">
            {/* Bars Container */}
            <div className="flex items-end justify-between gap-[2px] h-32 mb-4">
              {uptimeDays.map((day) => (
                <div
                  key={day.day}
                  className="flex-1 bg-emerald-500 hover:bg-emerald-600 rounded-sm transition-colors cursor-pointer group relative"
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

            {/* Timeline Labels */}
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>90-day ago</span>
              <span>Today</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

