const router = require('express').Router();
const userController = require('../Controllers/userController');
const path = require('path');
const upload = require('../app');
const multer = require('multer');
router.post('/registration', userController.register);
router.post('/login', userController.login);
router.get('/leaders', userController.displayLeaderboard);

router.get('/oops/classobj', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'Tasks', 'oops', 'classobject.json'));
});

router.get('/oops/inheritance', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'Tasks', 'oops', 'inheritance.json'));
});


router.get('/oops/classobj/coding', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'Tasks', 'oops', 'codingtask.json'));
});


router.get('/oops/encapsulation', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'Tasks', 'oops', 'encapsulation.json'));
});

router.get('/oops/abstraction', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'Tasks', 'oops', 'abstraction.json'));
});

router.get('/oops/cpolymorphism', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'Tasks', 'oops', 'cpolymorphism.json'));
});

router.get('/oops/rpolymorphism', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'Tasks', 'oops', 'rpolymorphism.json'));
});

//Java

router.get('/java/encapsulation', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'Tasks', 'java', 'encapsulation.json'));
});

router.get('/java/object1', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'Tasks', 'java', 'object1.json'));
});

router.get('/java/inheritance', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'Tasks', 'java', 'inheritance.json'));
});

router.get('/java/controlstatements', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'Tasks', 'java', 'controlstatements.json'));
});

router.get('/java/ctpolymorphism', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'Tasks', 'java', 'ctpolymorphism.json'));
});

router.get('/java/rtpolymorphism', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'Tasks', 'java', 'rtpolymorphism.json'));
});

//computer networking

router.get('/cn/ipaddressing1', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'Tasks', 'cn', 'ipaddressing.json'));
});

router.get('/cn/networktopology1', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'Tasks', 'cn', 'networktopology.json'));
});

router.get('/cn/osimodel1', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'Tasks', 'cn', 'osimodel.json'));
});

router.get('/cn/protocols1', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'Tasks', 'cn', 'protocols.json'));
});

router.get('/cn/routing1', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'Tasks', 'cn', 'routing.json'));
});

router.get('/cn/tcpip1', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'Tasks', 'cn', 'tcpip.json'));
});

//OS

router.get('/os/deadlock1', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'Tasks', 'os', 'deadlock.json'));
});

router.get('/os/filemanagement1', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'Tasks', 'os', 'filemanagement.json'));
});

router.get('/os/memorymanagement1', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'Tasks', 'os', 'memorymanagement.json'));
});

router.get('/os/misc1', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'Tasks', 'os', 'misc.json'));
});

router.get('/os/operatingsystem1', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'Tasks', 'os', 'operatingsystem.json'));
});

router.get('/os/processmanagement1', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'Tasks', 'os', 'processmanagement.json'));
});

router.get('/os/synch1', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'Tasks', 'os', 'synch.json'));
});

//SQL

router.get('/SQL/AF1', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'Tasks', 'SQL', 'AF.json'));
});

router.get('/SQL/Clauses1', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'Tasks', 'SQL', 'Clauses.json'));
});

router.get('/SQL/createdb1', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'Tasks', 'SQL', 'createdb.json'));
});

router.get('/SQL/dataconstraints1', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'Tasks', 'SQL', 'dataconstraints.json'));
});

router.get('/SQL/functions1', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'Tasks', 'SQL', 'functions.json'));
});

router.get('/SQL/indexes1', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'Tasks', 'SQL', 'indexes.json'));
});

router.get('/SQL/joiningdata1', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'Tasks', 'SQL', 'joiningdata.json'));
});

router.get('/SQL/operators1', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'Tasks', 'SQL', 'operators.json'));
});

router.get('/SQL/queries1', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'Tasks', 'SQL', 'queries.json'));
});

router.get('/SQL/tables1', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'Tasks', 'SQL', 'tables.json'));
});

router.get('/SQL/views1', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'Tasks', 'SQL', 'views.json'));
});

//DSA

router.get('/DSA/array1', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'Tasks', 'DSA', 'array.json'));
});

router.get('/DSA/graph1', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'Tasks', 'DSA', 'graph.json'));
});


router.get('/DSA/hashing1', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'Tasks', 'DSA', 'hashing.json'));
});

router.get('/DSA/heap1', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'Tasks', 'DSA', 'heap.json'));
});

router.get('/DSA/linkedlist1', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'Tasks', 'DSA', 'linkedlist.json'));
});

router.get('/DSA/matrix1', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'Tasks', 'DSA', 'matrix.json'));
});

router.get('/DSA/queue1', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'Tasks', 'DSA', 'queue1.json'));
});

router.get('/DSA/stack1', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'Tasks', 'DSA', 'stack1.json'));
});

router.get('/DSA/string1', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'Tasks', 'DSA', 'string1.json'));
});

router.get('/DSA/tree1', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'Tasks', 'DSA', 'tree1.json'));
});

//Questions

router.get('/oops/speech', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'Tasks', 'oops', 'speech.json'));
});

router.get('/answer', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'Tasks', 'answer.json'));
});

//java


module.exports = router;