const express = require('express');
const router = express.Router();
const productController = require('../controllers/product');
const manufacturerController = require('../controllers/manufacturer');

// GET /manufacturers 获取所以的制造商（manufacturers）
// GET /manufacturers/:id 获取单个制造商，这里 :id 代表动态路由，用于匹配任意字符串：/manufacturers/<any-string>。
// POST /manufacturers 用户创建单个制造商
// PUT /manufacturers/:id 用于修改单个制造商
// DELETE /manufacturers/:id 用于删除单个制造商
router.get('/manufacturers', manufacturerController.all);
router.get('/manufacturers/:id', manufacturerController.byId);
router.post('/manufacturers', manufacturerController.create);
router.put('/manufacturers/:id', manufacturerController.update);
router.delete('/manufacturers/:id', manufacturerController.remove);

// GET /products 获取所以的产商品（products）
// GET /products/:id 获取单个商品，这里 :id 代表动态路由，用于匹配任意字符串：/products/<any-string>。
// POST /products 用户创建单个商品
// PUT /products/:id 用于修改单个商品
// DELETE /products/:id 用于删除单个商品
router.get('/products', productController.all);
router.get('/products/:id', productController.byId);
router.post('/products', productController.create);
router.put('/products/:id', productController.update);
router.delete('/products/:id', productController.remove);

module.exports = router;