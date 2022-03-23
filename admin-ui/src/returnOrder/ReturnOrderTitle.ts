import { ReturnOrder as TReturnOrder } from "../api/returnOrder/ReturnOrder";

export const RETURNORDER_TITLE_FIELD = "orderId";

export const ReturnOrderTitle = (record: TReturnOrder): string => {
  return record.orderId || record.id;
};
