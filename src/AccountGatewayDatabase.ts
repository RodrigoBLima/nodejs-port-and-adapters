import Account from "./Account";
import AccountGateway from "./AccountGateway";

import Connection from "./Connection";

export default class AccountGatwayDatabase implements AccountGateway {
  constructor(readonly connection: Connection) {}

  async get(id: string): Promise<Account> {
    const [accountData] = await this.connection.query(
      "select * from example.account where id = $1",
      [id]
    );

    const account = new Account(accountData.id);
    account.balance = accountData.balance;

    return account;
  }

  async save(account: Account): Promise<void> {
    await this.connection.query(
      "insert into example.account (id, balance) values ($1, $2)",
      [account.id, account.balance]
    );
  }

  async update(account: Account): Promise<void> {
    await this.connection.query(
      "update example.account set balance = $1 where id = $2",
      [account.balance, account.id]
    );
  }
}
