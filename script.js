document.getElementById("bmiForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const gender = document.getElementById("gender").value;
  const age = parseInt(document.getElementById("age").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);

  if (!gender || isNaN(age) || isNaN(weight) || isNaN(height) || age <= 0 || weight <= 0 || height <= 0) {
    alert("Harap isi semua kolom dengan benar.");
    return;
  }

  const heightInMeters = height / 100;
  const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);

  let category = "";
  let advice = "";

  if (bmi < 18.5) {
    category = "Kekurangan berat badan";
    advice = "Disarankan untuk meningkatkan asupan kalori Anda dengan makanan bernutrisi dan berkonsultasi dengan ahli gizi.";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    category = "Normal (sehat)";
    advice = "Selamat! Pertahankan pola makan sehat dan rutin berolahraga untuk menjaga kesehatan Anda.";
  } else if (bmi >= 25 && bmi < 29.9) {
    category = "Kelebihan berat badan";
    advice = "Cobalah untuk meningkatkan aktivitas fisik dan mengatur pola makan yang seimbang.";
  } else {
    category = "Obesitas";
    advice = "Disarankan untuk berkonsultasi dengan dokter atau ahli gizi untuk mendapatkan rencana penurunan berat badan yang tepat.";
  }

  document.getElementById("bmiValue").textContent = `BMI Anda: ${bmi}`;
  document.getElementById("bmiCategory").textContent = `Kategori: ${category}`;
  document.getElementById("bmiAdvice").textContent = `Saran Kesehatan: ${advice}`;
  document.getElementById("bmiResult").classList.remove("hidden");
});
