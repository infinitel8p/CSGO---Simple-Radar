// Override default form submit behavior
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    var color = document.querySelector('[name="color"]').checked ? ' Col' : '';
    var callout = document.querySelector('[name="callout"]').checked ? ' Cal' : '';
    var buyzone = document.querySelector('[name="buyzone"]').checked ? ' Buy' : '';
    var elevation = document.querySelector('[name="elevation"]').checked ? ' Ele' : '';
    var fileName = 'Simple Radar' + color + callout + buyzone + elevation + '.zip';
    var link = document.createElement('a');
    link.href = 'data/' + fileName;
    link.download = 'Simple Radar.zip';
    link.click();
    link.remove();
});

// Darkmode / Lightmode
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    document.body.classList.add('light-mode');
} else {
    // if browser default is dark mode set color scheme to dark and flip switch
    document.body.classList.remove('light-mode');
    document.querySelector('.switch input').checked = true;
}

// Darkmode / Lightmode
const toggleButton = document.querySelector('#dark-mode-toggle');
toggleButton.addEventListener('click', function () {
    document.body.classList.toggle('light-mode');
});

// Switch behaviour -> Darkmode / Lightmode
const toggleSwitch = document.querySelector('.switch input');
toggleSwitch.addEventListener('change', function () {
    if (this.checked) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
});

// Add event listener to update image on changes
const updateBtn = document.getElementById("update-btn");
updateBtn.addEventListener("click", updateImage);

// Update image
function updateImage() {
    var color = document.querySelector('[name="color"]').checked;
    var callout = document.querySelector('[name="callout"]').checked;
    var elevation = document.querySelector('[name="elevation"]').checked;
    var buyzone = document.querySelector('[name="buyzone"]').checked;

    let imageName = "603be21cb413139882f22ee1_Color0Pat0Buy0Spec0.jpg";
    if (color && callout && buyzone && elevation) imageName = "603be224a83b1a23109ddf9b_Color1Pat1Buy1Spec1.jpg";
    else if (color && callout && elevation) imageName = "603be223496482786fbb2193_Color1Pat1Buy0Spec1.jpg";
    else if (color && callout && buyzone) imageName = "603be22377575be10626aaae_Color1Pat0Buy1Spec1.jpg";
    else if (color && buyzone && elevation) imageName = "603be22448b1e84f8c577e9f_Color1Pat1Buy1Spec0.jpg";
    else if (callout && buyzone && elevation) imageName = "603be22083ba30bac4cef39e_Color0Pat1Buy1Spec1.jpg";
    else if (callout && elevation) imageName = "603be22011f53179619c3cdf_Color0Pat1Buy0Spec1.jpg";
    else if (callout && buyzone) imageName = "603be21f9b58a72f47a7707a_Color0Pat0Buy1Spec1.jpg";
    else if (color && buyzone) imageName = "603be222f4f45c524e569e1c_Color1Pat0Buy1Spec0.jpg";
    else if (color && elevation) imageName = "603be223e1c14547d0d5914e_Color1Pat1Buy0Spec0.jpg";
    else if (color && callout) imageName = "603be2220ba6bc5c25c7d197_Color1Pat0Buy0Spec1.jpg";
    else if (buyzone && elevation) imageName = "603be220a83b1a4ead9ddf8d_Color0Pat1Buy1Spec0.jpg";
    else if (elevation) imageName = "603be21edce0473e693a4a38_Color0Pat1Buy0Spec0.jpg";
    else if (color) imageName = "603be22027a1803d8d15f194_Color1Pat0Buy0Spec0.jpg";
    else if (callout) imageName = "603be21f77575b4cde26aa07_Color0Pat0Buy0Spec1.jpg";
    else if (buyzone) imageName = "603be21e0b9e8ae25b27b351_Color0Pat0Buy1Spec0.jpg";

    const image = document.getElementById("map-preview");
    image.src = "https://uploads-ssl.webflow.com/5d5ab0de3f2789196e87264e/" + imageName;
}