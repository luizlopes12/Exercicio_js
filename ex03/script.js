universe = prompt("Digite o universo (Marvel ou DC)");
hero = prompt("Escreva o nome do herói");
rep = prompt("Quantas vezes quer repetir?");
for(x = 0;x <= rep; x++){
if(universe == "Marvel" || universe == "marvel"){
    document.write("<h1>O universo é Marvel</h1> <br>");
    
    if(hero == "Hulk"){
        document.write("O personagem é Hulk <br>");
        document.write("<img src='imgs/hulk.jpg'><br>");
    }
    else if(hero == "Capitão América"){
        document.write("O personagem é Capitão América <br>");
        document.write("<img src='imgs/capita.jpg' heigth='200'><br>");
    }
    else if(hero == "Homem de Ferro"){
        document.write("O personagem é Homem de Ferro <br>");
        document.write("<img src='imgs/iron.jpg'><br>");
    }
    else if(hero == "Pantera Negra"){
        document.write("O personagem é Pantera Negra <br>");
        document.write("<img src='imgs/F.jpg'><br>");
    }
    else if(hero == "Viuva Negra"){
        document.write("O personagem é Viuva Negra <br>");
        document.write("<img src='imgs/viuva.jpg'><br>");
    }
    else if(hero == "Thor"){
        document.write("O personagem é Thor <br>");
        document.write("<img src='imgs/thor.jpg'><br>");
    }
    else if(hero == "Feiticeira escarlate"){
        document.write("O personagem é Feiticeira Escarlate <br>");
        document.write("<img src='imgs/escar.jpg'><br>");
    }
    else if(hero == "Vespa"){
        document.write("O personagem é Vespa <br>");
        document.write("<img src='imgs/vespa.jpg'><br>");
    }
    else if(hero == "Homem Aranha"){
        document.write("O personagem é Homem Aranha <br>");
        document.write("<img src='imgs/aranha.jpg'><br>");
    }
    else if(hero == "Homem Formiga"){
        document.write("O personagem é Homem Formiga <br>");
        document.write("<img src='imgs/formiga.jfif'><br>");
    }
    else{
        document.write("Personagem inválido <br>");
    }
}
else if(universe == "DC" || universe == "dc"){
    document.write("<h1>O universo é DC </h1> <br>");

    if(hero == "Aquaman"){
        document.write("O personagem é Aquaman <br>");
        document.write("<img src='imgs/aqua.jpg'><br>");
    }
    else if(hero == "Batman"){
        document.write("O personagem é Batman <br>");
        document.write("<img src='imgs/bat.jpeg'><br>");
    }
    else if(hero == "Superman"){
        document.write("O personagem é Superman <br>");
        document.write("<img src='imgs/super.jpg'><br>");
    }
    else if(hero == "Lanterna Verde"){
        document.write("O personagem é Lanterna Verde <br>");
        document.write("<img src='imgs/lanterna.jpg'><br>");
    }
    else if(hero == "Mulher Maravilha"){
        document.write("O personagem é Mulher Maravilha <br>");
        document.write("<img src='imgs/maravilha.jpg'><br>");
    }
    else if(hero == "Coringa"){
        document.write("O personagem é Coringa <br>");
        document.write("<img src='imgs/coronga.jpg'><br>");
    }
    else if(hero == "Charada"){
        document.write("O personagem é Charada <br>");
        document.write("<img src='imgs/charadinha.jpg'><br>");
    }
    else if(hero == "Arqueiro Verde"){
        document.write("O personagem é Arqueiro Verde <br>");
        document.write("<img src='imgs/arq.jpeg'><br>");
    }
    else if(hero == "Robin"){
        document.write("O personagem é Robin <br>");
        document.write("<img src='imgs/rob.jpeg'><br>");
    }
    else if(hero == "Ravena"){
        document.write("O personagem é Ravena <br>");
        document.write("<img src='imgs/ravena.jpg'><br>");
    }
    else{
        document.write("Personagem inválido <br>");
    }
}
else{
    document.write("O universo é inválido <br>");
}
}