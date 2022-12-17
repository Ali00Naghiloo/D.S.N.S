import PageThree from "../components/my account page/PageThree";

const MyAccount = () => {
  function scrollDetect() {
    var lastScroll = 0;

    window.onscroll = function () {
      let currentScroll =
        document.documentElement.scrollTop || document.body.scrollTop; // Get Current Scroll Value

      if (currentScroll > 0 && lastScroll <= currentScroll) {
        lastScroll = currentScroll;
        document.getElementById("scrollLoc").innerHTML = "Scrolling DOWN";
      } else {
        lastScroll = currentScroll;
        document.getElementById("scrollLoc").innerHTML = "Scrolling UP";
      }
    };
  }

  return (
    <>
      <PageThree />
    </>
  );
};

export default MyAccount;
