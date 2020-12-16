function massMass() {
    let marvel = ["Iron Man", "Thor", "Black widow", "Spideerman"];
    let dc_comics = ["Flash", "Batman", "WonderWoman", "AquaMan"];

    let worldHeroes = marvel.concat(dc_comics);
    console.log(worldHeroes);

    worldHeroes.pop();
    console.log(worldHeroes);

    marvel.push("Captain America");
    console.log(marvel);

    dc_comics.unshift("Joker");
    console.log(dc_comics);

    console.log(marvel[3]);

    console.log(dc_comics.indexOf("Batman"));

    console.log(marvel.join("*"));


}

massMass();