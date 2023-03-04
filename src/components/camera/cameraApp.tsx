import React, { useState, useCallback } from "react";
import Camera, { FACING_MODES, IMAGE_TYPES } from "react-html5-camera-photo";
import imageCompression from "browser-image-compression";
import ImagePreview from "./ImagePreview";
import { toast } from "react-toastify";
import PointerArrow from "../../assets/svgs/pointerArrow";
import ImageCroper from "./ImageCroper/imageCroper";
import useWindowSize from "../../hooks/useWindowSize";
import "react-html5-camera-photo/build/css/index.css";

type CameraApp = {
  onClear: any;
  search: any;
  buttonText: any;
}

const CameraApp: React.FC<CameraApp> = ({ onClear, search, buttonText }) => {
  const [dataUri, setDataUri] = useState("");
  const [galleryFile, setGalleryFile] = useState();
  const [errorState, setErrorState] = useState(false);
  const [around, setAround] = useState(0);
  const [image, setImage] = useState("");
  const windowSize = useWindowSize();
  console.log(windowSize,"windowSize")
  const mobileWidth = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth;
    }
    else return 300
  }
  const mobilHeight = () => {
    if (typeof window !== 'undefined') {
      return window.innerHeight
    }
    else return 300
  }
  const options = {
    maxSizeMB: 2,
    useWebWorker: true,
  };

  const handleImageUpload = useCallback(
    async (e:any) => {
      const accptedTypes = ["image/jpeg", "image/png"];
      if (accptedTypes.includes(e.type)) {
        const compressedFile = await imageCompression(
          e,
          options
        );
        search(compressedFile)
      } else {
        toast.error("لطفا عکس با فرمت مناسب بارگذاری نمایید");
      }
    },
    [setGalleryFile, options]
  );

  function onClearImg() {
    setGalleryFile(undefined);
    setDataUri("");
    onClear();
  }
  return (
    <div className="detection_root">
      {dataUri || galleryFile ? (
        <ImagePreview
          dataUri={dataUri}
          galleryFile={galleryFile}
          onClear={onClearImg}
          search={search}
          around={around}
          mobileWidth={mobileWidth()}
          buttonText={buttonText}
        />
      ) : (
        <div className={errorState ? `hideTake custom_canvas` : `custom_canvas`}>
          {!image &&
            <>
              <Camera
                onTakePhotoAnimationDone={(dataUri: any) => setDataUri(dataUri)}
                imageType={IMAGE_TYPES.JPG}
                onCameraError={() => setErrorState(true)}
                isDisplayStartCameraError={false}
                idealResolution={{ width: mobilHeight(), height: (mobileWidth()) }}
                imageCompression={0.9}
                isImageMirror={false}
                isMaxResolution={false}
                sizeFactor={1}
                idealFacingMode={FACING_MODES.ENVIRONMENT}
                isFullscreen={true}
              />
              {!errorState && windowSize !== "lg" && windowSize !== "xl" && windowSize !== "2xl" && (
                <canvas
                  width={320}
                  height={320}
                  className="canvas"
                  style={{ right: "1vw", borderRadius: 10, borderWidth: 3 }}
                />
              )}
            </>
          }
          <div className={image ? "image-croper-wrapper" : "upload-btn-wrapper"}>
            <ImageCroper handleImageUpload={handleImageUpload} image={image} setImage={setImage} />
          </div>
          {/* {!image &&
            <div className="arrow-container">
              <p> تصویرت رو از اینجا بارگذاری کن</p>
              <PointerArrow />
            </div>
          } */}
        </div>
      )}
    </div>
  );
}

export default CameraApp;
