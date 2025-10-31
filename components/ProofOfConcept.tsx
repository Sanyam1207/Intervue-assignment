import { Play } from "lucide-react";

export default function TestimonialSection() {
    return (
        <section className="bg-[#f9fafb] flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-24 py-16 gap-10">
            {/* Left side - Video thumbnail */}
            <div className="relative w-full md:w-[56%] max-h-80 aspect-[16/9] overflow-hidden rounded-r-full">
                <img
                    src="/imageassignment.png"
                    alt="Niket Gupta, Head of Acquisition, Yubi"
                    className="w-full h-full object-cover"
                />
                {/* <div className="absolute inset-0 flex items-center justify-center">
                    <button className="bg-blue-600 hover:bg-blue-700 transition-colors p-4 rounded-full">
                        <Play className="w-8 h-8 text-white" />
                    </button>
                </div> */}
                <div className="absolute bottom-7 left-8 text-white drop-shadow-lg">
                    <p className="font-semibold text-lg">Niket Gupta</p>
                    <p className="text-sm opacity-90">Head of Acquisition, Yubi</p>
                </div>
            </div>

            {/* Right side - Quote and Text */}
            <div className="md:w-[40%] md:text-left">
                <p className="text-lg text-gray-700 max-w-md leading-relaxed mb-3 md:mb-6">
                    After interviewing candidates on Intervue, we were able to convert at
                    least <span className="font-semibold">5% of people</span> from our
                    application base to hires.
                </p>
                <div>
                    <p className="font-semibold text-gray-900 text-lg">Niket Gupta</p>
                    <p className="text-gray-600 mb-3 md:mb-6">
                        Group head of talent acquisition, Yubi
                    </p>
                    <a
                        href="#"
                        className="text-blue-800 font-medium hover:underline"
                    >
                        See more customer stories →
                    </a>
                </div>
            </div>
        </section>
    );
}
