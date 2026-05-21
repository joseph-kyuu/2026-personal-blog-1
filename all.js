// 課程卡片資料
const cardsData = [
  {
    image: "./imges/html.png",
    title: "HTML5 基礎教學",
    content:
      "引起監督每月反饋很好，我市歡迎地址，忘記手術附件原則一批，簡歷碩士夏天之家首頁，一定會郵件黑色嘉義公佈元素，畢業生到底電子商務舉行條件出席怎樣別人湖北同意及其，位置台中無數介紹，谷歌又是免費版他人語文拒絶一顆哈哈透明大陸使用竟然決策超級，自由職工輸出導航。",
  },
  {
    image: "./imges/rwd.png",
    title: "響應式網站設計",
    content:
      "引起監督每月反饋很好，我市歡迎地址，忘記手術附件原則一批，簡歷碩士夏天之家首頁，一定會郵件黑色嘉義公佈元素，畢業生到底電子商務舉行條件出席怎樣別人湖北同意及其，位置台中無數介紹，谷歌又是免費版他人語文拒絶一顆哈哈透明大陸使用竟然決策超級，自由職工輸出導航。",
  },
  {
    image: "./imges/jQuery.png",
    title: "jQuery 實戰教學",
    content:
      "引起監督每月反饋很好，我市歡迎地址，忘記手術附件原則一批，簡歷碩士夏天之家首頁，一定會郵件黑色嘉義公佈元素，畢業生到底電子商務舉行條件出席怎樣別人湖北同意及其，位置台中無數介紹，谷歌又是免費版他人語文拒絶一顆哈哈透明大陸使用竟然決策超級，自由職工輸出導航。",
  },
];

// 課程表格資料
const tableData = [
  {
    title: "費用",
    hexOnlineCourse: "較低",
    hexOnlineCourseStatus: "win",
    normalOnlineCourse: "較低",
    normalOnlineCourseStatus: "win",
    offlineCourse: "較高",
    offlineCourseStatus: "lose",
  },
  {
    title: "學習效果",
    hexOnlineCourse: "一般",
    hexOnlineCourseStatus: "lose",
    normalOnlineCourse: "較低",
    normalOnlineCourseStatus: "win",
    offlineCourse: "很好",
    offlineCourseStatus: "win",
  },
  {
    title: "Code Review",
    hexOnlineCourse: "有",
    hexOnlineCourseStatus: "win",
    normalOnlineCourse: "無",
    normalOnlineCourseStatus: "lose",
    offlineCourse: "不一定",
    offlineCourseStatus: "lose",
  },
  {
    title: "課程更新速度",
    hexOnlineCourse: "普通",
    hexOnlineCourseStatus: "win",
    normalOnlineCourse: "普通",
    normalOnlineCourseStatus: "win",
    offlineCourse: "較慢",
    offlineCourseStatus: "lose",
  },
  {
    title: "多次複習",
    hexOnlineCourse: "可",
    hexOnlineCourseStatus: "win",
    normalOnlineCourse: "可",
    normalOnlineCourseStatus: "lose",
    offlineCourse: "不可",
    offlineCourseStatus: "lose",
  },
  {
    title: "字幕",
    hexOnlineCourse: "有",
    hexOnlineCourseStatus: "win",
    normalOnlineCourse: "不一定",
    normalOnlineCourseStatus: "lose",
    offlineCourse: "板書",
    offlineCourseStatus: "lose",
  },
];

// 課程卡片迴圈
const courseCard = document.querySelector(".courseCard");

let courseCardHTML = "";

cardsData.forEach((item) => {
  courseCardHTML += `
            <div class="col">
              <div class="card box-shadow">
              <img src="${item.image}" class="card-img-top" alt="${item.title}" title="${item.title}">
              <div class="card-body ">
                <h5 class="card-title text-center fw-bold">${item.title}</h5>
                <p class="card-text text-justify">${item.content}</p>
              </div>
          </div>
            </div>             
  `;
});

courseCard.innerHTML = courseCardHTML;

// 課程表格迴圈
const courseTable = document.querySelector(".courseTable");

const colorClass = (status) => {
  return status === "win" ? "text-lightgreen" : "";
};

let courseTableHTML = "";

tableData.forEach((item) => {
  courseTableHTML += `
    <tr>
    <th scope="row">${item.title}</th>
    <td class="${colorClass(item.hexOnlineCourseStatus)}">${item.hexOnlineCourse}</td>
    <td class="${colorClass(item.normalOnlineCourseStatus)}">${item.normalOnlineCourse}</td>
    <td class="${colorClass(item.offlineCourseStatus)}">${item.offlineCourse}</td>
    </tr>
`;
});

courseTable.innerHTML = courseTableHTML;
