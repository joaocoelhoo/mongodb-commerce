db.produtos.updateMany(
    { nome: { $ne: "McChicken" } },
    {
      $addToSet: { ingredientes: "ketchup" },
    },
 );
 db.produtos.find({ }, { _id: false, nome: 1, ingredientes: 1 });