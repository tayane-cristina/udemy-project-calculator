const createCalculator = () => {
    return{
        display: document.querySelector('.display'),

        iniciar() {
            this.getButtons()
            this.btnResult()
        },

        getButtons() {
            document.addEventListener('click', ({target}) => {
                const el = target;
                if (el.classList.contains('card-num')){
                    this.btnToDisplay(el.innerText)
                }

                if (el.classList.contains('clean-all')){
                    this.btnClearDisplay()
                }  
                
                if (el.classList.contains('del')){
                    this.btnDeletOne()
                }

                if (el.classList.contains('result')){
                    this.btnMakeAccount()
                }
            })
        },

        btnToDisplay(valor) {
            this.display.value += valor
        },

        btnClearDisplay() {
            this.display.value = ''
        },

        btnDeletOne() {
            this.display.value = this.display.value.slice(0 , -1)
        },

        btnMakeAccount() {
            let conta = this.display.value;

            try{
                conta = eval(conta)

                if (!conta){
                    alert('Conta inválida');
                    return;
                }
                this.display.value = String(conta)
            } catch(e) {
                alert('Conta Inválida')
            }
        },

        btnResult() {
            this.display.addEventListener('keyup', (e) => {
                if (e.keyCode === 13){
                    this.btnMakeAccount()
                } else if (!(e.target === 'display')){
                }
            })
        }
    }
} 

const calculator = createCalculator();
calculator.iniciar();


