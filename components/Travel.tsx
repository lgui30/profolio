const travelEntries = [
  {
    title: 'Houston — Long Weekend №01',
    href: '/travel/houston-2026.html',
  },
  {
    title: 'Yellowstone — Field Guide №07',
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
              <article className="group -mx-4 border-b border-gray-100 px-4 py-5 transition-colors hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-900/50">
                <h3 className="text-lg font-bold text-black decoration-2 decoration-[#FFB74D] group-hover:underline dark:text-white">
                  {entry.title}
                </h3>
              </article>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Travel
