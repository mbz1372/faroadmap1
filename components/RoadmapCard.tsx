import Link from "next/link";

export default function RoadmapCard({ slug, title, description, tags }:{ slug:string; title:string; description:string; tags:string[] }){
  return (
    <Link href={{ pathname: "/roadmaps/[slug]", params: { slug } }} as={`/roadmaps/${slug}`}>
      <div className="card p-5 hover:shadow-lg transition-shadow">
        <h3 className="font-bold text-lg mb-1">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map(t => <span key={t} className="badge">{t}</span>)}
        </div>
      </div>
    </Link>
  );
}
