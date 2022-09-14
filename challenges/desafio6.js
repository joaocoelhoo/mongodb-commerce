db.produtos
  .find({ 
    $and: [{ curtidas: { $gt: 10 } }, { curtidas: { $lt: 100 } }] }, 
    { _id: false, nome: 1, curtidas: 1 });
