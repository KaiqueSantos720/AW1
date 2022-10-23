let par = document.querySelectorAll(".p")
let title = document.querySelector(".title")
let i = [true, 0]

const validation = () => {
    if((par[0].textContent === par[4].textContent && par[4].textContent === par[8].textContent) || (par[2].textContent === par[4].textContent && par[4].textContent === par[6].textContent)){
        title.textContent = "Fim de Jogo"
        setTimeout(() => {
            document.location.reload(true)
        }, 2000);
        return
    }

    if((par[0].textContent === par[3].textContent && par[3].textContent === par[6].textContent) || (par[1].textContent === par[4].textContent && par[4].textContent === par[7].textContent) || (par[2].textContent === par[5].textContent && par[5].textContent === par[8].textContent) ){
        title.textContent = "Fim de Jogo"
        setTimeout(() => {
            document.location.reload(true)
        }, 2000);
        return
    }

    if((par[0].textContent === par[1].textContent && par[1].textContent === par[2].textContent) || (par[3].textContent === par[4].textContent && par[4].textContent === par[5].textContent) || (par[6].textContent === par[7].textContent && par[7].textContent === par[8].textContent)){
        title.textContent = "Fim de Jogo"
        setTimeout(() => {
            document.location.reload(true)
        }, 2000);
        return
    }

    if(i[1] === 9){
        title.textContent = "Velha"
        setTimeout(() => {
            document.location.reload(true)
        }, 2000)
        return
    }
}

par.forEach(p => {
    p.addEventListener("click", () => {
        if(i[0]){
            p.textContent = "X";
            i[0] = false
        }
        else{
            p.textContent = "O"
            i[0] = true
        }
        i[1]++
        validation()
    }, {once: true})
})
