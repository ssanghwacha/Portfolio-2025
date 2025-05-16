export default function StyleGuide() {
    return (
        <div className="p-10 space-y-16 max-w-7xl mx-auto">
            {/* Section Title */}
            <section>
                <h2 className="text-3xl font-bold mb-4">
                    Grid System (12 Columns)
                </h2>
                <p className="text-neutral-600 mb-6">
                    Responsive 12-column layout using Tailwind
                </p>

                {/* Grid Example */}
                <div className="grid grid-cols-12 gap-2 text-white text-sm">
                    {Array.from({ length: 12 }).map((_, i) => (
                        <div
                            key={i}
                            className="bg-black py-3 text-center border border-white/10"
                        >
                            {i + 1}
                        </div>
                    ))}
                </div>
            </section>

            {/* Container Example */}
            <section>
                <h2 className="text-3xl font-bold mb-4">
                    Container + Grid Combo
                </h2>
                <div className="bg-gray-100 p-4">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white border shadow-sm p-6">
                            Column 1
                        </div>
                        <div className="bg-white border shadow-sm p-6">
                            Column 2
                        </div>
                        <div className="bg-white border shadow-sm p-6">
                            Column 3
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
