function omikuji(){
    let hako = ["大吉","中吉","吉","小吉","凶","大凶"];
    let index = Math.floor(Math.random() * 6);
    let unsei = hako[index];
    if(index == 0){
    console.log(year + "年の運勢は..." + unsei + "なんですか？");
    }
}
for(let i = 2025;i < 2030;i++){
    omikuji(i)
}