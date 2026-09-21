import { artists } from "@/data/artists";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default function ArtistsPage(){return <><Header/><main className="section page"><div className="section-label">ARTISTS / ROSTER</div><h1 className="page-title">The <em>artists.</em></h1><div className="artist-grid">{artists.map(a=><article className="artist-card" key={a.slug}><div className="artist-image">{a.name[0]}</div><p>{a.genre}</p><h2>{a.name}</h2><a className="text-link" href={"/artists/"+a.slug}>View profile →</a></article>)}</div></main><Footer/></>}