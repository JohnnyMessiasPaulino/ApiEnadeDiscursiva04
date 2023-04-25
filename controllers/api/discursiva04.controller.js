var express = require('express');
var router = express.Router();

// routes
router.get('/recursiva', recursiva);
router.get('/iterativa', iterativa);

module.exports = router;

function iterativa(req, res) {
   var m = parseInt(req.query.m);
   var n = parseInt(req.query.n);
   let resultado = 1;
   let i = m;
   if ((m <= n)&& (m>0)) {

      while (i<=n){
         resultado *= (i + (1/i));
         i++;
      }
      var retorno = resultado;
      res.send(
         {
            tipo: "iterativa",
            resultado: retorno
         }
      );
   }
   else
      res.status(500).send('Dados inválidos - Valor de (m) deve ser menor que o de (n) e maior que zero');
}

function produtorioRecursivo(m, n) {
   let i = m;
   let ultimaRecursao = false;

   if(m<n)
      return (m + (1/m)) * produtorioRecursivo(m+1, n);
   else
      ultimaRecursao = true;

   if (ultimaRecursao)
      return (n + (1/n));
}

function recursiva(req, res) {
   var m = parseInt(req.query.m);
   var n = parseInt(req.query.n);
   let resultado = 1;
   if ((m <= n)&& (m>0)) {
      var retorno = produtorioRecursivo(m, n);
      res.send(
         {
            tipo: "recursiva",
            resultado: retorno
         }
      );
   }
   else
      res.status(500).send('Dados inválidos - Valor de (m) deve ser menor que o de (n) e maior que zero');
}
