"use client";

import AdministrationAppStatus from './administration-app-status';
import { useTranslations } from "next-intl";

interface Incident {
  date: string;
  issue?: string;
  resolution?: string;
  timestamp?: string;
}

export default function ServicesPage() {
  const t = useTranslations("services");

  const services = [
    {
      name: t("services.core"),
      uptime: 100,
    },
    {
      name: t("services.administrationApp"),
      uptime: 100,
    },
    {
      name: t("services.desktopApp"),
      uptime: 100,
    },
    {
      name: t("services.currencyBoard"),
      uptime: 100,
    },
    {
      name: t("services.systemBlog"),
      uptime: 100,
    },
    {
      name: t("services.support"),
      uptime: 100,
    },
  ];
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
          <h1 className="text-4xl md:text-5xl  text-black mb-4">
            {t("hero.title")}
          </h1>
          <p className="text-lg md:text-xl text-[#666666]">
            {t("hero.subtitle")}
          </p>
        </div>
      </section>

      {/* Scheduled Maintenance Section */}
      <section className="bg-[#F8F8F1] py-16 px-6 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              {t("scheduledMaintenance.title")}
            </h2>
          </div>

          {/* Maintenance Card */}
          <div className="bg-white rounded-2xl p-8 md:p-12 max-w-6xl mx-auto border border-gray-200 shadow-sm">
            <h3 className="text-2xl md:text-3xl font-semibold text-black mb-4">
              {t("scheduledMaintenance.title")}
            </h3>
            <p className="text-gray-600 ">
              {t("scheduledMaintenance.scheduledFor")} <span className="text-[#999999]">Nov 19, 2025 03:00-04:00 UTC</span>
            </p>
            <div className="border-t border-[#E9E9E0] my-2 mb-6"></div>
            <p className="text-[#666666] leading-relaxed mb-10">
              {t("scheduledMaintenance.description")}
            </p>
            <p className="text-[#999999] text-sm">
              {t("scheduledMaintenance.postedOn")} Oct 21, 2025 - 21:28 UTC
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white py-16 px-6 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            {t("allSystemsOperational.title")}
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
              {t("pastIncidents.title")}
            </h2>
          </div>

          <div className="max-w-7xl mx-auto space-y-4">
            {incidents.map((incident, index) => (
              <div key={index} className="bg-[#F5F5F0] rounded-4xl p-6">
                <p className="text-gray-700 font-medium mb-2">{incident.date}</p>
                <div className="border-t border-[#E9E9E0] my-2 mb-4"></div>
                {incident.issue ? (
                  <>
                    <p className="text-orange-600 mb-2">{incident.issue}</p>
                    <p className="text-gray-900 mb-1">{incident.resolution}</p>
                    <p className="text-gray-400 text-sm">{incident.timestamp}</p>
                  </>
                ) : (
                  <p className="text-gray-500">{t("pastIncidents.noIncidents")}</p>
                )}
              </div>
            ))}
          </div>

          {/* Incident History Link */}
          <div className="max-w-6xl mx-auto m-8">
            <a
              href="#"
              className="text-[#0EAA9A] hover:text-[#0EAA9A]/80 inline-flex items-center gap-1 text-sm font-medium transition-colors"
            >
              <span className="text-lg">+</span>
              <span>{t("pastIncidents.incidentHistory")}</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

