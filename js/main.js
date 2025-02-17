$(function () {
  $(".header-wrap").load("./component/header.html");
  $(".header-menu-wrap").load("./component/header-menu.html");
  $(".footer-wrap").load("./component/footer.html");
  $(".side-menu-wrap").load("./component/side-menu.html");
  $(".bottom-menu-wrap").load("./component/bottom-menu.html");
  $(".pagination-wrap").load("./component/pagination.html");
  $(".nodata-wrap").load("./component/nodata.html");
});



function investmentListShow() {
  let investmentLists = document.querySelectorAll('.investment-list')
  investmentLists.forEach(investmentList => {
    let accordionCollapse = investmentList.querySelector('.accordion-collapse')
    accordionCollapse.classList.add("show")
  });
}

function investmentListHide() {
  let investmentLists = document.querySelectorAll('.investment-list')
  investmentLists.forEach((investmentList, i) => {
    if (i == 0) {
      return
    } else {
      let accordionCollapse = investmentList.querySelector('.accordion-collapse')
      accordionCollapse.classList.remove("show")
    }
  });
}
window.addEventListener('load', function () {
  window.innerWidth < 576 && investmentListShow()
  window.innerWidth > 576 && investmentListHide()
  window.addEventListener('resize', function () {
    console.log(window.innerWidth)
    window.innerWidth < 576 && investmentListShow()
    window.innerWidth > 576 && investmentListHide()
  })
})