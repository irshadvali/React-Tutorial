import fetch from "fetch-everywhere";
export const API_URL_ROOT = "http://192.168.2.23:3000/";
export async function post(url, payload) {
  // body_json: JSON.stringify(payload)
  var formBody = [];
  for (var property in payload) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(payload[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");
  return await fetch(`${API_URL_ROOT}${url}`, {
    method: "POST",
    body: formBody,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
    }
  });
}
export async function get(url) {
  return await fetch(`${API_URL_ROOT}${url}`, {});
}
export async function put(url, payload) {
  return await fetch(`${API_URL_ROOT}${url}`, {
    method: "PUT",
    body: JSON.stringify(payload)
  });
}
