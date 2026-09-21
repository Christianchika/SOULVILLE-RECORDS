import { artists } from "@/data/artists";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export function generateStaticParams(){return artists.map(a=>({slug:a.slug}));}
export default async function ArtistPage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const artist=artists.find(a=>a.slug===slug);if(!artist)return <><Header/><main className="page section"><h1>Artist not found</h1></main><Footer/></>;return <><Header/><main className="profile"><div className="profile-image">{artist.name[0]}</div><div><div className="section-label">{artist.genre}</div><h1>{artist.name}</h1><p>{artist.bio}</p><a className="button" href="/music">Explore releases</a></div></main><Footer/></>}