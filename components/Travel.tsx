const travelEntries = [
  {
    title: 'Houston — Long Weekend №01',
    destination: 'Houston, TX',
    dates: 'May 23–25, 2026',
    duration: '3 days',
    description:
      'A food-first urban weekend for Wendy & Lang — Haidilao hot pot in Katy, Chinese skewers on Bellaire, the MFAH Berggruen opening, and Opera Gallery\'s Monet. Toll-free I-10 routing, interactive map, and hour-by-hour schedule included.',
    tags: ['Texas', 'Food', 'Art'],
    href: '/travel/houston-2026.html',
  },
  {
    title: 'Yellowstone — Field Guide №07',
    destination: 'Island Park, WY / MT / ID',
    dates: 'Jun 3–7, 2026',
    duration: '5 days',
    description:
      'A four-night wilderness itinerary for Wendy & Lang — geysers, bison, wolves, and the northern loop. Island Park base camp. Provisioning guide, hour-by-hour days, and all drive times included.',
    tags: ['Wyoming', 'Montana', 'Idaho'],
    href: '/travel/yellowstone-2026.html',
  },
]

const Travel = () => {
  return (
    <section id="travel" className="bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-8 py-12">
        <h2 className="text-2xl font-black uppercase tracking-tight text-black dark:text-white mb-8 pb-6 border-b border-gray-200 dark:border-gray-800">
          Travel
        </h2>

        <div className="space-y-0">
          {travelEntries.map((entry) => (
            <a
              key={entry.href}
              href={entry.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <article className="group py-8 border-b border-gray-100 dark:border-gray-800 -mx-4 px-4 rounded transition-colors cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-900/50">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-bold text-black dark:text-white group-hover:underline decoration-2 decoration-[#FFB74D]">
                      {entry.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 whitespace-nowrap mt-1">
                    <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      {entry.dates}
                    </span>
                    <span className="text-gray-300 dark:text-gray-600">&middot;</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      {entry.duration}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-2">
                  {entry.destination}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3 max-w-2xl">
                  {entry.description}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {entry.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] uppercase tracking-wider font-medium text-gray-500 dark:text-gray-400 border border-gray-300 dark:border-gray-600 px-2 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Travel
