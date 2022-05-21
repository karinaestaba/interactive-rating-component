window.addEventListener('load', (event) => {
  let submitRatingBtn = document.getElementById('submitRating');

  if(submitRatingBtn != null) {
    submitRatingBtn.addEventListener('click', function(event) {
      event.preventDefault();

      document.getElementById('fedbackRatingForm').classList.add('submited') 
      document.getElementById('fedbackRatingFinish').classList.add('ready')

      const optionSelected = document.querySelector('input[name="radioOption"]:checked');

      if (optionSelected != null) {
        document.getElementById('rate-selected').innerText = optionSelected.value
      }
    })
  }
})