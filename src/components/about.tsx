import { Reveal } from './custom/reveal';

export default function About() {
    return (
        <section className="flex flex-col items-start justify-start gap-4 py-16 sm:py-32">
            <h2
                id="about"
                className="scroll-m-20 font-mplus-rounded text-3xl font-extrabold tracking-tight lg:text-4xl"
            >
                About Me
            </h2>
            <Reveal
                initial={{ opacity: 0, x: 50 }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.4 },
                }}
            >
                <p className="text-lg leading-7 text-muted-foreground">
                    💻 Coding is not just a job—it's my passion. With 5+ years
                    of experience in Fullstack Development, I thrive on crafting
                    high-performance web applications that deliver real value.
                    <br />
                    <br />
                    🔥 My expertise lies in ReactJS, NextJS, and NodeJS,
                    allowing me to build modern, scalable solutions. Currently,
                    I'm expanding my skills in Backend & DevOps to master the
                    entire development lifecycle—from system architecture to
                    deployment and optimization.
                    <br />
                    <br />I believe that technology never stops evolving, and
                    neither do I. I'm always learning, innovating, and pushing
                    boundaries to create better, faster, and smarter digital
                    experiences. 🚀 .
                </p>
            </Reveal>
        </section>
    );
}
