export default class MyBlockTune {
    constructor({ api }) {
        this.api = api;
    }
    static get isTune() {
        return true;
    }

    render() {
        const button = document.createElement('button');

        button.classList.add(this.api.styles.button);
        button.textContent = 'H';

        return button;
    }
    wrap(blockContent) {
        const myWrapper = document.createElement('div');
    
        myWrapper.append(blockContent);
    
        myWrapper.style.fontSize = '0.9em';
    
        return myWrapper;
    }

}