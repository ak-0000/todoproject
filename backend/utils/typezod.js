const zod = require("zod");

// for 1st post req
/*
{
title : string 
description : string
}
*/

const createTodo = zod.object({
  title: zod.string().min(1),
  description: zod.string().min(1),
});

// for updatetodo

const updateTodo = zod.object({
  id: zod.string(),
});

module.exports = { createTodo, updateTodo };
