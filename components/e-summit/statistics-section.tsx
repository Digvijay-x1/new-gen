import { Calendar, Users, TrendingUp } from "lucide-react";

const statsData = [
  {
    icon: Calendar,
    heading: "3 Days Event",
    description: "November 7 - 9, 2025",
    color: "from-blue-400 to-cyan-400",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Users,
    heading: "Industry Leaders",
    description: "Connect with visionaries",
    color: "from-purple-400 to-pink-400",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: TrendingUp,
    heading: "Growth Mindset",
    description: "Network and Learn",
    color: "from-yellow-400 to-amber-400",
    bgColor: "bg-yellow-500/10",
  },
];

const StatisticsSection = () => {
  return (
    <section className="relative py-10 mb-12 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-64 h-64 rounded-full top-1/3 left-1/4 bg-blue-500/5 blur-3xl animate-pulse"></div>
        <div className="absolute delay-1000 rounded-full bottom-1/4 right-1/3 w-80 h-80 bg-purple-500/5 blur-3xl animate-pulse"></div>
        <div className="absolute w-56 h-56 delay-500 rounded-full top-1/2 right-1/4 bg-yellow-400/5 blur-3xl animate-pulse"></div>
      </div>

      <div className="container relative z-10 px-4 mx-auto">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <div className="inline-block px-6 py-2 mb-4 border rounded-full bg-gradient-to-r from-slate-800/60 via-slate-700/60 to-slate-800/60 border-white/10 backdrop-blur-sm">
            <span className="text-lg font-semibold tracking-wider text-transparent uppercase md:text-2xl bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text">
              Event Highlights
            </span>
          </div>
          <h2 className="mb-4 text-4xl font-black text-transparent md:text-5xl bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text">
            Why Attend E-Summit?
          </h2>
          <div className="h-2 mx-auto rounded-full w-72 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400"></div>
        </div>

        {/* Statistics Grid */}
        <div className="grid max-w-5xl grid-cols-1 gap-8 mx-auto md:grid-cols-3">
          {statsData.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className={`group relative p-8 bg-gradient-to-br from-slate-800/40 via-slate-700/40 to-slate-800/40 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl transition-all duration-500 hover:-translate-y-3 ${stat.bgColor} hover:scale-105 hover:border-4`}
                style={{
                  animationDelay: `${index * 200}ms`,
                }}
              >
                {/* Icon Container */}
                <div className="relative mb-6">
                  <div
                    className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r ${stat.color} p-0.5 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className="flex items-center justify-center w-full h-full bg-slate-900 rounded-2xl">
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="mb-3 text-xl font-bold text-white transition-all duration-300 md:text-2xl group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text">
                    {stat.heading}
                  </h3>
                  <p className="text-lg leading-relaxed transition-colors duration-300 text-slate-300 group-hover:text-slate-100">
                    {stat.description}
                  </p>
                </div>

                {/* Hover glow effect */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`}
                ></div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-block p-6 border-4 bg-gradient-to-r from-slate-800/30 via-slate-700/30 to-slate-800/30 backdrop-blur-md rounded-2xl border-white/50">
            <p className="mb-4 text-xl font-bold text-slate-200">
              Ready to transform your entrepreneurial journey?
            </p>
            <div className="flex items-center justify-center gap-2 text-2xl font-bold text-transparent bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 bg-clip-text">
              <span>Join us at <span className="text-primary">E-Summit 2025</span></span>
              <div className="w-2 h-2 ml-2 rounded-full bg-gradient-to-r from-yellow-400 to-amber-400 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
