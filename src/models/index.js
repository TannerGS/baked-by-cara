// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { MailingList, Product, Order, Customer } = initSchema(schema);

export {
  MailingList,
  Product,
  Order,
  Customer
};