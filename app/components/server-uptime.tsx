export default function ServerUptime() {
  // Generate 90 days of uptime data (all green for 100% uptime)
  const uptimeDays = Array.from({ length: 90 }, (_, i) => ({
    day: i,
    uptime: 100,
    date: new Date(Date.now() - (89 - i) * 24 * 60 * 60 * 1000),
  }));

  return (
    <section className="bg-white py-16 px-6 md:px-16 lg:px-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Server Uptime
          </h2>
          <p className="text-gray-600">100.0% For 90 Days</p>
        </div>

        {/* Uptime Chart */}
          {/* Tooltip (positioned absolutely, shown on hover) */}
         

          {/* Bar Chart */}
          <div className="relative">
            {/* Bars Container */}
            <div className="flex items-end justify-between gap-[6px] h-32 mb-4">
              {uptimeDays.map((day) => (
                <div
                  key={day.day}
                  className="flex-1 bg-[#20AA0E]  hover:scale-120 rounded-sm transition-colors cursor-pointer group relative"
                  style={{ height: `${day.uptime}%` }}
                  title={`${day.date.toLocaleDateString()} - ${day.uptime}%`}
                >
                  {/* Hover tooltip */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-[#FFFBF0] text-black text-xs rounded px-2 py-1 whitespace-nowrap z-10">
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
    </section>
  );
}

