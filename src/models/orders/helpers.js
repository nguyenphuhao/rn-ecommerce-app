/* eslint-disable camelcase */
export const mapOrderList = (order) => {
  const { order_id, date_added } = order;
  return {
    id: order_id,
    ...order,
    createdDate: date_added,
  };
};
