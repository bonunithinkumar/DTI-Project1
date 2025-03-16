
/* adding new html if cilicked specific districts or branches */


function displayhtml() {
  // For District selection
  const districtContainer = document.querySelector(".displayed-district");
  const specificDistrict = document.querySelector('input[name="district"][value="specific"]').checked;

  if (specificDistrict) {
      districtContainer.innerHTML = `
          <div class="select-district">
              <select name="district-select" required>
                  <option value="" disabled selected>--PREFERRED DISTRICT--</option>
                  <option value="vizag">Vizag</option>
                  <option value="guntur">Guntur</option>
                  <option value="amaravathi">Amaravathi</option>
                  <option value="srikakulam">Srikakulam</option>
                  <option value="tirupathi">Tirupathi</option>
              </select>
          </div>`;
  } else {
      districtContainer.innerHTML = ""; // Clear dropdown if "All Districts" is selected
  }

  // For Branch selection
  const branchContainer = document.querySelector(".select-prefered-branch");
  const specificBranch = document.querySelector('input[name="branch"][value="specific"]').checked;

  if (specificBranch) {
      branchContainer.innerHTML = `
          <div class="select-branch">
              <select name="branch" required>
                  <option value="" disabled selected>--PREFERRED BRANCH--</option>
                  <option value="cse">CSE</option>
                  <option value="csd">CSD</option>
                  <option value="cai">CAI</option>
                  <option value="mec">MEC</option>
                  <option value="civil">CIVIL</option>
              </select>
          </div>`;
  } else {
      branchContainer.innerHTML = ""; // Clear dropdown if "All Branches" is selected
  }
};



 /* for input */

 document.querySelectorAll('.radio-input').forEach(input => {
  input.addEventListener('change', (event) => {
    console.log(`Selected gender: ${event.target.value}`);
  });
});

function addhtml(){
  const value=document.querySelector('.gender-text-js');
  const innervalue=value.value;
  if (innervalue === "Specific branches"){
    console.log('found');
  }
}