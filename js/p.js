function clearCookies() {
  chrome.cookies.remove({
    name: "openkey",
    url: "https://pr.dianguanweilai.net",
  });
  chrome.cookies.remove({
    name: "ih5_player_11293744",
    url: "https://pr.dianguanweilai.net",
  });
  // alert(bg.document.body.innerHTML); // 访问bg的DOM
}

function reload() {
  chrome.tabs.reload();
}

$("#cc").click((e) => {
  var bg = chrome.extension.getBackgroundPage();
  alert(bg);
  // bg.cleanCookies();
  clearCookies();
});
$("#reloada").click((e) => {
  chrome.windows.getCurrent(function (currentWindow) {
    chrome.tabs.query(
      { active: true, windowId: currentWindow.id },
      function (tabs) {
        alert(tabs[0].id);
        chrome.tabs.reload();
      }
    );
  });
});

function changeBackgroundColor() {
  let a = 0;
  document.body.style.backgroundColor = "red";
  let mBtn = document.querySelector(".ih5-rel-button");
  mBtn && mBtn.click();
}

function select63() {
  setTimeout(() => {
    var aAll = document.querySelector(
      "#app > div > div > div.ih5-rel-layout-row.md-layout-item.md-layout.flex-direction-row.md-alignment-top-left.ih5-webkit-scroll.hide-scroll-bar.flex-1 > div.ih5-rel-layout-row.md-layout-item.md-layout.flex-direction-row.md-alignment-top-center.ih5-webkit-scroll.hide-scroll-bar.flex-1-1 > div:nth-child(3) > div:nth-child(2)"
    );
    aAll.click();
  }, 1500);
}
function select67() {
  setTimeout(() => {
    var aAll = document.querySelector(
      "#app > div > div > div.ih5-rel-layout-row.md-layout-item.md-layout.flex-direction-row.md-alignment-top-left.ih5-webkit-scroll.hide-scroll-bar.flex-1 > div.ih5-rel-layout-row.md-layout-item.md-layout.flex-direction-row.md-alignment-top-center.ih5-webkit-scroll.hide-scroll-bar.flex-1-1 > div:nth-child(1) > div:nth-child(2)"
    );
    aAll.click();
    aAll = document.querySelector(
      "#app > div > div > div.ih5-rel-layout-row.md-layout-item.md-layout.flex-direction-row.md-alignment-top-left.ih5-webkit-scroll.hide-scroll-bar.flex-1 > div.ih5-rel-layout-row.md-layout-item.md-layout.flex-direction-row.md-alignment-top-center.ih5-webkit-scroll.hide-scroll-bar.flex-1-1 > div:nth-child(2) > div:nth-child(2)"
    );
    aAll.click();
  }, 1500);
}

function nextPage() {
  setTimeout(() => {
    var aAll = document.querySelectorAll(
      "#app > div > div > div.ih5-rel-layout-row.md-layout-item.md-layout.flex-direction-row.md-alignment-top-left.ih5-webkit-scroll.hide-scroll-bar.flex-1 > div.ih5-rel-layout-row.md-layout-item.md-layout.flex-direction-row.md-alignment-center-center.flex-1-1 > nav > ul > li"
    );
    console.log("nextPage", aAll);

    let li = aAll[aAll.length - 1];
    console.log("nextPage", li);
    if (li) {
      let a = li.getElementsByTagName("a");
      console.log("nextPage", a, a[0]);
      a[0].click();
    }
  }, 500);
}
function nextY() {
  setTimeout(() => {
    var aAll = document.querySelectorAll(
      "#app > div > div > div.ih5-rel-layout-row.md-layout-item.md-layout.flex-direction-row.md-alignment-top-left.ih5-webkit-scroll.hide-scroll-bar.flex-1 > div.ih5-rel-layout-row.md-layout-item.md-layout.flex-direction-row.md-alignment-center-center.flex-1-1 > nav > ul > li"
    );
    console.log("nextPage", aAll);

    let li = aAll[aAll.length - 2];
    console.log("nextPage", li);
    if (li) {
      let a = li.getElementsByTagName("a");
      console.log("nextPage", a, a[0]);
      a[0].click();
    }
  }, 1500);
}

function voit() {
  setTimeout(() => {
    var btn = document.querySelector(
      "#app > div > div > div:nth-child(5) > div > div"
    );
    btn.click();
  }, 1800);
}
function confirm() {
  setTimeout(() => {
    var btn = document.querySelector(".btn-confirm");
    console.log("confirm", btn);
    btn.click();
  }, 2800);
}

async function run() {
  chrome.windows.getCurrent(function (currentWindow) {
    chrome.tabs.query(
      { active: true, windowId: currentWindow.id },
      async function (tabs) {
        // alert(tabs[0].id);
        await chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          func: changeBackgroundColor,
        });

        await chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          func: nextPage,
        });
        await chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          func: nextPage,
        });
        await chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          func: nextPage,
        });
        await chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          func: nextPage,
        });
        await chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          func: nextY,
        });
        await chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          func: select63,
        });
        await chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          func: nextY,
        });
        await chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          func: select67,
        });
        await chrome.scripting.executeScript(
          {
            target: { tabId: tabs[0].id },
            func: voit,
          },
          async () => {
            chrome.scripting.executeScript(
              {
                target: { tabId: tabs[0].id },
                func: confirm,
              },
              () => {
                setTimeout(() => {
                  clearCookies();
                  // reload();
                }, 1000);
              }
            );
          }
        );
      }
    );
  });
}
$("#reloada1").click((e) => {
  run();
});
