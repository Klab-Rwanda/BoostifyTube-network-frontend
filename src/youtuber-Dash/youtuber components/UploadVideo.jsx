import React, { useState } from "react";
import "../youtStyles/uploadStyle.css"
import uploadBanner from "../img/uploadBanner.jpg"
import {useForm} from "react-hook-form"
import { DevTool } from "@hookform/devtools";
import axios from "axios";
// import DashCards from './DashCards'import axios from "axios";


function UploadVideo() {

 

const form = useForm();
const { register, control ,handleSubmit,formState} = form;
const {errors}= formState;
const onSubmit = async (data) => {
  console.log("form submmited", data);

  //   try {
  //     // Send a POST request to the server endpoint
  //     const response = await axios.post(
  //       "https://boostifytube-network-api.onrender.com/ /api/v1/video/upload",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(formData),
  //       }
  //     );

  //     // Handle the response
  //     if (response.ok) {
  //       alert("Video uploaded successfully");
  //       // Optionally reset the form or perform other actions
  //     } else {
  //       const errorData = await response.json();
  //       alert(`Error: ${errorData.message}`);
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //     alert("An error occurred while uploading the video");
  //   }
  // };
  try {
    // Send a POST request to the server endpoint
    const response = await axios.post(
      "https://boostifytube-network-api.onrender.com/api/v1/video/upload",
      data
    );

    // Handle the response
    if (response.status === 200) {
      alert("Video uploaded successfully");
      // Optionally reset the form or perform other actions
    } else {
      const errorData = response.data; // Assuming your API returns error information
      alert(`Error: ${errorData.message}`);
    }
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred while uploading the video");
  }
};





  return (
    <div className="uploadVideo-section">
      <form
        className="uploadVideo-form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
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
                name="title"
                {...register("title", {
                  required: {
                    value: true,
                    message: "Titile is very Required",
                  },
                })}
              />
              <p style={{ color: "red" }}>{errors.title?.message}</p>
            </label>

            <label>
              Video Description:
              <textarea
                {...register("description", {
                  required: {
                    value: true,
                    message: "Description is very Required",
                  },
                })}
              />
              <p style={{ color: "red" }}>{errors.description?.message}</p>
            </label>

            <label>
              Upload Video Link:
              <input
                type="text"
                {...register("linkOfVideo", {
                  pattern: {
                    value: /^(ftp|http|https):\/\/[^ "]+$/,
                    message: " Invalid youtube Link",
                  },
                })}
              />
              <p style={{ color: "red" }}>{errors.linkOfVideo?.message}</p>
            </label>
          </div>
          <div className="upload-Left">
            <label>
              Video Length:
              <input
                type="text"
                {...register("lengthOfVideo", {
                  required: {
                    value: true,
                    message: "lengthOfVideo is very Required",
                  },
                })}
              />
              <p style={{ color: "red" }}>{errors.lengthOfVideo?.message}</p>
            </label>

            <label>
              Video Comment
              <textarea {...register("comment")} required />
              <p style={{ color: "red" }}>{errors.comment?.message}</p>
            </label>
            <div className="checkbox">
              <p style={{ color: "black" }}> Video Claim:</p>
              <label style={{ color: "black" }}>
                <span>
                  <input type="checkBox" {...register("subscribers")} />
                  <p>Subs</p>
                </span>
                <span>
                  <input type="checkBox" name="likes" {...register("likes")} />{" "}
                  <p>Likes</p>
                </span>
                <span>
                  <input type="checkBox" {...register("views")} /> <p>Watch </p>
                </span>
              </label>
            </div>
          </div>
        </div>

        <div className="form-button">
          <button type="submit">Upload Video</button>
          <button type="reset">Clear</button>
        </div>
      </form>
      <DevTool control={control} />
    </div>
  );
}

export default UploadVideo


  //  dddddddddddddddddddddddddddd
  // const [input, setInput] = useState({
  //   videoTitle: "",
  //   videoDescription: "",
  //   uploadVideoLink: "",
  //   videoLength: "",
  //   videoComment: "",
  //   requestCheckSub: "",
  //   requestCheckLike: "",
  //   requestCheckViews: "",
  // });
  //  const handleChange = (e)=>{
  //   setInput({ ...input, [e.target.name]: e.target.value });
  // }
  //  const [videoTitle, setVideoTitle] = useState("");
  //  const [videoDescription, setVideoDescription] = useState("");
  //  const [uploadVideoLink, setUploadVideoLink] = useState("");
  //  const [videoComment, setvideoComment] = useState("");
  //  const [requestCheck, setRequestCheck] = useState("");   
  //  const [videoLength, setVideoLength] = useState("");
    
  //  console.log(videoTitle + uploadVideoLink);

   // Function to handle form submission
 
  //  const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   // Prepare data to send to the server
  //   const formData = {
  //     videoTitle,
  //     videoDescription,
  //     uploadVideoLink,
  //     videoComment,
  //     requestCheck,
  //     videoLength,
  //   };
    //  const handleChange = (e) => {
    //    setInput({ ...formData, [e.target.name]: e.target.value });
    //  };
// console.log(formData);
    // try {
      // Send a POST request to the server endpoint
  //     const response = await axios.post(
  //       "https://boostifytube-network-api.onrender.com/ /api/v1/video/upload",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(formData),
  //       }
  //     );

  //     // Handle the response
  //     if (response.ok) {
  //       alert("Video uploaded successfully");
  //       // Optionally reset the form or perform other actions
  //     } else {
  //       const errorData = await response.json();
  //       alert(`Error: ${errorData.message}`);
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //     alert("An error occurred while uploading the video");
  //   }
  // };
  //   const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log(input);
  //   try {
  //     const res = await axios.post(
  //       "https://boostifytube-network-api.onrender.com/api/v1/video/upload",
  //       input
  //     );
  //     console.log(res.data);
  //     // localStorage.setItem("isLogin", res.data);
  //     alert("Video Uploaded successfull");
     
  //   } catch (error) {
  //     console.log(error);
  //     alert(error);
  //   }
  // };
