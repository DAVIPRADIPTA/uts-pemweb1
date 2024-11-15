function cekBmi(event) {
  event.preventDefault();
  
  // Ambil nilai input
  const weight = parseFloat(document.getElementById('berat').value);
  const height = parseFloat(document.getElementById('tinggi').value);

  // Validasi input
  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
      document.getElementById('result').innerText = 'Masukkan nilai yang valid!';
      return;
  }

  // Hitung BMI
  const bmi = weight / (height * height);
  let resultText = `BMI Anda: ${bmi.toFixed(2)}`;

  // Tentukan kategori BMI
  if (bmi < 18.5) {
      resultText += ' (Underweight)';
  } else if (bmi >= 18.5 && bmi < 24.9) {
      resultText += ' (Normal weight)';
  } else if (bmi >= 25 && bmi < 29.9) {
      resultText += ' (Overweight)';
  } else {
      resultText += ' (Obesity)';
  }

  // Tampilkan hasil
  document.getElementById('result').innerText = resultText;
};



   