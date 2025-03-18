'use client';

import { useState, useRef, memo, useMemo, useEffect } from 'react';
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
    useInView,
} from 'framer-motion';
import { Reveal } from './custom/reveal';
import { Badge } from './ui/badge';
import { ArrowRightIcon } from 'lucide-react';
import workExperiences from '@/lib/work-experiences.json';

function useMediaQuery(query: string) {
    const [matches, setMatches] = useState(false);
    useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        const listener = () => setMatches(media.matches);
        media.addEventListener('change', listener);
        return () => media.removeEventListener('change', listener);
    }, [matches, query]);
    return matches;
}

interface WorkIconProps {
    progress: number;
    strokeColor?: string;
    className?: string;
    title?: string;
}

export const WorkIcon = memo(function WorkIcon({
    progress,
    strokeColor = 'currentColor',
    className = 'w-6 h-6 text-white',
    title = 'Work Icon',
}: WorkIconProps) {
    const scaleStyle = useMemo(
        () => ({ transform: `scale(${progress})` }),
        [progress],
    );

    return (
        <motion.svg
            role="img"
            aria-label={title}
            viewBox="0 0 24 24"
            fill="none"
            stroke={strokeColor}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            style={scaleStyle}
        >
            <title>{title}</title>
            <path d="M4 7V5C4 3.89543 4.89543 3 6 3H18C19.1046 3 20 3.89543 20 5V7" />
            <path d="M4 7H20V21H4V7Z" />
            <path d="M8 11H16" />
        </motion.svg>
    );
});

export default function Timeline() {
    const [expandedEvent, setExpandedEvent] = useState<number | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 100,
        restDelta: 0.003,
    });

    const isMobile = useMediaQuery('(max-width: 640px)');

    return (
        <section
            id="experiences"
            ref={containerRef}
            className="overflow-hidden bg-background py-20"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="mb-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                        Where I&apos;ve worked
                    </h2>
                    <br />
                </motion.div>

                <div className="relative">
                    {/* Vertical line */}
                    <motion.div
                        className="absolute left-1/2 h-full w-0.5 -translate-x-1/2 transform bg-primary/20"
                        style={{ scaleY: scaleX }}
                    />

                    {/* Work Icon */}
                    <motion.div
                        className="sticky"
                        style={{
                            top: isMobile ? '10%' : '48%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            zIndex: 10,
                            color: 'var(--primary)',
                            y: useTransform(
                                scrollYProgress,
                                [0, 200],
                                [0, 100],
                            ),
                        }}
                    ></motion.div>

                    {workExperiences.map((event, index) => (
                        <TimelineEvent
                            key={index}
                            event={event}
                            index={index}
                            isExpanded={expandedEvent === index}
                            onToggle={() =>
                                setExpandedEvent(
                                    expandedEvent === index ? null : index,
                                )
                            }
                            isMobile={isMobile}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function TimelineEvent({
    event,
    index,
    isExpanded,
    onToggle,
    isMobile,
}: {
    event: {
        position: string;
        company: string;
        duration: string;
        responsibilities: string[];
        skills: string[];
    };
    index: number;
    isExpanded: boolean;
    onToggle: () => void;
    isMobile: boolean;
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    return (
        <motion.div
            ref={ref}
            className={`mb-8 ${isMobile ? 'flex flex-col items-center' : `flex w-full items-center justify-between ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}`}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
        >
            {/* Trên desktop: để khoảng trống bên trái cho căn lề xen kẽ, còn mobile thì không cần */}
            {isMobile ? null : <div className="w-5/12" />}
            <div className="mb- isMobile:mb-0 z-20">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
                    <div className="h-3 w-3 rounded-full bg-background" />
                </div>
            </div>
            <motion.div
                className={
                    isMobile
                        ? 'z-30 mt-4 w-full cursor-pointer'
                        : 'w-5/12 cursor-pointer'
                }
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onToggle}
            >
                <div className="rounded-lg border border-primary/10 bg-background p-4 shadow-md">
                    <span className="font-bold text-primary">
                        {event.position}
                    </span>
                    <p className="text-sm text-muted-foreground">
                        {event.company} &bull; {event.duration}
                    </p>
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                            height: isExpanded ? 'auto' : 0,
                            opacity: isExpanded ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="mt-2 overflow-hidden"
                    >
                        <div className="text-sm text-muted-foreground">
                            <ul className="space-y-4">
                                {event.responsibilities.map(
                                    (responsibility, index) => (
                                        <li
                                            key={index}
                                            className="flex items-start"
                                        >
                                            <ArrowRightIcon className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                                            <span>{responsibility}</span>
                                        </li>
                                    ),
                                )}
                            </ul>
                            <br />
                            <div className="flex flex-wrap gap-2">
                                {event.skills.map((skill) => (
                                    <Reveal
                                        key={skill}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{
                                            opacity: 1,
                                            y: 0,
                                            transition: {
                                                duration: 0.1,
                                                delay: index / 40,
                                            },
                                        }}
                                    >
                                        <Badge variant="default">{skill}</Badge>
                                    </Reveal>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    );
}
