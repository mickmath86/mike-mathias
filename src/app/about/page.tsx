import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Spencer Sharp. I live in New York City, where I design the future.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          A tech-driven producer who turned a love for gaming into a career creating global campaigns, always chasing that same sense of wonder.    
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
             
              I’ve always had a thing for technology, ever since that fateful day I booted up X-Wing on a Windows PC. That game wasn’t just a bunch of pixels on a screen; it was a portal to another universe. I was hooked—completely, utterly fascinated. Soon, I was tearing through code, creating my own skins for Counter-Strike, molding the game into something personal. It wasn’t just the games themselves; it was the raw, unfiltered potential of computers that got me. These machines could be anything, do anything, if only you knew how to ask them the right questions.
              </p>
              <p>
              Then came the Apple Store. I took a job during the release of the very first iPhone—a moment in time that felt like the dawn of a new civilization. People lined up for hours, faces lit up like kids seeing Disneyland for the first time. There was something primal in their awe. That little device had the power to change lives, and I wanted to know everything about it. I watched people cradle their new iPhones like precious artifacts, and in that instant, I realized I wanted to create moments like that. To give people something that not only worked but inspired them to see the world differently.
              </p>
              <p>
              After that, my path led me to Los Angeles, where I landed my first agency gig. If Apple opened the door, this job blew it off its hinges. I was surrounded by some of the most ingenious tech minds I had ever encountered—wizards with keyboards, masters of algorithms, and digital alchemists who could turn code into experiences that connected people around the world. It was intoxicating, and it wasn’t just work; it was a cosmic dance of creativity and precision. It’s also where I met my wife, Dana, which, in itself, felt like finding a rare, perfectly engineered algorithm of life.
              </p>
              <p>
              Marketing and advertising became my playground, where the art of communication and the science of technology collided in spectacular fashion. I’ve been lucky enough to work on projects that have made a real dent in the universe, touching millions of people in ways I never imagined when I was just a kid, huddled over my keyboard, skinning virtual characters.
              </p>
              <p>
              Now, here I am in Ventura County, living life with Dana and our son Ryan, who we welcomed into the world in 2023. There’s something poetic about it all—how the journey from coding Counter-Strike mods in my bedroom led to this. Every day, I’m still chasing that thrill, still staring at screens with the same wonder I had back when I first discovered what they were capable of. The world keeps turning, technology keeps evolving, and I’m just lucky enough to be along for the ride.
            </p>
            
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://x.com/mickmath86" icon={XIcon}>
              Follow on X
            </SocialLink>
            <SocialLink href="https://www.instagram.com/mickmath/" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            <SocialLink href="https://github.com/mickmath86" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/mmathias86/" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:mickmath86@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              mickmath86@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
