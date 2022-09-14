db.produtos
    .find(
    { ingredientes: { $elemMatch: { $eq: "picles" } } },
    { _id: false, nome: 1, ingredientes: 1, valoresNutricionais: { $slice: 3 } });
