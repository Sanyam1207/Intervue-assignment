import GuideCard from "@/components/GuideCard";
import { guides } from "@/data/GuideData";
import { Search } from "lucide-react";

export default function TechnicalInterviewResource() {
    return (
        <div className="bg-white md:px-24 px-5 py-5 md:py-10">
            <div className="max-w-4xl mx-auto text-center md:py-20 py-10">
                <h1 className="text-4xl font-normal text-gray-900 mb-3">
                    Technical Interview Resources
                </h1>
                <p className="text-gray-500 text-base mb-8">
                    Find all the technical interview resources here
                </p>

                <div className="relative md:max-w-3xl max-w-80 mx-auto">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-gray-500" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search for resource here"
                        className="w-full md:max-w-3xl  pl-12 pr-4 py-4 bg-gray-100 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:bg-white transition-colors"
                    />
                </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-2 mx-3 md:mx-0">
                {guides.map((guide, index) => (
                    <GuideCard key={index} {...guide} />
                ))}
            </div>
        </div>
    );
}
