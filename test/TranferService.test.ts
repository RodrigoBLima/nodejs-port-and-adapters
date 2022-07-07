import Account from "../src/Account";
import TransferService from "../src/TransferService";

test("Transfer between two accounts", function () {
  const from = new Account("958452");
  from.credit(150);

  const to = new Account("5478548");
  to.credit(0);

  const amount = 50;

  const transferService = new TransferService();
  transferService.transfer(from, to, amount);

  expect(from.getBalance()).toBe(100);
  expect(to.getBalance()).toBe(50);
});
