import React, { useState } from "react";
import CameraApp from "./camera/cameraApp";
import Loading from "./loading";
import { detect } from "@/services/detection";
import lonely_beautiful_girl from '@/assets/images/lonely_beautiful_girl.png'
import { useRouter } from "next/router";
import DetectionResultComponent from '@/components/detectionResult'
import ImperfectDetectionComponent from '@/components/imperfectDetectionComponent'
import CompleteProfile from '@/components/completeProfile'
import Modal from '@/components/modal'
import { useNextQueryParams } from "../hooks/useQueryParams";
import { toast } from "react-toastify";
// import useAccessRole from "../hooks/useAccessRole";
// import QuickRegistration from './components/quick-registration/quickRegistration'
// import SelectPet from './select-pet/selectPet'
// import sendGa from "../hooks/useSendGa";
// import UseProfile from "../hooks/useProfile";

const Detection = () => {
  const querys = useNextQueryParams();
  const dataId = querys?.id
  const router = useRouter()
  console.log(dataId, "dataIddataId")
  // let role = useAccessRole();
  // const user = UseProfile();
  // const history = useRouter();
  const [loading, setLoading] = useState(false);
  // const [startQuickRegistration, setStartQuickRegistration] = useState(false);
  // const [showQuickNameREgister, setShowQuickNameREgister] = useState(false);
  const [showCompleteProfileModal, setShowCompleteProfileModal] = useState(false);
  const [disableButton, setDisableButton] = useState(false)
  const [exist, setExist] = useState(false)
  const [fileObj, setFileObj] = useState<any>()
  const [name, setName] = useState("")
  const [hasName, setHasName] = useState()
  const [renderingComponent, setRenderingComponent] = useState("take_image")
  const [data, setData] = useState({
    has_eyebag: false,
    has_redness: false,
    has_wrinkle: false,
    predicted_age: 0,
    predicted_age_std: 0,
    facial_attributes: {} as any,
    wrinkle_fractions: {} as any,
    segments: {} as any,
    redness_mask: "",
    wrinkle_mask: "",
    image: lonely_beautiful_girl
  })

  const blobToFile = (Blob: any, fileName: any) => {
    return new File([Blob], fileName);
  };

  const find = (blob: any) => {
    const file = blobToFile(blob, "test.jpg");
    const obj: any = {
      file,
    };
    setFileObj(obj)
    setLoading(true);
    // sendGa("Detection", "click", "confirmed photo")
    handleDetect(obj)
    // if (localStorage.getItem("token") == undefined) {
    //   setStartQuickRegistration(true)
    // }
    // else {
    //   handleDetect(obj)
    // };
  };

  const handleDetect = (obj: any) => {
    // if (hasName || user.name || name) {
    detect(obj as any).then(({ data }: { data: any }) => {
      localStorage.removeItem("selected_item")
      if (data.detection.is_aborted == false && data.detection.is_imperfect == false) {
        // window.location.href = `/detection?id=${data.detection.id}`
        setRenderingComponent("has_result")
        setData({
          has_eyebag: data.detection.result.has_eyebag,
          has_redness: data.detection.result.has_redness,
          has_wrinkle: data.detection.result.has_wrinkle,
          predicted_age: data.detection.result.predicted_age,
          predicted_age_std: data.detection.result.predicted_age_std,
          facial_attributes: data.detection.result.facial_attributes,
          wrinkle_fractions: data.detection.result.wrinkle_fractions,
          segments: data.segments,
          redness_mask: data.detection.result.redness_mask,
          wrinkle_mask: data.detection.result.wrinkle_mask,
          image: data.image
        })
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
      else if (data.detection.is_aborted == false && data.detection.is_imperfect == true) {
        // window.location.href = `/detection?id=${data.detection.id}`
        setRenderingComponent("is_imperfect")
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
      else {
        setRenderingComponent("is_aborted")
        setTimeout(() => {
          setLoading(false);
        }, 1000);
        // history.push({ pathname: "/crop-not-found", query: { ...data } });
        // setTimeout(() => {
        //   setLoading(false);
        // }, 1000);
      }
    })
      .catch(() => {
        setLoading(false);
      });
    // }
    // else {
    //   setShowQuickNameREgister(true)
    //   setStartQuickRegistration(false)
    // }
  }
  console.log(data, "data3456")

  const renderComponent = () => {
    if (loading) {
      return <Loading className="h-[calc(50vh)]" />
    }
    else if (renderingComponent == "take_image") {
      return (
        <CameraApp
          onClear={() => console.log("setCardImage")}
          search={find}
          buttonText="تشخیص"
        />
      )
    }
    else if (renderingComponent == "has_result") {
      return <DetectionResultComponent data={data} />
    }
    else if (renderingComponent == "is_imperfect") {
      return <ImperfectDetectionComponent setRenderingComponent={setRenderingComponent} text="لطفا عکس بهتری بارگذاری کنید"/>
    }
    else if (renderingComponent == "is_aborted") {
      return <ImperfectDetectionComponent setRenderingComponent={setRenderingComponent} text="عکس مناسب تشخیص نیست"/>
    }
  }

  return (
    <>
      {renderComponent()}
      {showCompleteProfileModal &&
        <Modal setShowModal={setShowCompleteProfileModal} containerClassName="items-center" innerClassName="w-mc sm:w-124">
          <CompleteProfile />
        </Modal>
      }


      {/* {showQuickNameREgister &&
        <SelectPet redirectHome={false} handleSubmit={handleDetect} componentValues={fileObj} setTempName={setName} closable={false} />
      } */}
      {/* {startQuickRegistration && <QuickRegistration
        startQuickRegistration={startQuickRegistration}
        setStartQuickRegistration={setStartQuickRegistration}
        handleSubmit={handleDetect}
        componentValues={fileObj}
        sendGa={sendGa}
        setHasName={setHasName}
        exist={exist}
        setExist={setExist}
        closeAble={false}
        disableButton={disableButton}
        setDisableButton={setDisableButton}
      />} */}
    </>
  );
};

export default Detection;