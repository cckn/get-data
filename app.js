// const express = require('express');
const path = require('path');
const morgan = require('morgan');
const { sequelize } = require('./models');
require('dotenv').config();

const champData = require('./public/data/ko_KR/champion.json').data;

const champ = []

sequelize.sync()


setTimeout(async ()=>{
  for (const key in champData) {
    if (champData.hasOwnProperty(key)) {
      const champ = champData[key];
      console.log(
        `key : ${champ.key}   id : ${champ.id}   kr_name : ${champ.name}  `
      );
      
    }
  }
},1000)


