function toSnakeCase(variableName) {
    return variableName.replace(/([A-Z])/g, (name) => name = `_${name.toLowerCase()}`)
}

console.log(toSnakeCase("my_variable_name"));