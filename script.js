/* =========================
   CHARACTER DATA
========================= */

const charaData = [
  {
    id: "amon",
    name: "飯田亜門",
    yomi: "いいだ",
    text:"帝翔学院高校野球部のエース。",
    text1:"周りが化け物揃いの中、突出した才能はないが",
    text2:"こつこつと積み重ねられる努力家。",
    text3:"エースなのに一番不憫で、後輩の凛にはよくパシられている。",
    text4:"チーム内人気は4位。",
    grade: "3年",
    className: "C組",
    color: "#e74fff",
    icon: "images/amon.png",
    images: {
      uniform: "images/amon_uniform.png",
      casual: "images/amon_casual.png"
    }
  },
  {
    id: "azuma",
    name: "東馬柊",
    yomi: "あずま",
    text: "帝翔学院高校野球部のキャプテン。",
    text1:"穏やかな性格で、周りをよく観察し支えてくれるチームの支柱。",
    text2:"亜門とは幼少からの付き合いで息の合ったコンビ。",
    text3:"彼女との待ち合わせにはスタバ両手が標準装備。",
    text4:"チーム内人気は堂々の1位。",
    grade: "3年",
    className: "A組",
    color: "#4fa3ff",
    icon: "images/azuma-icon.png",
    images: {
      uniform: "images/syu_seihuku.PNG",
      casual: "images/azumasyu.png"
    }
  },
  {
    id: "motani",
    name: "茂谷恒一",
    yomi: "もたに",
    text: "「どしたん、話聞こか？」から会話が始まる",
    text1:"通称どしはな先輩。",
    text2:"暴走しがちな後輩達を落ち着かせるのはいつも恒一の役目。",
    text3:"亜門と同じく不憫ポジであり、",
    text4:"同じように凛にパシられている。",
    grade: "3年",
    className: "B組",
    color: "#4fff83",
    icon: "images/kou-icon.png",
    images: {
      uniform: "images/kou_seihuku.PNG",
      casual: "images/motanikoiti.png"
    }
  },
  {
    id: "onizuka",
    name: "鬼塚門斗",
    yomi: "おにづか",
    text: "関西弁の見た目、言動完全ヤクザな高校生。",
    text1:"こんな見た目をしている割には",
    text2:"猫を可愛がる心を持っている。",
    text3:"怖くない、怖くないんです。",
    text4:"ただ見た目がちょっとあれなだけで。",
    grade: "3年",
    className: "A組",
    color: "#5c398a",
    icon: "images/mondo.png",
    images: {
      uniform: "images/onizuka_uniform.png",
      casual: "images/onizuka_casual.png"
    }
  },
   {
    id: "yuki",
    name: "結城ひより",
    yomi: "ゆうき",
    text: "帝翔学院高校野球部の母的存在。",
    text1:"5人いる3年生の紅一点で、",
    text2:"柊と同じくチームの支柱。",
    text3:"感情の起伏があまりなく、常に",
    text4:"冷静でチームをよく見ている。",
    grade: "3年",
    className: "C組",
    color: "#5574bd",
    icon: "images/hiyori.png",
    images: {
      uniform: "images/yuki_uniform.png",
      casual: "images/yuki_casual.png"
    }
  },
  {
    id: "sanzenin",
    name: "三千院朔",
    yomi: "さんぜんいん",
    text: "「世界が味方している」",
    text1:"が口癖のもはや世界そのもの。",
    text2:"なぜこんな性格なのに彼女がいるのかと",
    text3:"いつも不思議がられている。",
    text4:"愉快。",
    grade: "2年",
    className: "F組",
    color: "#c35442",
    icon: "images/saku.png",
    images: {
      uniform: "images/saku_uniform.png",
      casual: "images/saku_casual.png"
    }
  },
  {
    id: "mochizuki",
    name: "望月澪",
    yomi: "もちづき",
    text: "ギャル。",
    text1:"みんなに猫被ってるタイプのギャル。",
    text2:"可愛いは正義を体現",
    text3:"したかのようなギャル。",
    text4:"つまりギャル。",
    grade: "2年",
    className: "F組",
    color: "#b1eeff",
    icon: "images/mio.png",
    images: {
      uniform: "images/mio_uniform.png",
      casual: "images/mio_casual.png"
    }
  },
  {
    id: "uryu",
    name: "瓜生蔓奈",
    yomi: "うりゅう",
    text: "チーム内一番のスピードを持つ稲妻。",
    text1:"正統派ヒロインで正直",
    text2:"主人公より主人公している。",
    text3:"才能に胡坐をかくことなく、",
    text4:"努力を続けられるいい子。",
    grade: "1年",
    className: "C組",
    color: "#5a78bf",
    icon: "images/uriu.png",
    images: {
      uniform: "images/uriu_uniform.png",
      casual: "images/uriu_casual.png"
    }
  },
  {
    id: "suzuki",
    name: "鈴木凛",
    yomi: "すずき",
    text: "小さい体で歯向かってくる",
    text1:"姿はきゃんきゃん吠える小型犬そのもの。",
    text2:"正論マシーンで感情論を嫌う。",
    text3:"効率最重視でよく同じ立場の",
    text4:"直葉と衝突している。",
    grade: "1年",
    className: "D組",
    color: "#4850bc",
    icon: "images/rin.png",
    images: {
      uniform: "images/rin_uniform.png",
      casual: "images/rin_casual.png"
    }
  },
  {
    id: "motani-nao",
    name: "茂谷直葉",
    yomi: "もたに",
    text: "冷静沈着なチームの頭脳。",
    text1:"正論マシーン2号で凛と同じだが",
    text2:"オブラートに包めるため周囲と",
    text3:"ぶつかりにくい。",
    text4:"凛に唯一対抗出来る存在。",
    grade: "1年",
    className: "C組",
    color: "#6c4c76",
    icon: "images/naoha.png",
    images: {
      uniform: "images/naoha_uniform.png",
      casual: "images/naoha_casual.png"
    }
  }
];

/* =========================
   STATE
========================= */

let currentIndex = 0;
let currentImages = {};
let defaultOrder = [...charaData];

/* =========================
   LIST RENDER
========================= */

function renderCharacterList(list) {
  const area = document.getElementById("character-list");
  area.innerHTML = "";

  list.forEach((c, index) => {
    const div = document.createElement("div");
    div.className = "character";
    div.onclick = () => openCharaByIndex(index);

    div.innerHTML = `
      <img src="${c.icon}" alt="${c.name}">
      <p>${c.name}</p>
    `;
    area.appendChild(div);
  });
}

/* =========================
   SORT
========================= */

function sortChara(type) {
  let sorted = [...charaData];

  if (type === "grade") {
    sorted.sort((a, b) => b.grade.localeCompare(a.grade, "ja"));
  }

  if (type === "name") {
    sorted.sort((a, b) => a.yomi.localeCompare(b.yomi, "ja"));
  }

  if (type === "default") {
    sorted = [...defaultOrder];
  }

  renderCharacterList(sorted);
}

/* =========================
   MODAL
========================= */

function openCharaByIndex(index) {
  const c = charaData[index];
  currentIndex = index;
  currentImages = c.images;

  const img = document.getElementById("modal-img");
  img.classList.remove("show");

  setTimeout(() => {
    img.src = c.images.uniform;
    document.getElementById("modal-name").textContent = c.name;
    document.getElementById("modal-text").textContent = c.text;
    document.getElementById("modal-text1").textContent = c.text1;
    document.getElementById("modal-text2").textContent = c.text2;
    document.getElementById("modal-text3").textContent = c.text3;
    document.getElementById("modal-text4").textContent = c.text4;
    document.getElementById("modal-grade").textContent = "学年：" + c.grade;
    document.getElementById("modal-class").textContent = "クラス：" + c.className;
    document.getElementById("chara-modal")
      .style.setProperty("--chara-accent", c.color);
    img.classList.add("show");
  }, 150);

  document.getElementById("chara-modal").classList.add("active");
}

function changeCostume(type) {
  if (!currentImages[type]) return;
  const img = document.getElementById("modal-img");
  img.classList.remove("show");
  setTimeout(() => {
    img.src = currentImages[type];
    img.classList.add("show");
  }, 150);
}

function prevChara() {
  openCharaByIndex((currentIndex - 1 + charaData.length) % charaData.length);
}

function nextChara() {
  openCharaByIndex((currentIndex + 1) % charaData.length);
}

function closeChara() {
  document.getElementById("chara-modal").classList.remove("active");
}

/* =========================
   INIT
========================= */

window.addEventListener("load", () => {
  renderCharacterList(charaData);
});
