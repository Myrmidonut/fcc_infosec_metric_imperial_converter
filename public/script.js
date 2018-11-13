const form = document.getElementById("convertForm");
const result = document.getElementById("result");
const jsonResult = document.getElementById("jsonResult");

form.addEventListener("submit", e => {
  e.preventDefault();

  const query = document.getElementById("convertField").value;
  const url = `/api/convert?input=${query}`;

  fetch(url)        
  .then(response => response.text())
  .then(data => {
    try {
      const jsonReturn = JSON.parse(data);

      result.textContent = jsonReturn.string;
      jsonResult.textContent = JSON.stringify(jsonReturn);
    } catch(err) {
      result.textContent = data;
      jsonResult.textContent = data;
    }
    form.reset();
  })
  .catch(error => console.log(error))
})