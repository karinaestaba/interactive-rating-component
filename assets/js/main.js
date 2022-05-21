window.addEventListener('load', (event) => {
  const submitRatingBtn = document.getElementById('submitRating');
  const ratingForm = document.getElementById('fedbackRatingForm');

  if(submitRatingBtn != null) {
    submitRatingBtn.addEventListener('click', function(event) {
      event.preventDefault();

      if(ratingForm.checkValidity()){
        document.getElementById('fedbackRatingForm').classList.add('submited') 
        document.getElementById('fedbackRatingFinish').classList.add('ready')

        const optionSelected = document.querySelector('input[name="radioOption"]:checked');

        if (optionSelected != null) {
          document.getElementById('rate-selected').innerText = optionSelected.value
        }
      }else{
        ratingForm.classList.add('invalid')
        setTimeout(() => ratingForm.classList.remove('invalid'), 1000)
      }
    })
  }
})