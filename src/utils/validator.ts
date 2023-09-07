import { body } from 'express-validator';

const userValidationRules = () => {
  return [
    body('username').notEmpty().withMessage('Username is required'),
    body('email').isEmail().withMessage('Email is not valid'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
  ];
};

const productValidationRules = () => {
  return [
    body('name').notEmpty().withMessage('Product name is required'),
    body('description').notEmpty().withMessage('Description is required'),
    body('price').isNumeric().withMessage('Price must be a number')
  ];
};

const orderValidationRules = () => {
  return [
    body('products').isArray({ min: 1 }).withMessage('At least one product is required'),
    body('totalAmount').isNumeric().withMessage('Total amount must be a number')
  ];
};

const notificationValidationRules = () => {
  return [
    body('message').notEmpty().withMessage('Message is required')
  ];
};

export {
  userValidationRules,
  productValidationRules,
  orderValidationRules,
  notificationValidationRules
};
