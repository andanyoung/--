function cleanCookies() {
  console.log("bg-cleanCookies");
  alert(23);
  chrome.cookies.remove({
    name: "openkey",
    url: "https://pr.dianguanweilai.net",
  });
  chrome.cookies.remove({
    name: "ih5_player_11293744",
    url: "https://pr.dianguanweilai.net",
  });
}
