import Account from "../src/Account";

test("Create new account", function () {
  const account = new Account("958452");
  expect(account.getBalance()).toBe(0);
});

test("Credit a account", function () {
  const account = new Account("958452");
  account.credit(150);
  expect(account.getBalance()).toBe(150);
});

test("Debit a account", function () {
  const account = new Account("958452");
  account.credit(150);
  account.debit(50);
  expect(account.getBalance()).toBe(100);
});
