

async function getData() {
   let token = document.getElementById('token').value;
   let display_feed = document.getElementById("feed");

   let res = await fetch("https://graph.facebook.com/v15.0/me/feed?access_token=" + token);
   let data = await res.text();
   display_feed.innerText = data;

}


async function postData() {
   let title = document.getElementById('text').value;
   let image_link = document.getElementById('online_image').value;
   let video_link = document.getElementById('online_video').value;
   let token = document.getElementById('token').value;
   let post_status = document.getElementById('post_status');
   let post_type_source = document.getElementById('post_type_source').value;

   let type = "";
   let url = "";
   let userFile = "";
   let formData = "";
   let fileName = "";

   if (post_type_source == "text") {
      type = "feed";
      title = "?message=" + title + "&";
   }
   else if (post_type_source == "online_image") {
      type = "photos";
      title = "?message=" + title;
      url = "&url=" + image_link + "&";
   }
   else if (post_type_source == "online_video") {
      type = "videos";
      title = "?description=" + title;
      url = "&file_url=" + video_link + "&";
   }

   else if (post_type_source == "local_image") {

      userFile = document.getElementById('file').files[0];
      formData = new FormData();
      formData.append('image', userFile, 'image.jpg');

      type = "photos/";
      fileName = "image.jpg"
      title = "?message=" + title + "&";
   }

   else if (post_type_source == "local_video") {

      userFile = document.getElementById('file').files[0];
      formData = new FormData();
      formData.append('video', userFile, 'video.mp4');

      type = "videos/";
      fileName = "video.mp4";
      title = "?description=" + title + "&";
   }


   let res = await fetch("https://graph.facebook.com/v15.0/me/" + type + fileName + title + url + "access_token=" + token,
      {
         method: 'POST', body: formData
      });


   let data = await res.text();
   post_status.innerText = "Request status : \n" + data;

}



// function postData2(payload) {
//    let inp = document.getElementById('fileInputControl');

//    FB.api(
//       '/me/photos',
//       'POST',
//       {
//          message: "pic",
//          body: payload,
//          // url: open("./test_video.mp4"),
//          key: payload[0],
//          access_token: " ",
//          // title: "this is a Title",
//          // description: "8866"
//       },
//       function (response) {
//          // Insert your code here
//          console.log(response);
//       }
//    );
// }




// https://developers.facebook.com/docs/video-api/guides/publishing/
// including either the {source} parameter (for local video files) or {file_url} parameter (for files hosted on a public server)

 

 

// document.getElementById('form').addEventListener('submit', function(e){
//    e.preventDefault();

// function t2() {
//    const userFile = document.getElementById('file').files[0];
//    const formData = new FormData();
//    formData.append('img', userFile, 'image.jpg');

//    console.log(userFile);
//    console.log("and :" + formData);

//    let res = fetch("https://graph.facebook.com/v15.0/me/photos/image.jpg?access_token= ",
//       {
//          method: 'POST',
//          body: formData
//       });
// }


// })




