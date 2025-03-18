import Image from 'next/image';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from './ui/tooltip';
import Link from 'next/link';
import { Button } from './ui/button';

import { AtSign, Github, Linkedin } from 'lucide-react';
import { Reveal } from './custom/reveal';
import { TypewriterEffectSmooth } from './ui/typewriter-effect';

import { Readcv } from '@/components/ui/readcv';

export default function Hero() {
    const name = [{ text: 'Nguyen' }, { text: 'Quang' }, { text: 'Ha' }];

    return (
        <header
            id="hero"
            className="mt-16 flex h-screen w-full flex-col items-center justify-center gap-4 sm:flex-row"
        >
            <div className="text-spotlight flex w-full flex-col gap-2">
                <TypewriterEffectSmooth words={name} />
                <Reveal
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.4 },
                    }}
                >
                    <h3 className="text-red-500 scroll-m-20 bg-opacity-50 bg-gradient-to-b from-neutral-900 to-neutral-700 bg-clip-text font-mplus-rounded text-2xl font-semibold tracking-tight text-transparent dark:from-neutral-50 dark:to-neutral-400">
                        Full-stack Developer
                    </h3>
                </Reveal>
                <Reveal
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.4, delay: 0.2 },
                    }}
                >
                    <p className="font-mplus-rounded leading-7">
                        I'm a full-stack developer with a passion for building
                        scalable and efficient web applications.
                        <br />
                        I'm currently working as a full-stack developer at{' '}
                        <Link
                            href="https://hitachids.com/"
                            target="_blank"
                            className="font-bold text-red-400"
                        >
                            Hitachi Digital Services Vietnam
                        </Link>
                        .
                    </p>
                </Reveal>
                <div className="flex gap-4">
                    <TooltipProvider>
                        <Reveal
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.4 },
                            }}
                        >
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link
                                        href="https://www.linkedin.com/in/nerqhard/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Button
                                            variant="secondary"
                                            size="icon"
                                            aria-label="LinkedIn"
                                        >
                                            <Linkedin />
                                        </Button>
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>LinkedIn</p>
                                </TooltipContent>
                            </Tooltip>
                        </Reveal>
                        <Reveal
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.4, delay: 0.2 },
                            }}
                        >
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link
                                        href="https://github.com/nerqhard"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Button
                                            variant="secondary"
                                            size="icon"
                                            aria-label="Github"
                                        >
                                            <Github />
                                        </Button>
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Github</p>
                                </TooltipContent>
                            </Tooltip>
                        </Reveal>
                        <Reveal
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.4, delay: 0.4 },
                            }}
                        >
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link
                                        href="mailto:nqh1594@gmail.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Button
                                            variant="secondary"
                                            size="icon"
                                            aria-label="Email"
                                        >
                                            <AtSign />
                                        </Button>
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Email</p>
                                </TooltipContent>
                            </Tooltip>
                        </Reveal>
                        <Reveal
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.4, delay: 0.4 },
                            }}
                        >
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link
                                        download
                                        href="/CV_NguyenQuangHa.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Button
                                            variant="secondary"
                                            size="icon"
                                            aria-label="Download Resume"
                                        >
                                            <Readcv />
                                        </Button>
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Resume</p>
                                </TooltipContent>
                            </Tooltip>
                        </Reveal>
                    </TooltipProvider>
                </div>
            </div>
            <div className="relative flex h-full w-full">
                <Image
                    src={'/assets/images/me.jpg'}
                    alt="Me"
                    fill
                    priority
                    style={{ objectFit: 'contain' }}
                    className="rounded-md object-cover scale-75"
                />
            </div>
        </header>
    );
}
