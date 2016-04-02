 function MainController($scope, $location, $http){
    // if($location.path() == "/about") $scope.bodyClass = "dark";
    // else if($location.path() == "/projects") $scope.bodyClass = "light";
    // else if($location.path() == "/code") $scope.bodyClass = "light";
    // else $scope.bodyClass = "home";
    console.log($location.path());

  $scope.title = "Portfolio";
  $scope.promo = "Send all inquiries to angel.dixon31@gmail.com.";
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

    $scope.home = [
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
    },
    {
      name: 'Harry Potter and the Half-Blooded Prince',
      price: 100,
      pubdate: new Date('2005', '07', '16'),
      cover: 'https://d1466nnw0ex81e.cloudfront.net/n_iv/600/964115.jpg',
      likes: 0,
      dislikes: 0
    }
    ];
    $scope.features = [
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
  $scope.plusOne = function(index) {
    $scope.products[index].likes += 1;
  };
  $scope.minusOne = function(index) {
    $scope.products[index].dislikes += 1;
  };

  $scope.result = 'hidden'
    $scope.resultMessage;
    $scope.formData; //formData is an object holding the name, email, subject, and message
    $scope.submitButtonDisabled = true;
    $scope.submitted = false; //used so that form errors are shown only after the form has been submitted
    $scope.submit = function(contactform) {
        $scope.submitted = true;
        if (contactform.$valid) {
          console.log($scope.formData);
            $http({
                method  : 'POST',
                url     : '../php/contact-form.php',
                data    : $.param($scope.formData),  //param method from jQuery
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  //set the headers so angular passing info as form data (not request payload)
            }).success(function(data){
                console.log(data);
                if (data.success) { //success comes from the return json object
                    $scope.resultMessage = data.message;
                    $scope.result='bg-success';
                } else {
                    $scope.resultMessage = data.message;
                    $scope.result='bg-danger';
                }
            });
        } else {
            $scope.resultMessage = 'Failed :( Please fill out all the fields.';
            $scope.result='bg-danger';
        }
    }
  
};

 app.controller('MainController', MainController);