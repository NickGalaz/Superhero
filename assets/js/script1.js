$(document).ready(function () {
    $("form").submit(function (event) {
        event.preventDefault();
        let valueInput = $("#heroInput").val();


        var numer = valueInput
        if (numer > 0) {
            alert("Héroe Encontrado");
        }
        else {
            alert("Debes ingresar un número")
        }


        $.ajax({
            url: "https://superheroapi.com/api/10224398063072253/" + valueInput,
            success: function (data) {
                let nombre = data.name
                let conexiones = data.connections['group-affiliation']
                let ocupacion = data.work.occupation
                let primer = data.biography['first-appearance']
                let altura = data.appearance.height
                let peso = data.appearance.weight
                let imagen = data.image.url
                let alianzas = data.biography.aliases
                let stats = data.powerstats

                $('#heroInfo').html(`
                <div class="container">
                <div class="py-5 px-4">
                
                <div class="card"><img src="${imagen}"></div>
                
                </div>
                <h2 class= "card-title">${nombre}</h3>
                <p class= "card-text"><h5>Conecciones: </h5>${conexiones}</p>
                <p class= "card-text"><h5>Ocupación: </h5>${ocupacion}</p>
                <p class= "card-text"><h5>Primera Aparición: </h5>${primer}</p>
                <p class= "card-text"><h5>Altura: </h5>${altura}</p>
                <p class= "card-text"><h5>Peso: </h5>${peso}</p>
                <p class= "card-text"><h5>Alianzas: </h5>${alianzas}</p>
                
                </div>`)

                let estadisticas = []


                for (let powerstats in stats) {
                    console.log(stats[powerstats]);
                    estadisticas.push({
                        label: powerstats,
                        y: stats[powerstats],
                    });
                    console.log(powerstats)

                    let config = {
                        animationEnabled: true,
                        title: {
                            text: "Estadisticas de Poder"
                        },
                        data: [{
                            type: "pie",
                            toolTipContent: "<b>{label}</b>: {y}",
                            showInLegend: "true",
                            legendText: "{label}",
                            indexLabelFontSize: 16,
                            indexLabel: "{label} - {y}",
                            dataPoints: estadisticas
                        },
                        ],
                    };

                    let chart = new CanvasJS.Chart("heroStats", config);
                    chart.render();
                }
            }
        })

    })
})

