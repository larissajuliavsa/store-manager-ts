import { expect } from "chai"
import { describe, it } from "mocha"
import connectToDatabase from "../../models/connection"

describe("Conexão com o banco de dados", () => {
  it("Deve conectar ao banco de dados sem erros", async () => {
    try {
      const connection = await connectToDatabase()
      expect(connection).to.exist
    } catch (error) {
      expect.fail("Erro ao conectar ao banco de dados")
    }
  })
})
