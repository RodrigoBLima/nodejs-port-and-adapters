import Account from "../src/Account";
import AccountGatwayDatabase from "../src/AccountGatewayDatabase";
import AccountGatewayMemory from "../src/AccountGatewayMemory";
import PostgresSQLAdapter from "../src/PostgresSQLAdapter";
import TransferUseCase from "../src/TransferUseCase";

test("Transfer between two accounts in memory", async function () {
  const accountGateway = new AccountGatewayMemory();

  const from = new Account("958452");
  from.credit(150);

  const to = new Account("5478548");
  to.credit(0);

  const amount = 50;

  await accountGateway.save(from);
  await accountGateway.save(to);

  const transferUseCase = new TransferUseCase(accountGateway);
  const input = {
    from: "958452",
    to: "5478548",
    amount,
  };
  await transferUseCase.execute(input);
  
  // assert
  console.log(accountGateway.accounts)

});

test("Transfer between two accounts in database", async function () {
  const connection = new PostgresSQLAdapter()

  const accountGateway = new AccountGatwayDatabase(connection);

  const from = new Account("958452");
  from.credit(150);

  const to = new Account("5478548");
  to.credit(0);

  const amount = 50;

  await accountGateway.save(from);
  await accountGateway.save(to);

  const transferUseCase = new TransferUseCase(accountGateway);
  const input = {
    from: "958452",
    to: "5478548",
    amount,
  };
  await transferUseCase.execute(input);
  
  // assert
});