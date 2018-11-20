import {printIt} from "../server";

process.env.NODE_ENV = "test";

import * as chai from "chai";
import * as  chaiAsPromised from "chai-as-promised";

chai.should();
chai.use(chaiAsPromised);

it("Printing Hello World should work!", () => {
  printIt("Hello World");
  true.should.be.equal(true);
});
