db.produtos
  .find({ }, { _id: false, vendidos: 1, nome: 1 })
  .sort({ vendidos: -1 }).limit(1);
