let calculation = localStorage.getItem('calculation') || '';
    displayCalulation();
    // let calculation = '';
    function updateCalculation(numberadd) {
      calculation += numberadd;
      displayCalulation();
      localStorage.setItem('calculation', calculation);
    }
    function displayCalulation(){
      document.querySelector('.js-display').innerHTML = calculation;
    }