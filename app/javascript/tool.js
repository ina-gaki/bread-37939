const buildHTML = (XHR) => {
  const bakers_water = (water.value) / (flour.value) * 100;
  const bakers_salt = (salt.value) / (flour.value) * 100;
  const bakers_sugar = (sugar.value) / (flour.value) * 100;
  const bakers_oil = (oil.value) / (flour.value) * 100;
  const bakers_yeast = (yeast.value) / (flour.value) * 100;

  const item = XHR.response.reship;
  const html = `
    <div class="post">
      <div class="post-date">
        小麦粉：${item.flour}g
      </div>
      <div class="post-content">
        小麦粉:100%
        水:${bakers_water.toFixed(0)}%
        塩:${bakers_salt.toFixed(0)}%
        砂糖:${bakers_sugar.toFixed(0)}%
        イースト:${bakers_yeast.toFixed(0)}%
        油脂:${bakers_oil.toFixed(0)}%

      </div>
    </div>`;
  return html;
};

function post (){
  const submit = document.getElementById("submit");
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const form = document.getElementById("form");
    const formData = new FormData(form);
    const XHR = new XMLHttpRequest();
    XHR.open("POST", "/tools", true);
    XHR.responseType = "json";
    XHR.send(formData);
    XHR.onload = () => {
      const list = document.getElementById("list");
      const flour = document.getElementById("flour");
      const water = document.getElementById("water");
      const salt = document.getElementById("salt");
      const sugar = document.getElementById("sugar");
      const oil = document.getElementById("oil");
      const yeast = document.getElementById("yeast");

      list.innerHTML = buildHTML(XHR);
    };
  });
};
window.addEventListener('load', post);