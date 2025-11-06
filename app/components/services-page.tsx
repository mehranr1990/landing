import AdministrationAppStatus from './administration-app-status';

interface Incident {
  date: string;
  issue?: string;
  resolution?: string;
  timestamp?: string;
}

const services = [
  {
    name: 'Core',
    uptime: 100,
  },
  {
    name: 'Administration App',
    uptime: 100,
  },
  {
    name: 'Desktop App',
    uptime: 100,
  },
  {
    name: 'Currency Board',
    uptime: 100,
  },
  {
    name: 'System Blog',
    uptime: 100,
  },
  {
    name: 'Support',
    uptime: 100,
  },
];
export default function ServicesPage() {
  const incidents: Incident[] = [
    {
      date: "Oct 26, 2025",
    },
    {
      date: "Oct 25, 2025",
    },
    {
      date: "Oct 24, 2025",
      issue: "Issues detected with both logging in and sending signature requests",
      resolution: "This incident has been resolved.",
      timestamp: "Oct 1, 08:12 - 12:27 UTC",
    },
    {
      date: "Oct 26, 2025",
    },
    {
      date: "Oct 25, 2025",
    },
    {
      date: "Oct 25, 2025",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-white py-16 px-6 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Services & System Status
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            Real-time monitoring of all Arzfy services and infrastructure
          </p>
        </div>
      </section>

      {/* Scheduled Maintenance Section */}
      <section className="bg-[#FFF9F0] py-16 px-6 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Scheduled Maintenance
            </h2>
          </div>

          {/* Maintenance Card */}
          <div className="bg-[#FFF9F0] rounded-2xl p-8 md:p-12 max-w-4xl mx-auto border border-gray-200 shadow-sm">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Scheduled Maintenance
            </h3>
            <p className="text-gray-600 mb-6">
              Scheduled for: Nov 19, 2025 03:00-04:00 UTC
            </p>
            <p className="text-gray-800 leading-relaxed mb-6">
              Arzfy will be performing routine maintenance on November 18, 2025
              starting at 7:00 PM (Pacific). You may not be able to access
              Arzfy for a short period of time, but we'll have things back up
              and running as soon as possible to minimize disruption to you.
            </p>
            <p className="text-gray-500 text-sm">
              Posted on Oct 21, 2025 - 21:28 UTC
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white py-16 px-6 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            All Systems Operational
            </h2>
          </div>
          {services.map((service) => (
            <AdministrationAppStatus key={service.name} name={service.name} uptime={service.uptime} />
          ))}
        </div>
      </section>

      {/* Past Incidents Section */}
      <section className="bg-white py-16 px-6 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Past Incidents
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {incidents.map((incident, index) => (
              <div key={index} className="bg-[#F5F5F0] rounded-4xl p-6">
                <p className="text-gray-700 font-medium mb-2">{incident.date}</p>
                {incident.issue ? (
                  <>
                    <p className="text-orange-600 mb-2">{incident.issue}</p>
                    <p className="text-gray-900 mb-1">{incident.resolution}</p>
                    <p className="text-gray-400 text-sm">{incident.timestamp}</p>
                  </>
                ) : (
                  <p className="text-gray-500">No incidents reported today.</p>
                )}
              </div>
            ))}
          </div>

          {/* Incident History Link */}
          <div className="max-w-4xl mx-auto mt-8">
            <a
              href="#"
              className="text-blue-500 hover:text-blue-600 inline-flex items-center gap-1 text-sm font-medium transition-colors"
            >
              <span className="text-lg">+</span>
              <span>Incident History</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

