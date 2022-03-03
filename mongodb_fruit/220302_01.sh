# mongosh tutorial from webdev course

mongosh

help


show dbs

# test> show dbs
# admin     41 kB
# config  12.3 kB
# local     41 kB


use shopDB

db
# shopDB> db
# shopDB

db.products.insertOne({_id:1, name: "Pen", price: 1.20})

show collections
# shopDB> show collections
# products

db.products.insertOne({_id:2, name: "Pencil", price: 0.80})


db.products.find()
# shopDB> db.products.find()
# [
#   { _id: 1, name: 'Pen', price: 1.2 },
#   { _id: 2, name: 'Pencil', price: 0.8 }
# ]

db.products.find({
    name: "Pencil"
})

# shopDB> db.products.find({
# ...     name: "Pencil"
# ... })
# [ { _id: 2, name: 'Pencil', price: 0.8 } ]

db.products.find({
    price: {$gt: 1}
})

# shopDB> db.products.find({
# ...     price: {$gt: 1}
# ... })
# [ { _id: 1, name: 'Pen', price: 1.2 } ]

db.products.find(
    {
        id: 1
    },
    {
        name:true
    }
)
# shopDB> db.products.find({
# ...     _id: 1
# ... },
# ... {
# .....     name:true
# ..... }
# ... )
# [ { _id: 1, name: 'Pen' } ]


# update operations

db.products.updateOne({_id:1}, {$set:{stock: 32}})
# {
#   acknowledged: true,
#   insertedId: null,
#   matchedCount: 1,
#   modifiedCount: 1,
#   upsertedCount: 0
# }


db.products.updateOne({_id:2}, {$set:{stock: 12}})
# {
#   acknowledged: true,
#   insertedId: null,
#   matchedCount: 1,
#   modifiedCount: 1,
#   upsertedCount: 0
# }

db.products.find()
# [
#   { _id: 1, name: 'Pen', price: 1.2, stock: 32 },
#   { _id: 2, name: 'Pencil', price: 0.8, stock: 12 }
# ]


# delete operations

db.products.deleteOne({_id: 2})
# { acknowledged: true, deletedCount: 1 }

db.products.find()
# [ { _id: 1, name: 'Pen', price: 1.2, stock: 32 } ]


# relationships

db.products.insertOne({
    _id: 3,
    name: "Rubber",
    stock: 43,
    reviews: [
        {
            authorName: "Sally",
            rating: 5,
            review: "Best rubber ever!"
        },
        {
            authorName: "John",
            rating: 5,
            review: "Awesome rubber!"
        }        
    ]
})


db.products.insertOne(
    {
        _id:2, 
        name: "Pencil", 
        price: 0.80,
        stock: 12,
        reviews: [
            {
                authorName: "Sally",
                rating: 5,
                review: "Best pencil ever!"
            },
            {
                authorName: "John",
                rating: 5,
                review: "Awesome pencil!"
            }        
        ]        
    }
)



















