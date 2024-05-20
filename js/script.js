const luasSub = document.querySelector(".submit-luas");
const luasRes = document.querySelector(".reset-luas");

const kelilingSub = document.querySelector(".submit-keliling");
const kelilingRes = document.querySelector(".reset-keliling");

const alas = document.querySelector("#panjang_alas");
const tinggi = document.querySelector("#tinggi");

const a = document.querySelector("#sisia");
const b = document.querySelector("#sisib");
const c = document.querySelector("#sisic");

const rumLuas = document.querySelector(".rumus-luas");
const awLuas = document.querySelector(".awal-luas");
const hasLuas = document.querySelector(".hasil-luas");

const rumKeliling = document.querySelector(".rumus-keliling");
const awKeliling = document.querySelector(".awal-keliling");
const hasKeliling = document.querySelector(".hasil-keliling");

luasSub.addEventListener("click", () => {
  let res = 0.5 * alas.value * tinggi.value;
  rumLuas.textContent = `L = 1/2 x a x t`;
  awLuas.textContent = `L = 1/2 x ${alas.value} x ${tinggi.value}`;
  hasLuas.textContent = `L = ${res}`;
});

luasRes.addEventListener("click", () => {
  alas.value = "";
  tinggi.value = "";

  rumLuas.textContent = ``;
  awLuas.textContent = ``;
  hasLuas.textContent = ``;
});

kelilingSub.addEventListener("click", () => {
  let res = parseInt(a.value) + parseInt(b.value) + parseInt(c.value);
  rumKeliling.textContent = `K = S1 + S2 + S3`;
  awKeliling.textContent = `K = ${a.value} + ${b.value} + ${c.value}`;
  hasKeliling.textContent = `K = ${res}`;
});

kelilingRes.addEventListener("click", () => {
  a.value = "";
  b.value = "";
  c.value = "";

  rumKeliling.textContent = ``;
  awKeliling.textContent = ``;
  hasKeliling.textContent = ``;
});
