const {faker} = require('@faker-js/faker')

const sampleProduct = {
    "title": "Medusa T-Shirt",
    "subtitle": "The perfect T-shirt for any occasion",
    "description": "Reimagine the feeling of a classic T-shirt. With our cotton T-shirts, everyday essentials no longer have to be ordinary.",
    "handle": "t-shirt",
    "is_giftcard": false,
    "weight": 400,
    "images": [
      "https://medusa-public-images.s3.eu-west-1.amazonaws.com/tee-black-front.png",
      "https://medusa-public-images.s3.eu-west-1.amazonaws.com/tee-black-back.png",
      "https://medusa-public-images.s3.eu-west-1.amazonaws.com/tee-white-front.png",
      "https://medusa-public-images.s3.eu-west-1.amazonaws.com/tee-white-back.png"
    ],
    "options": [
      {
        "title": "Size",
        "values": ["S", "M", "L", "XL"]
      },
      {
        "title": "Color",
        "values": ["Black", "White"]
      }
    ],
    "variants": [
      {
        "title": "S / Black",
        "prices": [
          {
            "currency_code": "eur",
            "amount": 1950
          },
          {
            "currency_code": "usd",
            "amount": 2200
          }
        ],
        "options": [
          {
            "value": "S"
          },
          {
            "value": "Black"
          }
        ],
        "inventory_quantity": 100,
        "manage_inventory": true
      },
      {
        "title": "S / White",
        "prices": [
          {
            "currency_code": "eur",
            "amount": 1950
          },
          {
            "currency_code": "usd",
            "amount": 2200
          }
        ],
        "options": [
          {
            "value": "S"
          },
          {
            "value": "White"
          }
        ],
        "inventory_quantity": 100,
        "manage_inventory": true
      },
      {
        "title": "M / Black",
        "prices": [
          {
            "currency_code": "eur",
            "amount": 1950
          },
          {
            "currency_code": "usd",
            "amount": 2200
          }
        ],
        "options": [
          {
            "value": "M"
          },
          {
            "value": "Black"
          }
        ],
        "inventory_quantity": 100,
        "manage_inventory": true
      },
      {
        "title": "M / White",
        "prices": [
          {
            "currency_code": "eur",
            "amount": 1950
          },
          {
            "currency_code": "usd",
            "amount": 2200
          }
        ],
        "options": [
          {
            "value": "M"
          },
          {
            "value": "White"
          }
        ],
        "inventory_quantity": 100,
        "manage_inventory": true
      },
      {
        "title": "L / Black",
        "prices": [
          {
            "currency_code": "eur",
            "amount": 1950
          },
          {
            "currency_code": "usd",
            "amount": 2200
          }
        ],
        "options": [
          {
            "value": "L"
          },
          {
            "value": "Black"
          }
        ],
        "inventory_quantity": 100,
        "manage_inventory": true
      },
      {
        "title": "L / White",
        "prices": [
          {
            "currency_code": "eur",
            "amount": 1950
          },
          {
            "currency_code": "usd",
            "amount": 2200
          }
        ],
        "options": [
          {
            "value": "L"
          },
          {
            "value": "White"
          }
        ],
        "inventory_quantity": 100,
        "manage_inventory": true
      },
      {
        "title": "XL / Black",
        "prices": [
          {
            "currency_code": "eur",
            "amount": 1950
          },
          {
            "currency_code": "usd",
            "amount": 2200
          }
        ],
        "options": [
          {
            "value": "XL"
          },
          {
            "value": "Black"
          }
        ],
        "inventory_quantity": 100,
        "manage_inventory": true
      },
      {
        "title": "XL / White",
        "prices": [
          {
            "currency_code": "eur",
            "amount": 1950
          },
          {
            "currency_code": "usd",
            "amount": 2200
          }
        ],
        "options": [
          {
            "value": "XL"
          },
          {
            "value": "White"
          }
        ],
        "inventory_quantity": 100,
        "manage_inventory": true
      }
    ]
  }

const results = []

const sampleVariants = [
    {
        title: faker.color.human(),
        prices: [
            {
                currency_code: "eur",
                amount: 1950
            },
            {
                currency_code: "usd",
                amount: 2200
            },
        ],
        options: [
            {
                value: "S"
            },
            {
                value: "Black"
            },
        ],
        inventory_quantity: faker.random.numeric(3),
        manage_inventory: faker.datatype.boolean(),
    },
]

// create an object like sampleProduct with fakerjs
for (let i = 0; i < 2; i++) {
    let product = {
        title: faker.commerce.productName(),
        subtitle: faker.commerce.productDescription(),
        description: faker.commerce.productDescription(),
        handle: faker.commerce.productName(),
        is_giftcard: false,
        weight: 400,
        images: [
            faker.image.imageUrl(),
            faker.image.imageUrl(),
            faker.image.imageUrl(),
            faker.image.imageUrl()
        ],
        options: [
            {
                title: "Size",
                values: ["S", "M", "L", "XL"]
            },
            {
                title: "Color",
                values: ["Black", "White"],
            },
        ],
        variants: []
    }

    const randomVariantNumbers = faker.random.numeric({ min: 1, max: 6 })

    for (let i = 0; i < randomVariantNumbers; i++) {
        const data = {
            title: faker.helpers.regexpStyleStringParse('#{3}test[1-5]'),
            prices: [
                {
                    currency_code: "eur",
                    amount: 1950
                },
                {
                    currency_code: "usd",
                    amount: 2200
                },
            ],
            options: [
                {
                    value: "S"
                },
                {
                    value: "Black"
                },
            ],
            inventory_quantity: faker.random.numeric(3),
            manage_inventory: faker.datatype.boolean(),
        }
        product.variants.push(data)
    }
    results.push(product)
}
console.table(results[0].variants)