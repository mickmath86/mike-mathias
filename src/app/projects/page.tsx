import { type Metadata } from 'next'
import Image from 'next/image'
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'

function Article({ article }: { article: ArticleWithSlug }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
       
          <Image height={150} width={150} alt="Project Image" src={article.image} className="w-full h-full mb-4"/>
          <div>
          <Card.Title href={`/projects/${article.slug}`} >
            <div className="z-20">{article.title} - {article.client}</div> 
          </Card.Title>
       
       
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {/* {formatDate(article.date)} */}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>View Project</Card.Cta>
        </div>

      </Card>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="mt-1 hidden md:block"
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
      
    </article>
  )
}

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Delivering tailored solutions that inspire growth, foster innovation, and drive measurable impact across every project.',
}

export default async function ArticlesIndex() {
  let articles = await getAllArticles()

  return (
    <SimpleLayout
      title="Bringing Ideas to Life with Strategic Thinking, Creative Vision, and Seamless Execution"
      intro="Delivering tailored solutions that inspire growth, foster innovation, and drive measurable impact across every project."
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {articles.map((article) => (
            <Article key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </SimpleLayout>
  )
}
