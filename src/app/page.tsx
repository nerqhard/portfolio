import About from '@/components/about';
import Feedbacks from '@/components/feedbacks';
import Hero from '@/components/hero';
import Projects from '@/components/projects';
import Skills from '@/components/skills';
import { Separator } from '@/components/ui/separator';
import MatrixLoader from '@/components/custom/matrix-loader';
import Timeline from '@/components/time-line';
import ContactForm from '@/components/custom/contact-form';
import Marquee from '@/components/custom/marquee';

export default function Home() {
    return (
        <div className="flex flex-col overflow-x-hidden">
            <Hero />
            <Separator />
            <About />
            <Separator />
            <Timeline />
            {/* <Separator />
            <Projects /> */}
            {/* <Separator />
            <Feedbacks /> */}
            <Separator />
            <Skills />
            <Separator />
            <Marquee />
            <Separator />
            {/* <ContactForm />
            <Separator /> */}
            <MatrixLoader />
        </div>
    );
}
