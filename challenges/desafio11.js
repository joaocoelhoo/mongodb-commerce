db.produtos
  .find({ nome: { $nin: ["Big Mac", "McChicken"] } },
  { _id: false, nome: 1, curtidas: 1, vendidos: 1 });