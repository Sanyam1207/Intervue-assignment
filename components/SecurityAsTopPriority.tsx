import { Key, Layers, Rocket, Globe, ArrowRight, Layers3, KeyRound } from 'lucide-react';
import ProofOfConcept from './ProofOfConcept';

export default function SecurityPrioritySection() {
    return (
        <div className="w-full bg-gray-50 py-16 px-5 md:px-24">
            <div className="md:max-w-5xl">
                <h2 className="text-4xl font-normal text-gray-900 mb-3">
                    Security is our top priority
                </h2>
                <p className="text-gray-600 text-lg mb-12 max-w-80 md:max-w-none">
                    Intervue serves startups to fortune 500 companies with<br />
                    enterprise grade security baked in by design
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
                    {/* Security Card - Large, spans 2 rows */}
                    <div className="bg-white shadow-xl p-8 hover:shadow-2xl transition-shadow cursor-pointer md:row-span-2">
                        <div className="flex flex-col">
                            <div className="mb-4">
                                <KeyRound className="w-8 h-8 fill-black" />
                            </div>

                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                Security
                            </h3>

                            <p className="text-gray-600 mb-6">
                                Protecting your data at every layer is fundamental to how Intervue works
                            </p>

                            <div className="flex items-center justify-end ">
                                <ArrowRight className="w-6 h-6 text-gray-900-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    </div>

                    {/* Compliances Card - Large, spans 2 rows */}
                    <div className="bg-white shadow-xl hover:shadow-2xl p-8  transition-shadow cursor-pointer md:row-span-2">
                        <div className="flex flex-col h-full">
                            <div className="mb-4">
                                <Layers3 className="w-8 h-8 fill-black" />
                            </div>

                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                Compliances
                            </h3>

                            <p className="text-gray-600 mb-6 ">
                                Enterprise grade compliance commitments where we have established controls to adhere to those commitments
                            </p>

                            <div className="flex items-center justify-end ">
                                <ArrowRight className="w-6 h-6 text-gray-900-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    </div>

                    {/* Intervue for Startups Card - Small */}
                    <div className="bg-white shadow-xl hover:shadow-2xl flex flex-col justify-around px-4 py-4 transition-shadow cursor-pointer">
                        <div className="flex flex-col ">
                            <div className="mb-2">
                                <Rocket className="w-8 h-8 mb-2 fill-black" />
                            </div>

                            <h3 className="text-md font-semibold flex justify-between text-gray-900 ">
                                Intervue for Startups <ArrowRight className="w-6 h-6 justify-end text-gray-900-hover:translate-x-1 transition-transform" />
                            </h3>
                        </div>
                    </div>

                    {/* Intervue for Enterprises Card - Small */}
                    <div className="bg-white shadow-xl hover:shadow-2xl px-4 py-4 flex flex-col justify-around transition-shadow cursor-pointer">
                        <div className="flex flex-col">
                            <div className="mb-2">
                                <Globe className="w-8 h-8 mb-2" />
                            </div>

                            <h3 className="text-md font-semibold flex justify-between text-gray-900 ">
                                Intervue for Enterprises <ArrowRight className="w-6 h-6 justify-end text-gray-900-hover:translate-x-1 transition-transform" />
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}