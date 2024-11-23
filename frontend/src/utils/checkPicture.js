export const CHECK_PICTURE =  (imageToCheck) => {

function checkImg(imageToCheck){
  const test =  new Image()
  
  test.onload="good"
  test.onerror="bad"
  test.src=imageToCheck
}
const testResult =  checkImg(imageToCheck);
console.log("TEST FUNCTION : ", testResult)
return testResult
  // function checkImg(){
// 	var tester=new Image()
// 	tester.onload=function() {alert('Image chargée')}
// 	tester.onerror=function() {alert('L\'image n\'existe pas')}
// 	tester.src="http://www.temp.com/image.jpg";
// 	tester.src="http://www.paris-360.com/admin/upload/tuilerie_neige hd.jpg";
// }

// function checkImage(imageSrc, good, bad) {
//   var img = new Image();
//   img.onload = good; 
//   img.onerror = bad;
//   img.src = imageSrc;
// }

// 

// checkImage("favicon.ico", function(){ console.log("good"); }, function(){ console.log("bad"); } );
}