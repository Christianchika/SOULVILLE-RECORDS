"use client";

import {useState} from "react";

export default function VideoUploader(){
  const [fileName,setFileName]=useState("");

  return <div className="video-uploader">
    <label className="upload-dropzone">
      <input type="file" accept="video/mp4,video/webm,video/quicktime" onChange={(e)=>setFileName(e.target.files?.[0]?.name ?? "")}/>
      <span className="upload-icon">+</span>
      <strong>{fileName || "Choose a video to upload"}</strong>
      <small>MP4, WebM or MOV • Upload integration can be connected to cloud storage before launch.</small>
    </label>
    {fileName && <div className="upload-selected"><span>{fileName}</span><button type="button" onClick={()=>setFileName("")}>Remove</button></div>}
  </div>;
}