

async function getData() {
   let token = document.getElementById('token').value;
   let display_feed = document.getElementById("feed");

   let res = await fetch("https://graph.facebook.com/v15.0/me/feed?access_token=" + token);
   let data = await res.text();
   display_feed.innerText = data;

}


async function postData() {
   let title = document.getElementById('text').value;
   let image_link = document.getElementById('image').value;
   let video_link = document.getElementById('video').value;
   let token = document.getElementById('token').value;

   let post_status = document.getElementById('post_status');
   let post_type = document.getElementById('post_type').value;

   let type = "";
   let link = "";
   let url = "";

   if (post_type == "text") {
      type = "feed";
      title = "?message=" + title;
   }
   else if (post_type == "image") {
      type = "photos";
      title = "?message=" + title;
      url = "&url=";
      link = image_link;
   }
   else if (post_type == "video") {
      type = "videos";
      title = "?description=" + title;
      url = "&file_url=";
      link = video_link;

   }


   let res = await fetch("https://graph.facebook.com/v15.0/me/" + type + title + url + link + "&access_token=" + token,
      { method: 'POST' });


   let data = await res.text();
   post_status.innerText = "Request status : \n" + data;

}



function postData2() {
   FB.api(
      '/me/videos',
      'POST',
      {
         // message: "vid_2",
         file_url: "https://assets.mixkit.co/videos/preview/mixkit-people-pouring-a-warm-drink-around-a-campfire-513-large.mp4",
         access_token: " ",
         title: "this is a Title",
         description: "this is a description"
      },
      function (response) {
         // Insert your code here
         console.log(response);
      }
   );
}


// https://developers.facebook.com/docs/video-api/guides/publishing/
// including either the {source} parameter (for local video files) or {file_url} parameter (for files hosted on a public server)









