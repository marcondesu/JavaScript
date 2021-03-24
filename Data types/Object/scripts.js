/*
    Object
        properties // attributes
        funcionalities // methods

    typeof objectName = {
        property: value
    }
*/

console.log(`empty object: ${{
    //empty object
}}`)

console.log({
    name: "Zuc",
    age: 17,
    walk: function() {
        console.log("walk")
    }
})

const properties = {
    height: 1.90,
    width: 0.68,
    bold: false,
    visible: true
}

console.log(properties)
console.log(properties.visible)