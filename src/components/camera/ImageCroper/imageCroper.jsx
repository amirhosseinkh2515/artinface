import React, { useState, useRef, useEffect } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
// import sendGa from "../../../hooks/useSendGa";
import add_folder from '../../../assets/icons/add-folder.png'
import DragAndDropFile from '../../dragAndDropFile'

const ImageCroper = ({ handleImageUpload, image, setImage }) => {

  const [cropper, setCropper] = useState();
  const [harchi, setHarchi] = useState();
  const galleryRef = useRef();
  const onChange = (e) => {
    if (!e.files[0].name.endsWith('.png') &&
      !e.files[0].name.endsWith('.PNG') &&
      !e.files[0].name.endsWith('.jpg') &&
      !e.files[0].name.endsWith('JPG') &&
      !e.files[0].name.endsWith('.jpeg') &&
      !e.files[0].name.endsWith('.JPEG')
    ) {
      alert('لطفا یک عکس با فرمت صحیح انتخاب کنید');
      return false;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    e.files[0] && reader.readAsDataURL(e.files[0]);
  };

  const getCropData = () => {
    if (typeof cropper !== "undefined") {
      const canvas = cropper.getCroppedCanvas({ width: 256, height: 256 });
      canvas.toBlob(blob => {
        if (!blob) {
          console.error('Canvas is empty');
          return;
        }
        setHarchi({ blobFile: blob })
      }, 'image/jpeg');
      // sendGa("detection", "upload", "gallery")
    }
  };

  const uploadImage = () => {
    galleryRef.current.click()
    // sendGa("detection", "click", "take picture")
  }

  const removeImage = () => {
    setImage()
  }

  useEffect(() => {
    if (harchi) handleImageUpload(harchi.blobFile)
  }, [harchi])

  return (
    <div style={{ textAlign: "left", zIndex: "21" }}>
      <div style={{ width: "95%", zIndex: 2, marginRight: "2.5%" }} >
        {image &&
          <Cropper
            style={{ height: 400, width: "100%" }}
            initialAspectRatio={1}
            aspectRatio={1}
            preview=".img-preview"
            src={image}
            viewMode={1}
            guides={true}
            minCropBoxHeight={100}
            minCropBoxWidth={100}
            background={false}
            responsive={true}
            autoCropArea={1}
            checkOrientation={false}
            onInitialized={(instance) => {
              setCropper(instance);
            }}
          />
        }

      </div>
      <div className="box croper-button-container">
        {image &&
          <button className="croper-button" onClick={getCropData}>
            تایید
          </button>
        }
      </div>
      <br style={{ clear: "both" }} />
      {image ?
        <button className="text-white bg-red-main p-3 ml-[10px]" onClick={removeImage}>
          بارگذاری مجدد
        </button>
        :
        <DragAndDropFile onChange={onChange} />
      }

      {/* <div style={{ marginLeft: 10, cursor: "pointer" }}>
        <button style={{ color: "#dfdfdf", fontSize: "25px", textAlign: "left" }} onClick={uploadImage} >
          <img src={add_folder} className="brightness-[4.5]"/>
        </button>
        <span className="ml-2" onClick={() => galleryRef.current.click()}>گالری</span>
        <input
          ref={galleryRef}
          accept=".jpg, .jpeg, .png"
          className="hidden"
          type="file"
          onChange={onChange}
        />
      </div> */}



    </div>
  );
};

export default ImageCroper;
