import React, { useState } from "react";
import "../youtStyles/uploadStyle.css"
import uploadBanner from "../img/uploadBanner.jpg"


function UploadVideo() {
   const [videoTitle, setVideoTitle] = useState("");
   const [videoDescription, setVideoDescription] = useState("");
   const [videoFile, setVideoFile] = useState(null);

   // Function to handle form submission
   const handleSubmit = (event) => {
     event.preventDefault();

     // Perform upload logic here (e.g., send data to a server)

     // Reset form after submission
     setVideoTitle("");
     setVideoDescription("");
     setVideoFile(null);
   };
  return (
    <div className="uploadVideo-section">
      <form className="uploadVideo-form" onSubmit={handleSubmit}>
        <h3
          style={{
            color: "#191943",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Upload Your Vidio Link
        </h3>
        <img src={uploadBanner} alt="" style={{ width: "100%", height: 150 }} />

        <div className="uploadDital">
          <div className="upload-Right">
            <label>
              Video Title:
              <input
                type="text"
                value={videoTitle}
                onChange={(e) => setVideoTitle(e.target.value)}
                required
              />
            </label>

            <label>
              Video Description:
              <textarea
                value={videoDescription}
                onChange={(e) => setVideoDescription(e.target.value)}
                required
              />
            </label>

            <label>
              Upload Video Link:
              <input
                type="text"
                accept="video/*"
                onChange={(e) => setVideoFile(e.target.files[0])}
                required
              />
            </label>
          </div>
          <div className="upload-Left">
            <label>
              Video Length:
              <input
                type="text"
                value={videoTitle}
                onChange={(e) => setVideoTitle(e.target.value)}
                required
              />
            </label>

            <label>
              Video Description:
              <textarea
                value={videoDescription}
                onChange={(e) => setVideoDescription(e.target.value)}
                required
              />
            </label>
            <div className="checkbox">
              <p> Video Claim:</p>
              <label>
                <span>
                  <input type="checkBox" />
                  <p>Subs</p>
                </span>
                <span>
                  <input type="checkBox" name="" id="" /> <p>Likes</p>
                </span>
                <span>
                  <input type="checkBox" /> <p>Watch </p>
                </span>
              </label>
            </div>
          </div>
        </div>

        <div className="form-button">
          <button type="submit">Upload Video</button>
          <button type="submit">Clear</button>
        </div>
      </form>
    </div>
  );
}

export default UploadVideo