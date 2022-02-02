$(document).ready(() => {
  // Slick slide
  $(".main").slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    adaptiveHeight: true,
  });
  const page = localStorage.getItem("page") || 0;
  $(".main").slick("slickGoTo", page);
  $(".main").on("beforeChange", (event, slick, currentSlide, nextSlide) => {
    localStorage.setItem("page", nextSlide);
  });

  // Change facebook cover
  $("#addCover").change((e) => {
    const file = e.target.files[0];
    const coverElm = $("#coverImg");
    URL.revokeObjectURL(coverElm.attr("src"));
    coverImg.src = URL.createObjectURL(file);
    e.target.value = null;
  });

  // Dark switch
  const body = $(document.body);
  localStorage.getItem("mode") == "dark" && body.addClass("dark-mode");
  $(".dark-switch").click(() => {
    localStorage.getItem("mode") == "dark"
      ? localStorage.setItem("mode", "light")
      : localStorage.setItem("mode", "dark");
    body.toggleClass("dark-mode");
  });
});
