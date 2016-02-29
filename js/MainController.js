app.controller('MainController', ['$scope', '$location', function($scope, $location){
  $scope.title = "Portfolio";
  $scope.promo = "Send all inquiries to angel.dixon31@gmail.com.";
  $scope.about = "One year ago, I graduated with a Bachelor's of Science in Computational Media Student from the Georgia Institute of Technology. My studies involved computer programming, design, and understanding the computer as a medium. While my more personal interests include film, narrative, and animation, I am open to experience other branches of my field such as UI/UX Design, game development, marketing, and web development.\nI am currently a software developer at a company that provides conferencing and collaboration solutions."
  $scope.products = [
    {
      name: 'Program or Be Programmed',
      price: 8,
      pubdate: new Date('2013', '09', '01'),
      cover: 'img/program-or-be-programmed.jpg',
      likes: 0,
      dislikes: 0
    },
    {
      name: 'The Book of Trees',
      price: 19,
      pubdate: new Date('2014', '03', '08'),
      cover: 'img/the-book-of-trees.jpg',
      likes: 0,
      dislikes: 0
    },
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
  console.log($location.path());
  
}]);