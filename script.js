

//circle

// A=C2/4π with circumfrence
//A=πr2  with radius
//A=1/4πd2 with diameter

//rectangle
// Area = Length * width
var category = document.getElementById('category')
var num2 = document.getElementById('val2')
var operator = document.getElementById('operator')

category.addEventListener('blur', (e) => {
    switch (e.target.value) {
        case 'Area with circumfrence':
        case 'Area with diameter':
        case 'Area with radius':

            num2.style.display = "none";
            operator.style.display = "none";
            break;

        default:
            num2.style.display = "block";
            operator.style.display = "block";
            break;

    }

})



function doCalculation() {
    console.log('something')
    var num1 = parseInt(document.getElementById('val1').value);
    var num2 = parseInt(document.getElementById('val2').value);
    var operator = document.getElementById('operator').value
    const pi = Math.PI;
    var area = 1;

    var category = document.getElementById('category').value;
    switch (category) {
        case 'Area with circumfrence':
            area = (Math.pow(num1, 2) / 4 * pi).toFixed(2)
            console.log(area)
            document.getElementById('output').innerHTML = area
            break;

        case 'Area with radius':
            area = (pi * num1 * 2).toFixed(2)
            document.getElementById('output').innerHTML = area
            break;

        case 'Area with diameter':
            area = 1 / 4 * pi * Math.pow(num1, 2).toFixed(2)
            document.getElementById('output').innerHTML = area
            break;

        case 'Area of rectangle':
            area = (num1 * num2).toFixed(2)
            document.getElementById('output').innerHTML = area
            break;

        case 'calculator':
            var result = 0
            switch (operator) {
                case '+':
                    result = num1 + num2
                    document.getElementById('output').innerHTML = result
                    break;
                case '-':

                    result = num1 - num2
                    document.getElementById('output').innerHTML = result
                    break;
                case '*':
                    result = num1 * num2
                    document.getElementById('output').innerHTML = result
                    break;
                case '/':
                    result = num1 / num2
                    document.getElementById('output').innerHTML = result
                    break;

                default:
                    result = num1 + num2
                    document.getElementById('output').innerHTML = result
                    break;
            }
            break;

        default:
            console.log('invalid selction')
            break;
    }

}










