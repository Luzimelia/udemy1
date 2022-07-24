let comparaComThis = functio (param) {
    console.log(this == param)
    }
    
    comparaComThis(global)
    
    const obj = {}
    comparaComThis = comparaComThis.bind(obj)
    comparaComThis(global)
    comparaComThis(obj)
    
    let comparaComThisArrow = para => console.log(this == param)
    comparamComThisArrow(global)
    comparaComThisArrow(module.exports)
    
    comparaComThisArrow = comparaComThisArrow.bind(obj)
    comparaComThisArrow(obj)
    comparacomThisArrow(module.exports)

