process.env.NODE_ENV = "test";

import * as chai from "chai";
import * as  chaiAsPromised from "chai-as-promised";

chai.should();
chai.use(chaiAsPromised);

it("Saying Hello World should work!", () => {
  console.log("Hello World")
  true.should.be.equal(true);
});
