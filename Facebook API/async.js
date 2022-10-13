

async function getData() {
   let token = document.getElementById('token').value;
   let display_feed = document.getElementById("feed");

   let res = await fetch("https://graph.facebook.com/v15.0/me/feed?access_token=" + token);
   let data = await res.text();
   display_feed.innerText = data;

}


async function postData() {
   let text = document.getElementById('text').value;
   let image_link = document.getElementById('image').value;
   let video_link = document.getElementById('video').value;
   let token = document.getElementById('token').value;

   let post_status = document.getElementById('post_status');
   let post_type = document.getElementById('post_type').value;

   let type = "";
   let link = "";
   let url = "";

   if (post_type == "text") type = "feed";
   else if (post_type == "image") {
      type = "photos";
      link = image_link;
      url = "&url=";
   }
   else if (post_type == "video") {
      type = "videos";
      link = video_link;
      url = "&url=";
   }


   let res = await fetch("https://graph.facebook.com/v15.0/me/" + type + "?message=" + text + url + link + "&access_token=" + token,
      { method: 'POST' });


   // {method: 'POST', body:JSON.stringify(message=post_text.value)});
 
   let data = await res.text();
   post_status.innerText = "Request status : \n" + data;

}








