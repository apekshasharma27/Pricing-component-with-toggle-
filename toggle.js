function Toggle() {
  let monthly = document.querySelectorAll('.card-price-monthly');

  let annually = document.querySelectorAll('.card-price-annually');

  let checkValue = document.querySelector('.inputtoggle').checked;

  if (checkValue) {
    for (let el = 0; el < monthly.length; el++) {

      monthly[el].style.display = 'block';
    }
    for (let el = 0; el < annually.length; el++) {

      annually[el].style.display = 'none';
    }
  } else {
    for (let el = 0; el < monthly.length; el++) {
      monthly[el].style.display = 'none';
    }
    for (let el = 0; el < annually.length; el++) {
      annually[el].style.display = 'block';
    }

  }
}
