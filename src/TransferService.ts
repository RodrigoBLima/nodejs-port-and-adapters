import Account from "./Account";

export default class TransferService {
  constructor() {}

  transfer(from: Account, to: Account, amount: number) {
    from.debit(amount);
    to.credit(amount);
  }
}
