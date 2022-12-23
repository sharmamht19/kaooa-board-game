  
 VanillaTilt.init(document.querySelector(".place"), {
    max: 25,
    speed: 400
  });
  
  //It also supports NodeList
  VanillaTilt.init(document.querySelectorAll(".place"));
  VanillaTilt.init(document.querySelector(".child"), {
    max: 20,
    speed: 200
  });
  
  //It also supports NodeList
  VanillaTilt.init(document.querySelectorAll(".child"));
  