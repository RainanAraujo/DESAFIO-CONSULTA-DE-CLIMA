const campoCidade  = document.getElementById("campo-cidade")
const botaoConsultar = document.getElementById("botao-consultar")

botaoConsultar.addEventListener("click", async ()=>{
   clima = await buscarClima(campoCidade.value)
    console.log(clima);
})

