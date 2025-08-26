import { somar, subtrair, multiplicar } from "../src/calculadora.js"

describe('Calculadora', () => {
    test('Deve somar dois numeros corretamente', () => {
        //AAA

        //Arrange (Preparar)
        const a = 5
        const b = 7

        //Act (Executar)
        const resultado = somar(a, b)
        //Assert (Verificar)
        expect(resultado).toBe(12)
    })
    test('deve subtrair dois numeros corretamente ', () => {
      const a = 15
      const b = 7

      const resultado = subtrair(a, b)

      expect(resultado).toBe(8)
    })
    test('deve multiplicar dois numeros corretamente ', () => {
      const a = 3
      const b = 3

      const resultado = multiplicar(a, b)

      expect(resultado).toBe(9)
    })
    
})



