export default class Calculadora{
    constructor(calculos){
        this.calculos = calculos
    }

    velMed(space, time) {
        if(time == 0) {
            alert("Não é possível dividir por 0!")
        }
        else{
            let vm = space / time;
            this.calculos.innerHTML = `<p>Vm = ${space}/${time} <br> Vm = ${vm} m/s`;
        }
    }

    acelMed(vel, time) {
        if(time == 0) {
            alert("Não é possível dividir por 0!")
        }
        else{
            let a = vel / time;
            this.calculos.innerHTML = `<p>Am = ${vel}/${time} <br> Am = ${a} m/s²`;
        }
    }
    
    horariaVel(Vo, a, t){
        let v = Vo + a * t
        this.calculos.innerHTML = `<p>V = ${Vo} + ${a} * ${t} <br> V = ${Vo} + ${a * t} <br> V = ${v} m/s</p>`
    }
    
    torriceli(Vi, a, S) {
        let v = Math.sqrt((Vi**2 + 2 * a * S))
        this.calculos.innerHTML = `<p>V² = ${Vi}² + 2 * ${a} * ${S} 
        <br> V² = ${Vi ** 2} + ${2 * a * S} <br> V² = ${Vi**2 + 2 * a * S} <br> V = ${v.toFixed(2)} m/s</p>`
    }
    
    horariaMRU(So, V, T){
        let s = So + V * T 
        this.calculos.innerHTML = `<p>V = ${So} + ${V} * ${T} <br> V = ${So} + ${V * T} <br> V = ${s}m</p>`
    }
    
    horariaMRUV(So, Vo, a, T) {
        let P1= So + Vo * T;
        let P2= (a * T**2) / 2;
        let F=P1+P2;
        this.calculos.innerHTML = `<p>S = (${So} + ${Vo} * ${T}) + (${a} * ${T}² / 2) <br> S = ${P1} + ${P2} 
        <br> S = ${F}m</p>`
    } 

}