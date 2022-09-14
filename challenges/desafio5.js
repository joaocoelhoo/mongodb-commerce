db.produtos
.find({
  $or: [{
    vendidos: { $eq: 85 } }, { curtidas: 36 }] }, 
    { _id: false, vendidos: 1, nome: 1, curtidas: 1 });