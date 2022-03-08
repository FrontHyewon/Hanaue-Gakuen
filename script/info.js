const h1 = document.querySelector("#change_h1");
const p = document.querySelector("#change_p");

function fadein_A() {
  h1.classList.add("hide");
  setTimeout(function () {
    h1.innerText = "A동";
    p.innerHTML = `　세 구역으로 나누어진 건물 중 가장 큰 규모를 가지고 있으며 주로 음악부의 교실 및 연습실이 몰려있다. 학교는 음악부가 가장 분과가 많고 악기들의 몸집이 대체로 크기 때문에 음악부가 가장 큰 건물을 사용하는 건 어쩔 수 없다,는 의견을 내놓고 있지만. 그들이 음악부를 가장 밀어주고 있다는 것에 이견을 제시할 수 없을 정도로 음악 특기생들이 특혜를 받고 있는 건 사실이다.`;
  }, 500);
  setTimeout(function () {
    h1.classList.remove("hide");
  }, 500);
}

function fadein_B() {
  h1.classList.add("hide");
  setTimeout(function () {
    h1.innerText = "B동";
    p.innerHTML = `　학교를 정문에서 바라보았을 때 왼편에 위치한 건물. 주로 무용부의 교실 및 연습실이 있다. 무용부 특성상 교실마다 벽 거울이 많이 설치되어 있기 때문에 만약 지진 같은 자연재해가 발생했을 때 해당 건물 안에 있다면, 벽이 무너지기 전에 신속히 대피해야 한다. 학과 학생들의 성비 차이가 다른 두 곳과 비교해 심한 편이다. 주로 여학생이 많다.`;
  }, 500);
  setTimeout(function () {
    h1.classList.remove("hide");
  }, 500);
}

function fadein_C() {
  h1.classList.add("hide");
  setTimeout(function () {
    h1.innerText = "C동";
    p.innerHTML = `　학교를 정문에서 바라보았을 때 오른 편에 위치한 건물. 주로 미술부의 교실 및 연습실이 있다. 지하에는 역대 학생들의 졸업 작품을 전시해두고 있는데, 제법 잘 꾸며져있어 다른 학과의 학생들도 자주 구경 온다. 그림 보관 시에는 직사광선을 피하는 게 좋기 때문에 창문에 두터운 암막 커튼이 설치되어 있는 교실이 많다. 학과생들의 교복 스타일링이 가장 자유분방한 편.`;
  }, 500);
  setTimeout(function () {
    h1.classList.remove("hide");
  }, 500);
}

function fadein_D() {
  h1.classList.add("hide");
  setTimeout(function () {
    h1.innerText = "정문";
    p.innerHTML = `　유동 인구가 가장 많은 정문. 옛날부터 돈 많은 집 자제들을 노리는 금전 목적의 범죄나 개방된 도서관 장서를 도둑맞는 일이 잦았기에 입구는 고용된 경비원들이 철저히 지키고 있다. 길게 늘어선 복도를 통해 B동과 C동을 넘나들거나 각 건물 3층에서 펜스가 쳐진 복도식 발코니로 나갈 수 있다. 도시락을 싸오는 학생들은 여기서 주로 점심을 먹는다.`;
  }, 500);
  setTimeout(function () {
    h1.classList.remove("hide");
  }, 500);
}

document.querySelector(".school_A").addEventListener("click", fadein_A);
document.querySelector(".school_B").addEventListener("click", fadein_B);
document.querySelector(".school_C").addEventListener("click", fadein_C);
document.querySelector(".school_D").addEventListener("click", fadein_D);

// scroll animation(Scroll-Magic)
const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    triggerElement: spyEl,
    triggerHook: 0.6,
  })
    .setClassToggle(spyEl, "show")
    .addTo(new ScrollMagic.Controller());
});
