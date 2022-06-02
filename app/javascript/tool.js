const buildHTML = (XHR) => {
  const flour = document.getElementById("flour");
  const water = document.getElementById("water");
  const salt = document.getElementById("salt");
  const sugar = document.getElementById("sugar");
  const oil = document.getElementById("oil");
  const yeast = document.getElementById("yeast");

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

const buildHTML2 = (XHR) => {
  const flour_g = document.getElementById("flour_g");
  const flour2_1 = document.getElementById("flour2_1");
  const flour2_2 = document.getElementById("flour2_2");
  const water2 = document.getElementById("water2");
  const salt2 = document.getElementById("salt2");
  const sugar2 = document.getElementById("sugar2");
  const oil2 = document.getElementById("oil2");
  const yeast2 = document.getElementById("yeast2");

  num1 = parseInt(flour2_1.value);
  num2 = parseInt(flour2_2.value);

  const gram_flour = flour_g.value / (num1 + num2);
  const gram_water = gram_flour  * (water2.value);
  const gram_salt = gram_flour * (salt2.value);
  const gram_sugar = gram_flour * (sugar2.value);
  const gram_oil = gram_flour * (oil2.value);
  const gram_yeast = gram_flour * (yeast2.value);

  const item = XHR.response.reship2;
  const html = `
    <div class="post">
    <div class="post-date">
    小麦粉:${flour_g.value}g
    </div>
      <div class="post-content">
        水:${gram_water.toFixed(0)}g
        塩:${gram_salt.toFixed(0)}g
        砂糖:${gram_sugar.toFixed(0)}g
        イースト:${gram_yeast.toFixed(0)}g
        油脂:${gram_oil.toFixed(0)}g
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
      list.innerHTML = buildHTML(XHR);
    };
  });
};

function post2 (){
  const submit = document.getElementById("submit2");
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const form = document.getElementById("form2");
    const formData = new FormData(form);
    const XHR = new XMLHttpRequest();
    XHR.open("POST", "/tools", true);
    XHR.responseType = "json";
    XHR.send(formData);
    XHR.onload = () => {
      const list = document.getElementById("list2");
      list.innerHTML = buildHTML2(XHR);
    };
  });
};

window.addEventListener('load', post);
window.addEventListener('load', post2);