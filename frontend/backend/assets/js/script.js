function calculateTips(event) {
    alert('fui submetido')
    
}
document.getElementById('totalTip').style.display = "none";
document.getElementById('each').style.display = "none";
document.getElementById("tipsForm").addEventListener('submit', calculateTips);