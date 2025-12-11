import { Sparkles, Maximize2, Wind, Lightbulb, Wifi, MapPin } from "lucide-react";

interface FeaturesProps {
    t: any;
}

export default function Features({ t }: FeaturesProps) {
    return (
        <section className="py-32 bg-gradient-to-br from-white via-[#f8f6f3] to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-6xl font-bold text-[#003B4A] mb-6">
                        {t.features.title}
                    </h2>
                    <div className="w-32 h-1 bg-[#D9C18E] mx-auto" />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {t.features.items.map((feature: any, index: number) => {
                        const icons = [Sparkles, Maximize2, Wind, Lightbulb, Wifi, MapPin];
                        const Icon = icons[index];

                        return (
                            <div key={index} className="group relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#D9C18E] to-[#c4a76d] rounded-3xl transform group-hover:scale-105 transition duration-500 opacity-0 group-hover:opacity-100" />

                                <div className="relative bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition duration-500 border border-[#D9C18E]/20">

                                    <div className="w-20 h-20 bg-gradient-to-br from-[#D9C18E] to-[#c4a76d] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                                        <Icon className="text-white" size={36} />
                                    </div>

                                    <h3 className="text-2xl font-bold text-[#003B4A] mb-4">
                                        {feature.title}
                                    </h3>

                                    <p className="text-gray-600 leading-relaxed">
                                        {feature.description}
                                    </p>

                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
