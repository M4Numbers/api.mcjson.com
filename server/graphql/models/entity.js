var filters = require("../../filters.js");
const base = require("../base.js");

module.exports = {
  schema: {
    typeDefinitions: `
type Entity {
  # Mod this entity comes from
  mod: String

  # Id of this entity, combined with mod in format mod:id
  id(
    # Prefix with the mod field value in format mod:id
    prefixMod: Boolean = false
  ): String

  # English name of entity
  name: String

  # Version this entity first appeared in
  introduced_at: String

  # Last Version this entity was edited
  changed_at: String
}
`,
    query: `
    entities(mod: String, id: String): [Entity!]

`
  },
  resolvers: {
    Entity: base({}),
    Query: {
      entities({ entityDB }, { mod, id }) {
        return entityDB.data().filter(filters.filterBy({ mod, id }));
      }
    }
  }
}