// Uma peça de xadrez e receba o movimento que ela faz.
const pecaXadrex = 'Rei';

switch (pecaXadrex.toLowerCase()) {
    case 'rei':
        console.log('Rei -> Uma casa apenas para qualquer direção');
        break;
    case 'rainha':
        console.log('Rainha-> Diagonal, horizontal e vertical.');
        break;
    case 'bispo':
        console.log('Bispo-> Diagonal.');
        break;
    case 'cavalo':
        console.log('Cavalo -> "L" pode pular sobre as peças.');
        break;
    case 'Torre':
        console.log('Torre -> Horizontal e vertical.');
        break;
    case 'peao':
        console.log('Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.');
        break;
    default:
        console.log('erro nome errado');
        break;

}