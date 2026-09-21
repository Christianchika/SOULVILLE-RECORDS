import { releases } from "@/data/releases";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export function generateStaticParams(){return releases.map(r=>({slug:r.slug}));}
export default async function ReleasePage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const release=releases.find(r=>r.slug===slug);if(!release)return <><Header/><main className="page section"><h1>Release not found</h1></main><Footer/></>;return <><Header/><main className="profile"><div className="cover large">{release.title[0]}</div><div><div className="section-label">{release.type} · {release.year}</div><h1>{release.title}</h1><h3>{release.artist}</h3><p>{release.description}</p><a className="button" href="#">Listen / Stream</a></div></main><Footer/></>}