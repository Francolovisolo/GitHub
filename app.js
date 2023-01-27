let estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false},
]

function filtrarAprobadosDesaprobados(alumnos){
    let aprobados = []
    let desaprobados = []
    for (let alumno of alumnos) {
        if (alumno.aprobado) {
            aprobados.push(alumno)
        } else {
            desaprobados.push(alumno)
        }
    }
    return [aprobados, desaprobados]
}

