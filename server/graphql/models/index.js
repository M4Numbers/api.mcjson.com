const id = (_,{prefixMod}) => {
        return (prefixMod ? _.mod + ":":"") + _.id;
    }

let root = {
    Query: require("./Query.js"),
    Item: {
        id,
        meta: (_) => _.meta || [],
    },
    Entity: { id },
    Enchantment: { id },
    StatusEffect: { id },
}

if(process.env.NODE_ENV != 'production'){
    root.Mutation =  require("./Mutation.js");
}

module.exports = root;