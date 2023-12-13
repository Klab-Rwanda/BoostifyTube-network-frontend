import React from 'react'
import "../youtStyles/uploadStyle.css"
import DashCards from './DashCards'

function UploadVideo() {
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
               className="youtubertextarea"/>
            </label>

            <label>
              Upload Video Link:
              <input
                type="text"
                accept="video/*"
                onChange={(e) => setVideoFile(e.target.files[0])}
                required
               className="youtuberinput"/>
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
               className="youtubertextarea"/>
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
          <button type="submit" className="youtuber-button ">Upload Video</button>
          <button type="submit" className="youtuber-button ">Clear</button>
        </div>
      </form>
    </div>
  )
}

export default UploadVideo