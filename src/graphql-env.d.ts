/* eslint-disable */
/* prettier-ignore */

/** An IntrospectionQuery representation of your schema.
 *
 * @remarks
 * This is an introspection of your schema saved as a file by GraphQLSP.
 * It will automatically be used by `gql.tada` to infer the types of your GraphQL documents.
 * If you need to reuse this data or update your `scalars`, update `tadaOutputLocation` to
 * instead save to a .ts instead of a .d.ts file.
 */
export type introspection = {
  "__schema": {
    "queryType": {
      "name": "Query"
    },
    "mutationType": null,
    "subscriptionType": null,
    "types": [
      {
        "kind": "OBJECT",
        "name": "Attack",
        "fields": [
          {
            "name": "damage",
            "type": {
              "kind": "SCALAR",
              "name": "Int"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "type",
            "type": {
              "kind": "ENUM",
              "name": "PokemonType"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "AttacksConnection",
        "fields": [
          {
            "name": "fast",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "Attack"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "special",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "Attack"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "SCALAR",
        "name": "Boolean"
      },
      {
        "kind": "OBJECT",
        "name": "EvolutionRequirement",
        "fields": [
          {
            "name": "amount",
            "type": {
              "kind": "SCALAR",
              "name": "Int"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "SCALAR",
        "name": "Float"
      },
      {
        "kind": "SCALAR",
        "name": "ID"
      },
      {
        "kind": "SCALAR",
        "name": "Int"
      },
      {
        "kind": "OBJECT",
        "name": "Pokemon",
        "fields": [
          {
            "name": "attacks",
            "type": {
              "kind": "OBJECT",
              "name": "AttacksConnection"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "classification",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": true
          },
          {
            "name": "evolutionRequirements",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "EvolutionRequirement"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "evolutions",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "Pokemon"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "fleeRate",
            "type": {
              "kind": "SCALAR",
              "name": "Float"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "height",
            "type": {
              "kind": "OBJECT",
              "name": "PokemonDimension"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "maxCP",
            "type": {
              "kind": "SCALAR",
              "name": "Int"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "maxHP",
            "type": {
              "kind": "SCALAR",
              "name": "Int"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "resistant",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "ENUM",
                "name": "PokemonType"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "types",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "ENUM",
                "name": "PokemonType"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "weaknesses",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "ENUM",
                "name": "PokemonType"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "weight",
            "type": {
              "kind": "OBJECT",
              "name": "PokemonDimension"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "PokemonDimension",
        "fields": [
          {
            "name": "maximum",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "minimum",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "PokemonType",
        "enumValues": [
          {
            "name": "Bug",
            "isDeprecated": false
          },
          {
            "name": "Dark",
            "isDeprecated": false
          },
          {
            "name": "Dragon",
            "isDeprecated": false
          },
          {
            "name": "Electric",
            "isDeprecated": false
          },
          {
            "name": "Fairy",
            "isDeprecated": false
          },
          {
            "name": "Fighting",
            "isDeprecated": false
          },
          {
            "name": "Fire",
            "isDeprecated": false
          },
          {
            "name": "Flying",
            "isDeprecated": false
          },
          {
            "name": "Ghost",
            "isDeprecated": false
          },
          {
            "name": "Grass",
            "isDeprecated": false
          },
          {
            "name": "Ground",
            "isDeprecated": false
          },
          {
            "name": "Ice",
            "isDeprecated": false
          },
          {
            "name": "Normal",
            "isDeprecated": false
          },
          {
            "name": "Poison",
            "isDeprecated": false
          },
          {
            "name": "Psychic",
            "isDeprecated": false
          },
          {
            "name": "Rock",
            "isDeprecated": false
          },
          {
            "name": "Steel",
            "isDeprecated": false
          },
          {
            "name": "Water",
            "isDeprecated": false
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "Query",
        "fields": [
          {
            "name": "pokemon",
            "type": {
              "kind": "OBJECT",
              "name": "Pokemon"
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "pokemons",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "Pokemon"
              }
            },
            "args": [
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              }
            ],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "SCALAR",
        "name": "String"
      }
    ],
    "directives": []
  }
};

import * as gqlTada from 'gql.tada';

declare module 'gql.tada' {
  interface setupSchema {
    introspection: introspection
  }
}