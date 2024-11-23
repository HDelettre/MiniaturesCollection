const fs=require("fs")

function deletePicture (deleteFiles) {
  deleteFiles.forEach(filePath => {
    fs.unlinkSync(filePath);
   });
   return "images supprimées"
}
