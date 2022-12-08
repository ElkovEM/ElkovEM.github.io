function mouseOn() {
    document.getElementById("cardp").style.opacity = "1";
    document.getElementById("card").style.opacity = "1";
  }
  
  function mouseOff() {
    document.getElementById("cardp").style.opacity = "0";
    document.getElementById("card").style.opacity = "0";
  }
  
  let boolmouse = false;
  function mouseClick() {
    if (boolmouse == false) {
      document.getElementById("cardimg").style.width = "30vmin";
      document.getElementById("cardimg").style.transform = "translateY(0vmin)";
      document.getElementById("cardimg").style.height = "50vmin";
      document.getElementById("cardimg").style.borderRadius = "1vmin";
      boolmouse = true;
    } else {
      document.getElementById("cardimg").style.width = "20vmin";
      document.getElementById("cardimg").style.transform = "translateY(-10vmin)";
      document.getElementById("cardimg").style.height = "20vmin";
      document.getElementById("cardimg").style.borderRadius = "30vmin";
      boolmouse = false;
    }
  }

  let boolmouse2 = false;
  function mouseClick2() {
    if (boolmouse2 == false) {
      document.getElementById("cardimg2").style.width = "30vmin";
      document.getElementById("cardimg2").style.transform = "translateY(0vmin)";
      document.getElementById("cardimg2").style.height = "50vmin";
      document.getElementById("cardimg2").style.borderRadius = "1vmin";
      boolmouse2 = true;
    } else {
      document.getElementById("cardimg2").style.width = "20vmin";
      document.getElementById("cardimg2").style.transform = "translateY(-10vmin)";
      document.getElementById("cardimg2").style.height = "20vmin";
      document.getElementById("cardimg2").style.borderRadius = "30vmin";
      boolmouse2 = false;
    }
  }