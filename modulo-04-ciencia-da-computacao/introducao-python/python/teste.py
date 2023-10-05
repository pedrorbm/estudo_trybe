def test(x):
    return x


lista = [1, 2, 3]
# print(test(2))
# print(lista)


def quadrado(n):
    '''Recebe um número n, retorna o quadrado de n'''
    return n**2


# print(quadrado(2))

# pergunta = input("Qual sua idade? ")

# print(f"Sua idade é: {pergunta} anos")

a, b, c = "abf"

# print(a, end=" ")
# print(a, c)

# Os arrays têm sempre o mesmo tamanho


def multiply_arrays(array1, array2):
    result = []
    for number1 in array1:
        print(f"Array1 - {number1}")
        for number2 in array2:
            print(f"Array2 - {number2}")
            result.append(number1 + number2)

    return result


array = [1, 2, 3]
print(multiply_arrays(array, array))
