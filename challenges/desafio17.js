db.createCollection("resumoProdutos", { capped: true, size: 5242880, max: 5000 });
db.resumoProdutos
  .insertOne({ franquia: "McDonalds", totalProdutos: db.produtos.countDocuments({}) });
db.resumoProdutos
  .find({},
  { _id: false, franquia: 1, totalProdutos: 1 });