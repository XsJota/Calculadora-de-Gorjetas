function calculateTips(event) {
    event.preventDefault();
    let bill = document.getElementById('bill').value;
    let serviceQual = document.getElementById('serviceQual').value;
    let amountPeoples = document.getElementById('amountPeoples').value
    if (bill == "" || serviceQual == 0) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Preencha os campos vazios!',
          })
       return;
    }
    if (amountPeoples > 1){
        document.getElementById('each').style.display = "block";
    }else {
        document.getElementById('each').style.display = "none";
    }
    let total = (bill * serviceQual) / amountPeoples;
    total = total.toFixed(2)
    document.getElementById('tip').innerHTML = total
    document.getElementById('totalTip').style.display = "block";
}
document.getElementById('totalTip').style.display = "none";
document.getElementById('each').style.display = "none";
document.getElementById("tipsForm").addEventListener('submit', calculateTips);