export function convertToBase64String(
  file: File,
  cb: (result: string | ArrayBuffer | null) => void
) {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = function () {
    cb(reader.result);
  };
  reader.onerror = function (error) {
    console.log("Error: ", error);
  };
}
