const express = require('express');
const router = express.Router();
const mysqlConnection = require('../db');

router.get('/', (req, res) => {
  mysqlConnection.query('SELECT * FROM movie', (error, rows, filds) => {
    if(!error) {
      res.json(rows);
    } else {
      console.log(error);
    }
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  mysqlConnection.query(`SELECT * FROM movie WHERE id = ${id}`, (error, rows, filds) => {
    if(!error) {
      res.json(rows[0]);
    } else {
      console.log(error);
    }
  });
});

router.post('/', (req, res) => {
  const { id, title, cover, synopsis, trailer, id_category, premier, view, qualification } = req.body;
  const query = `
    CALL movieAddorEdit( ?, ?, ?, ?, ?, ?, ?, ?, ? );
  `;
  mysqlConnection.query(query, [ id, title, cover, synopsis, trailer, id_category, premier, view, qualification ],
    (error, rows, filds) => {
      if(!error) {
        res.json({ Status: 'movie saved' });
      } else {
        console.log(error);
      }
    });
});

router.put('/:id', (req, res) => {
  const { title, cover, synopsis, trailer, id_category, premier, view, qualification } = req.body;
  const { id } = req.params; 
  const query = `
    CALL movieAddorEdit( ?, ?, ?, ?, ?, ?, ?, ?, ? );
  `;
  mysqlConnection.query(query, [ id, title, cover, synopsis, trailer, id_category, premier, view, qualification ],
    (error, rows, filds) => {
      if(!error) {
        res.json({ Status: 'movie update' });
      } else {
        console.log(error);
      }
    });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  mysqlConnection.query(`DELETE FROM movie WHERE id = ${id}`, (error, rows, filds) => {
    if(!error) {
      res.json({ status: 'movie deleted' });
    } else {
      console.log(error);
    }
  });
});

module.exports = router;