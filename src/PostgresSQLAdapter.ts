import Connection from "./Connection";
import pgp from "pg-promise";

export default class PostgresSQLAdapter implements Connection {
  pgp: any;

  constructor() {
    this.pgp = pgp()("URL_HERE");
  }

  async query(statement: string, params: any): Promise<any> {
    return this.pgp(statement, params);
  }

  async close(): Promise<any> {
    return this.pgp.$pool.end();
  }
}
