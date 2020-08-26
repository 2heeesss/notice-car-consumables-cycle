const toggleBtn = document.querySelector('.navbar-toggleBtn');
const menu = document.querySelector('.navbar-menu');

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
});

function excelExport(event) {
  var input = event.target;
  var reader = new FileReader();

  reader.onload = function () {
    var fileData = reader.result;
    var wb = XLSX.read(fileData, { type: 'binary' });
    wb.SheetNames.forEach(function (sheetName) {
      let userData = XLSX.utils.sheet_to_json(wb.Sheets[sheetName]);
      console.log(userData);

      console.log(SumRatio());

      function SumRatio() {
        let badHabidRatio = 0;
        let count = 0;

        for (let i = 0; i < userData.length; i++) {
          badHabidRatio += userData[i].비율;
          count++;
        }
        return badHabidRatio / count;
      }
    });
  };
  reader.readAsBinaryString(input.files[0]);
}
