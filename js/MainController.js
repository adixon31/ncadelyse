 function MainController($scope, $location){
    if($location.path() == "/about") $scope.bodyClass = "dark";
    else if($location.path() == "/projects") $scope.bodyClass = "light";
    else if($location.path() == "/code") $scope.bodyClass = "light";
    else $scope.bodyClass = "dark";

  $scope.title = "Portfolio";
  $scope.promo = "Send all inquiries to angel.dixon31@gmail.com.";
  $scope.about = "One year ago, I graduated with a Bachelor's of Science in Computational Media Student from the Georgia Institute of Technology. My studies involved computer programming, design, and understanding the computer as a medium. While my more personal interests include film, narrative, and animation, I am open to experience other branches of my field such as UI/UX Design, game development, marketing, and web development.\nI am currently a software developer at a company that provides conferencing and collaboration solutions."
  $scope.projects = [
    {
   		name: 'Harry Potter and the Half-Blooded Prince',
      price: 100,
      pubdate: new Date('2005', '07', '16'),
      cover: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/964115.jpg',
      likes: 0,
      dislikes: 0
    },
    {
   		name: 'Trial by Journal',
      price: 9,
      pubdate: new Date('2002', '10', '15'),
      cover: 'http://ecx.images-amazon.com/images/I/51fWQRGPAUL._SY344_BO1,204,203,200_.jpg',
      likes: 0,
      dislikes: 0
    }
    ];
  $scope.plusOne = function(index) {
    $scope.products[index].likes += 1;
  };
  $scope.minusOne = function(index) {
    $scope.products[index].dislikes += 1;
  };
  
};

 app.controller('MainController', MainController);