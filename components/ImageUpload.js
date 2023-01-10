import React from "react";
import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";
import { getDroppedOrSelectedFiles } from "html5-file-selector";

const FileUploadComponent = () => {
  const fileParams = ({ meta }) => {
    return { url: "https://httpbin.org/post" };
  };
  const onFileChange = ({ meta, file }, status) => {
    console.log(status, meta, file);
  };
  const onSubmit = (files, allFiles) => {
    allFiles.forEach((f) => f.remove());
  };
  const getFilesFromEvent = (e) => {
    return new Promise((resolve) => {
      getDroppedOrSelectedFiles(e).then((chosenFiles) => {
        resolve(chosenFiles.map((f) => f.fileObject));
      });
    });
  };
  const selectFileInput = ({ accept, onFiles, files, getFilesFromEvent }) => {
    const textMsg = files.length > 0 ? "Upload Again" : "Select Files";
    return (
      <>
        <div>
          {textMsg}
          <input
            name="file"
            id="file"
            // style={{ display: "" }}
            type="file"
            accept={accept}
            multiple
            onChange={(e) => {
              getFilesFromEvent(e).then((chosenFiles) => {
                onFiles(chosenFiles);
              });
            }}
          />
        </div>
      </>
    );
  };
  return (
    <Dropzone
      onSubmit={onSubmit}
      onChangeStatus={onFileChange}
      InputComponent={selectFileInput}
      getUploadParams={fileParams}
      getFilesFromEvent={getFilesFromEvent}
      accept="image/*,audio/*,video/*"
      maxFiles={5}
      inputContent="Drop A File"
      styles={{
        dropzone: { width: 400, height: 200 },
        dropzoneActive: { borderColor: "green" },
      }}
    />
  );
};
export default FileUploadComponent;

// import React, { useState } from "react";
// import axios from "axios";
// const ImageUpload = () => {
//   const [image, setImage] = useState("");

//   function handleImage(e) {
//     console.log(e.target.files);
//     setImage(e.target.files[0]);
//   }

//   function handleApi() {
//     const formData = new FormData();
//     formData.append("image", image);
//     axios.post("url", formData).then((res) => {
//       console.log(res);
//     });
//   }

//   return (
//     <div>
//       <input type="file" name="file" onChange={handleImage} />
//       <button onClick={handleApi}>submit</button>
//     </div>
//   );
// };

// export default ImageUpload;
