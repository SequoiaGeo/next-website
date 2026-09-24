import { ownerResources } from '@/data/owner-resources';
import PrintResource from '@/components/PrintResource';

export default function OwnerWorksheet({slug}:{slug:string}) {
  const r=ownerResources.find(item=>item.slug===slug);
  if(!r)return null;
  return <section id={slug} className="owner-worksheet mx-auto max-w-4xl px-5 py-12 scroll-mt-28">
    <h2 className="text-3xl font-bold">{r.tool}</h2>
    <p className="mt-5 text-lg">{r.answer}</p>
    <p className="mt-4">{r.instructions}</p><PrintResource/>
    <ol className="mt-6 space-y-5">{r.rows.map(([title,body],i)=><li className="border rounded-lg p-5 break-inside-avoid" key={title}>
      <h3 className="font-bold text-lg">{i+1}. {title}</h3><p className="mt-3">{body}</p>
      <p className="mt-4 text-sm text-gray-600">Your evidence / decision / next action:</p><div className="mt-4 border-b border-gray-400 h-8"/>
    </li>)}</ol>
    <div className="mt-8 space-y-6">{r.sections.map(([title,body])=><div key={title}><h3 className="font-bold text-xl">{title}</h3><p className="mt-3">{body}</p></div>)}</div>
  </section>;
}
