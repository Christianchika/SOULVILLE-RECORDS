import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VideoUploader from "@/components/VideoUploader";

const videos=[
  {title:"After Dark — Official Video",artist:"Artist One",type:"Music Video"},
  {title:"Soulville Sessions — Live",artist:"Various Artists",type:"Session"},
  {title:"Behind the Sound",artist:"Soulville Records",type:"BTS"}
];

export default function Videos(){
  return <><Header/><main>
    <section className="section page video-page-hero">
      <div className="section-label">VIDEOS</div>
      <h1 className="page-title">See the<br/><em>sound.</em></h1>
      <p className="page-lead">Music videos, live sessions and stories from the Soulville world. Replace these placeholders with official video embeds or uploaded media.</p>
    </section>
    <section className="section">
      <div className="section-heading"><div className="section-label">VIDEO LIBRARY</div><h2>Press<br/><em>play.</em></h2></div>
      <div className="video-grid">{videos.map(video=><article className="video-card" key={video.title}>
        <div className="video-thumbnail"><span>▶</span><small>{video.type}</small></div>
        <div className="section-label">{video.type}</div><h2>{video.title}</h2><p>{video.artist}</p>
      </article>)}</div>
    </section>
    <section className="section upload-section">
      <div className="section-heading"><div className="section-label">VIDEO UPLOADS</div><h2>Add new<br/><em>visuals.</em></h2></div>
      <VideoUploader/>
    </section>
  </main><Footer/></>;
}