import React, { useRef, useLayoutEffect, useState } from "react";
// import sendGa from "../../../hooks/useSendGa";

const ImagePreview = ({
  dataUri,
  onClear,
  search,
  galleryFile,
  around,
  mobileWidth,
  buttonText
}) => {
  const [isCanvasEmpty, setIsCanvasEmpty] = useState(true);
  const [blob, setBlob] = useState();
  const canvasRef = useRef();
  const imgRef = useRef();

  useLayoutEffect(() => {
    imgRef.current.onload = () => {
      const context = canvasRef.current?.getContext("2d");
      context.drawImage(imgRef.current, 7, 74, mobileWidth - 7, mobileWidth - 7, 7, 10, mobileWidth, mobileWidth);
      canvasRef.current.toBlob((blob) => setBlob(blob), "image/jpeg", 1);
      setIsCanvasEmpty(false);
    };
  }, [imgRef, around]);

  function handleCapture() {
    if (blob) search(blob);
    else search(galleryFile);
    // sendGa("detection", "upload", "detect")
  }

  function handleClear() {
    const context = canvasRef.current.getContext("2d");
    context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    setIsCanvasEmpty(true);
    onClear();
    sendGa("detection", "click", "new image")
  }


  return (
    <div className="overlay_wrapper">
      <div className="demo-image-preview demo-image-preview-fullscreen">
        <canvas
          ref={canvasRef}
          width={mobileWidth}
          height={mobileWidth}
          className={`overlay-canvas ${galleryFile ? "none" : ""}`}
        />
        {galleryFile && (
          <div
            style={{
              backgroundImage: `url(${URL.createObjectURL(galleryFile)})`,
              backgroundPosition: "center",
              // backgroundSize: "contain",
              position: "absolute",
              top: "20%",
              zIndex: 30,
              marginTop: "10%",
              backgroundRepeat: "no-repeat",
              height: "320px",
              width: "320px",
              backgroundSize: "cover"
            }}
          />
        )}
        <img
          src={dataUri}
          ref={imgRef}
          alt="آرتین"
          className={isCanvasEmpty && !galleryFile ? "" : "hide"}
        />
      </div>

      {(!isCanvasEmpty || galleryFile) && (
        <div className="button_group">
          <button className="search" onClick={handleCapture}>
            {buttonText}
          </button>
          <button onClick={handleClear}>عکس جدید</button>
        </div>
      )}
    </div>
  );
};

export default ImagePreview;
