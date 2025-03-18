import Link from 'next/link';
import { Reveal } from './custom/reveal';
import { Button } from './ui/button';

export default function Contact() {
    return (
        <section
            id="contact"
            className="flex flex-col items-center justify-center gap-4 py-16 sm:py-32"
        >
            <h2 className="scroll-m-20 font-mplus-rounded text-3xl font-extrabold tracking-tight lg:text-4xl">
                Get In Touch
            </h2>
            <Reveal
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.4 },
                }}
            >
                <p className="leading-7">
                    If you&apos;d like to get in touch with me, feel free to
                    reach out on LinkedIn or my email and I&apos;ll get back to
                    you whenever I can.
                </p>
            </Reveal>
            <div className="flex gap-4">
                <Reveal
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.4, delay: 0.1 },
                    }}
                >
                    <Link href="mailto:danhuy.work@gmail.com" target="_blank">
                        <Button
                            aria-label="Send an email to contact me"
                            className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-blue-500 bg-[linear-gradient(110deg,#000103,45%,#4C1D95,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 shadow-2xl shadow-blue-500/20 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                        >
                            Say Hi!
                        </Button>

                        {/* border-slate-800  bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] */}
                    </Link>
                </Reveal>
            </div>
        </section>
    );
}
