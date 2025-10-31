"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Phone } from "lucide-react";
import Link from "next/link";

const faqs = [
    {
        question: "How do I schedule an interview?",
        answer: "You can schedule an interview through our dashboard by selecting your preferred date and time. A confirmation email will be sent to you once it’s scheduled.",
    },
    {
        question: "Will I be charged per interview?",
        answer: "Yes, charges are applied per interview conducted. Pricing depends on the interview type and experience level of the interviewer.",
    },
    {
        question: "Can I get a trial for On-demand interviews?",
        answer: "Absolutely! We offer a limited free trial for new users to experience On-demand interviews before subscribing.",
    },
];

export default function FaqSection() {
    return (
        <section className="bg-[#F8EDED] py-20 px-6 md:px-16">
            <div className="md:mx-24 grid grid-cols-1 md:grid-cols-2 md:gap-12 gap-8">

                {/* LEFT SIDE */}
                <div className="">
                    <h2 className="text-3xl font-semibold mb-4 text-gray-900 hidden md:block">FAQs</h2>
                    <h2 className="text-3xl font-semibold mb-4 text-gray-900 md:hidden block">Frequently Asked Questions</h2>
                    <p className="text-gray-600 md:mb-10 max-w-md">
                        Here are frequently asked questions to clear all your doubts.
                    </p>
                    <div className="hidden md:block">
                        <p className="font-medium text-gray-800">Still have doubts?</p>
                        <Link
                            href="#"
                            className="flex items-center gap-2 text-blue-800 font-medium mt-2 hover:underline"
                        >
                            <Phone className="w-4 h-4" />
                            Talk to our representative
                        </Link>
                    </div>

                </div>

                {/* RIGHT SIDE */}
                <div className="space-y-2">
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="border-b w-full py-1    border-black px-4">
                                <AccordionTrigger className="text-base font-semibold text-gray-900 py-4">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>

                <div className="md:hidden block px-3">
                    <p className="font-medium text-gray-800">Still have doubts?</p>
                    <Link
                        href="#"
                        className="flex items-center gap-2 text-blue-800 font-medium hover:underline"
                    >
                        <Phone className="w-4 h-4" />
                        Talk to our representative
                    </Link>
                </div>

            </div>
        </section>
    );
}
