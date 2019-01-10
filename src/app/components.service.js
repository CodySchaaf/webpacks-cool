import WebpackImage from "../assets/webpack.svg";

export class ComponentService {
    constructor() {
        this.imageBox = document.getElementById('image');
        this.numberOneInput = document.getElementById('numberOne');
        this.numberTwoInput = document.getElementById('numberTwo');
        this.addValuesButton = document.getElementById('addValues');
        this.resultDiv = document.getElementById('result');


        const myImage = new Image();
        myImage.src = WebpackImage;

        this.imageBox.appendChild(myImage);
    }

    getInputs() {
        return [this.numberOneInput.value, this.numberTwoInput.value];
    }

    setResult(str) {
        this.resultDiv.innerText = str;
    }

    onClick(cb) {
        this.addValuesButton.addEventListener('click', cb);
    }
}
