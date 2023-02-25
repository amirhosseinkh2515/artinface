import http from "./httpService";

const baseUrl = `/artinface`

export function detect({ file, crop_type }) {
  const bodyFormData = new FormData();
  bodyFormData.append("image", file);
  return http.post(`${baseUrl}/entries/`, bodyFormData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
}


// export function getDetectDetails(id) {
//   return http.get(`${baseUrl}/entries/${id}/`);
// }
