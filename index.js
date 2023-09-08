var valorLeite = 0.70
var valorChá = 0.65
var valorCafé = 0.50
var bebida = 'Chá'

switch (bebida) {
    case 'Café':
        console.log('O valor do Café é de: $' + valorCafé);
        break;
    case 'Leite':
        console.log('O valor do Leite é de: $' + valorLeite)
        break;
    case 'Chá':
        console.log('O valor do Chá é de: $' + valorChá)       
        break; 
    default:
        console.log('A escolha deve ser feita entre café, leite ou chá.')
}
