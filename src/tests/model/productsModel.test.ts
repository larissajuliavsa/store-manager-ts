import { Connection } from "mysql2/promise"
import { expect } from "chai"
import sinon, { SinonStub } from "sinon"
import { RowDataPacket } from "mysql2/promise"
import { describe, before, after, it } from "mocha"
import connectToDatabase from "../../models/connection"
import * as productsModel from "../../models/products.model"

describe("Model getAllProducts sem produtos", () => {
  let connection: Connection | null
  let executeStub: SinonStub

  before(async () => {
    connection = await connectToDatabase()
    executeStub = sinon
      .stub(connection, "execute")
      .resolves([
        [{ id: 1, name: "Product 1", quantity: 20 }] as RowDataPacket[],
        [],
      ])
  })

  after(() => {
    if (executeStub) {
      executeStub.restore()
    }
  })

  it("getAllProducts não retorna um array vazio", async () => {
    const response = await productsModel.getAllProducts()
    expect(response).to.be.an("array")
    expect(response).to.be.not.empty
  })

  it("getAllProducts retorna array com produto", async () => {
    const response = await productsModel.getAllProducts()
    expect(response).to.be.an("array").that.is.not.empty
    expect(response[0]).to.deep.equal({
      id: 1,
      name: "Product 1",
      quantity: 20,
    })
  })
})
