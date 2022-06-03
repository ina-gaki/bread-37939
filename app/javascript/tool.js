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
    <div class="gram">
      <div class="gram-calculation">
        小麦粉：${flour.value}g
        水:${water.value}g
        塩:${salt.value}g
        砂糖:${sugar.value}g
        イースト:${yeast.value}g
        油脂:${oil.value}g
      </div>
      <div class="result">
        ↓
      </div>
      <div class="gram-calculation">
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

  num_flour2_1 = parseInt(flour2_1.value);
  num_flour2_2 = parseInt(flour2_2.value);

  if (num_flour2_1 + num_flour2_2 != 100) {
    console.log('実行された')
  }

  const gram_flour = flour_g.value / (num_flour2_1 + num_flour2_2);
  const gram_flour_1 = gram_flour  * num_flour2_1;
  const gram_flour_2 = gram_flour  * num_flour2_2;
  const gram_water = gram_flour  * (water2.value);
  const gram_salt = gram_flour * (salt2.value);
  const gram_sugar = gram_flour * (sugar2.value);
  const gram_oil = gram_flour * (oil2.value);
  const gram_yeast = gram_flour * (yeast2.value);

  const item = XHR.response.reship2;
  const html = `
    <div class="bakers">
    <div class="bakers-gram">
    小麦粉:${flour_g.value}g
    </div>
      <div class="bakers-calculation">
        小麦粉1:${flour2_1.value}%
        小麦粉2:${flour2_2.value}%
        水:${water2.value}%
        塩:${salt2.value}%
        砂糖:${sugar2.value}%
        イースト:${yeast2.value}%
        油脂:${oil2.value}%
      </div>
      <div class="result">
        ↓
      </div>
      <div class="bakers-calculation">
        小麦粉1:${gram_flour_1.toFixed(0)}g
        小麦粉2:${gram_flour_2.toFixed(0)}g
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
      flour.value = "";
      water.value = "";
      salt.value = "";
      sugar.value = "";
      oil.value = "";
      yeast.value = "";
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
      flour2_1.value = "";
      flour2_2.value = "";
      flour_g.value = "";
      water2.value = "";
      salt2.value = "";
      sugar2.value = "";
      oil2.value = "";
      yeast2.value = "";
    };
  });
};

window.addEventListener('load', post);
window.addEventListener('load', post2);