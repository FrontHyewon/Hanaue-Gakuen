const des = document.querySelector("#des");
const title = document.querySelector(".first_div h5");
const name = document.querySelector(".first_div h1");
const placeImg = document.querySelector(".school_min");
const placeDes = document.querySelector(".second_right h2");
const story = document.querySelector(".fourth_div p");
const effectEls = document.querySelectorAll(".effect");
const pencil = document.querySelector(".pencil");

function first() {
  des.className = "des hide first";
  title.innerText = "첫 번째 불가사의";
  name.innerText = "가을의 문학소녀";
  placeImg.innerHTML = "<img src='./images/school_min_C.png'>";
  placeDes.innerText = "C동 3층 특별4실";
  story.innerText = `　지금은 미술부, 음악부, 무용부밖에 없지만 옛날에는 문예부가 있었대. 그 문예부에 나가는 대회마다 상을 휩쓸고 다니던 천재 소녀가 있었는데, 졸업을 앞두고 그만 사고로 세상을 떠나고 말았다 나 봐. 하지만 그 애는 죽어서도 이야기 지어내는 걸 멈추지 못하고 아직도 이 학교를 떠돌아다니며 자신이 지어낸 이야기를 들려주고 다닌대. 특히 괴담을 엄청 좋아해서 만약 친구들과 무서운 이야기를 하다가 아무도 아닌 누군가가 끼어들어 있는 것을 눈치채버린다면…… 너도 그 소녀의 이야기 속으로 끌려들어 가 버릴지도 모르니 조심해!`;
  des.classList.remove("hide");
  effectEls.forEach((effectEl) => {
    effectEl.classList.remove("effect");
    void effectEl.offsetWidth;
    effectEl.classList.add("effect");
  });
  if (des.classList.contains("first")) {
    pencil.className = "pencil first";
  }
}
function second() {
  des.className = "des hide second";
  title.innerText = "두 번째 불가사의";
  name.innerText = "벚나무 아래에는,";
  placeImg.innerHTML = "<img src='./images/school_min_D.png'>";
  placeDes.innerText = "하나우에 교내 공원";
  story.innerText = `　꽃 피는 봄. 따듯한 날씨에 교내 공원을 산책하면 그것만큼 상쾌한 일이 없지. 하지만 교내 공원에는 조심해야 할 것이 있어. 그건 바로 공원 안에서 가장 큰 벚나무야. 그래, 중앙의 작은 호수 바로 옆에 있는 그거. 주변의 나무들은 평범한데 왜 그것만 유독 그렇게 큰 지 알아? 왜냐하면 그 나무는…… 사람을 먹고 자란다나! 아무도 없는 밤중에 근처를 지나거나, 대낮이어도 혼자 구경하는 사람이 있으면 나무가 소리 없이 움직여 그 사람을 꿀꺽! 삼켜버린다고 해! 그러니까 절대 혼자서 그 나무 근처를 지나다니면 안 돼. 그리고 웬만하면 그 나무 밑은 자세히 보지 마. 자칫 잘못했다간 나무 밑에 파묻힌 시체와 눈이 마주칠지도 모르니까……!`;
  des.classList.remove("hide");
  effectEls.forEach((effectEl) => {
    effectEl.classList.remove("effect");
    void effectEl.offsetWidth;
    effectEl.classList.add("effect");
  });
  if (des.classList.contains("second")) {
    pencil.className = "pencil second";
  }
}
function third() {
  des.className = "des hide third";
  title.innerText = "세 번째 불가사의";
  name.innerText = "방울이 울리는 동안에,";
  placeImg.innerHTML = "<img src='./images/school_min_A.png'>";
  placeDes.innerText = "A동 2층 복도";
  story.innerText = `　옛날, 아주 먼 옛날. 한 산을 호령했던 오니가 있었어. 오니는 흉악한 성질로, 매번 산 아랫마을을 약탈해갔기 때문에 마을 사람들은 언제나 두려움에 벌벌 떨어야 했지. 그러던 어느 날, 한 퇴마사가 마을에 묵게 되었어. 마을 사람들은 그를 극진히 대접하며 제발 그 오니를 해치워달라고 했지. 그러나 퇴마사 혼자 오니를 물리치기엔 역부족이었고, 왼손만 겨우 잘라올 수 있었어. 퇴마사는 그 왼손에 방울을 달아 이 방울이 울리지 않는 한, 오니가 절대 마을을 찾아올 수 없도록 주술을 걸어. 그렇게 봉인된 손이 지금 이 학교 어딘가에 있다고 해. 그러니 어디선가 갑자기 방울 소리가 들린다면 숨도 쉬지 말고 가만히 있어야 해. 그건 오니가 움직이고 있다는 소리니까.`;
  des.classList.remove("hide");
  effectEls.forEach((effectEl) => {
    effectEl.classList.remove("effect");
    void effectEl.offsetWidth;
    effectEl.classList.add("effect");
  });
  if (des.classList.contains("third")) {
    pencil.className = "pencil third";
  }
}
function fourth() {
  des.className = "des hide fourth";
  title.innerText = "네 번째 불가사의";
  name.innerText = "붉은 완장을 찬 소년";
  placeImg.innerHTML = "<img src='./images/school_min_D.png'>";
  placeDes.innerText = "정문 복도 1층";
  story.innerText = `　하교 시간, 정문을 지날 때는 조심해. 붉은 완장을 찬 소년이 있을지도 몰라. 만약 뒤에서 자전거 벨 소리가 들린다면 절대 뒤를 돌아보지 말고 먼저 바닥의 그림자를 확인해 봐. 그 그림자가 자전거를 탄 모습이 아닌데도 계속 벨을 울린다면 그건 붉은 완장을 찬 소년일 가능성이 커. 만약 그때 뒤를 돌아보면, 그곳에는 아무도 없겠지만 이상하다고 느낀 네가 다시 앞을 돌아보면…… 이미 그곳은 이 세상이 아닐 테니까. 꼭 명심해야 해!`;
  des.classList.remove("hide");
  effectEls.forEach((effectEl) => {
    effectEl.classList.remove("effect");
    void effectEl.offsetWidth;
    effectEl.classList.add("effect");
  });
  if (des.classList.contains("fourth")) {
    pencil.className = "pencil fourth";
  }
}
function fifth() {
  des.className = "des hide fifth";
  title.innerText = "다섯 번째 불가사의";
  name.innerText = "백조의 꿈";
  placeImg.innerHTML = "<img src='./images/school_min_B.png'>";
  placeDes.innerText = "B동 2층 무용실";
  story.innerText = `　옛날 우리 학교에 엄청 유명한 발레리나가 있었어. 인형 같은 외모와 탁월한 실력으로 많은 사람들의 사랑을 받았지. 하지만 그 발레리나에게는 이상한 점이 하나 있었어. 그건 바로 절대 관객들을 향해 등을 돌리지 않는다는 거였어. 그래도 사람들은 마치 인형극을 보는 기분이라며 좋아했어. 어느 날, 발레리나를 너무 사랑했던 한 청년이 자기는 무슨 수를 써서라도 그녀의 뒷모습을 봐야겠다며 돌연 무대로 난입했고 당황한 그녀는 관객들을 향해 등을 돌리고 말았는데…… 그녀는 지금도 학생인 척 학교에 숨어있다고 해. 조심해. 눈에 보이는 게 전부가 아니니까.`;
  des.classList.remove("hide");
  effectEls.forEach((effectEl) => {
    effectEl.classList.remove("effect");
    void effectEl.offsetWidth;
    effectEl.classList.add("effect");
  });
  if (des.classList.contains("fifth")) {
    pencil.className = "pencil fifth";
  }
}
function sixth() {
  des.className = "des hide sixth";
  title.innerText = "여섯 번째 불가사의";
  name.innerText = "얼굴 없는 액자";
  placeImg.innerHTML = "<img src='./images/school_min_C.png'>";
  placeDes.innerText = "C동 지하 보관1실";
  story.innerText = `　C동 지하에 걸려있는 그림 없는 액자, 혹시 본 적 있어? 그 액자, 비어있는데도 벽에 걸려있는 게 이상하지. 근데 실은 그 액자, 비어있는 게 아니야. 매일 밤 12시가 되면 그 액자에 초상화가 나타나는데 초상화의 주인공은 꼭 이 학교 학생 중 한 명이래. 그리고 초상화에 그려진 학생은 그날 꼭 죽는다고 해. 그래, 그 액자는 ‘오늘 죽는 사람을 알려주는’ 액자인 거지. 궁금하면 한 번 밤 12시에 그 액자를 찾아가 봐. 그렇지만, 웬만한 강심장이 아니면 안 되겠지. 한 밤중 학교에서 자신의 얼굴이 그려진 액자를 마주하게 될지도 모르니까…….`;
  des.classList.remove("hide");
  effectEls.forEach((effectEl) => {
    effectEl.classList.remove("effect");
    void effectEl.offsetWidth;
    effectEl.classList.add("effect");
  });
  if (des.classList.contains("sixth")) {
    pencil.className = "pencil sixth";
  }
}
function seventh() {
  des.className = "des hide seventh";
  title.innerText = "일곱 번째 불가사의";
  name.innerText = "알면 죽어!";
  placeImg.innerHTML = "<img src='./images/school_min_All.png'>";
  placeDes.innerText = "???";
  story.innerText = `　7대 불가사의의 일곱 번째 이야기. 이건 절대 알려지면 안 되는 이야기야. 왜냐하면 모든 7대 불가사의를 알게 된 인간은 죽게 되거든. 그러니까 절대 안 돼. 이것만은 아무리 궁금해해도 알려줄 수 없어. ……진짜라니까? 응? 이 얘기가 진짜면 나는 어떻게 살아있냐고? …… …… …… 얘, 너희 아직도 내가 인간으로 보이니?`;
  des.classList.remove("hide");
  effectEls.forEach((effectEl) => {
    effectEl.classList.remove("effect");
    void effectEl.offsetWidth;
    effectEl.classList.add("effect");
  });
  if (des.classList.contains("seventh")) {
    pencil.className = "pencil seventh";
  }
}

document.querySelector("#first").addEventListener("click", first);
document.querySelector("#second").addEventListener("click", second);
document.querySelector("#third").addEventListener("click", third);
document.querySelector("#fourth").addEventListener("click", fourth);
document.querySelector("#fifth").addEventListener("click", fifth);
document.querySelector("#sixth").addEventListener("click", sixth);
document.querySelector("#seventh").addEventListener("click", seventh);
