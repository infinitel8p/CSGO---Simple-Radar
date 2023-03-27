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