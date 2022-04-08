//  ****** Day 0: Data Types ******

function performOperation(secondInteger, secondDecimal, secondString) {
  const firstInteger = 4;

  const firstDecimal = 4.0;

  const firstString = "HackerRank ";

  // Bizden ilk 2 kısım için istenen console.log içine önce firstinteger yazmak ve secondinteger ile toplamak. (2. işlemde ilk örnek gibi)
  //secondinteger'ı number türüne dönüştürün.
  //tür dönüşümleri konusuna bakarsanız daha iyi anlaşılır.

  console.log(firstInteger + Number(secondInteger));

  console.log(firstDecimal + Number(secondDecimal));

  // bu kısım string, dönüşüm istenmemiş ve iki metni birleştirmemiz istenmiş.
  console.log(firstString + secondString);
}
