function loadVideos(){
  const videos = [
    "https://www.youtube.com/embed/IcO5r0k5fco",
    "https://www.youtube.com/embed/lqnm6BwDLVU",
    "https://www.youtube.com/embed/qiQR5rTSshw",
    "https://www.youtube.com/embed/kZ5bJtPBw3Y"
  ];

  let html = "";
  videos.forEach(v => {
    html += `<iframe width="300" height="200" src="${v}"></iframe>`;
  });

  document.getElementById("videos").innerHTML = html;
}

loadVideos();

function buyNow(){
  window.open("https://wa.me/91XXXXXXXXXX","_blank");
}
