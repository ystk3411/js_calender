const date = new Date;
const N = 12;
const arr = Array.from(Array(N), (_, index) => index + 1);
const month_arr = {1:"January", 2:"February", 3:"March", 4:"April", 5:"May", 6:"June", 7:"July", 8:"August", 9:"September", 10:"October", 11:"November", 12:"December"};
let space = "   " ;

if (process.argv[2] === '-m' && arr.find((number) => number === Number(process.argv[3]))){
  day_first = new Date(date.getFullYear(), process.argv[3] - 1,1);
  day_last = new Date(date.getFullYear(), process.argv[3],0);
} else if (process.argv.length === 2){
  day_first = new Date(date.getFullYear(), date.getMonth(),1);
  day_last = new Date(date.getFullYear(), date.getMonth() + 1,0);
} else{
  throw new Error('入力された値は無効です');
}

for (let i = 0; i < day_first.getDay() - 1; i++){
  if (day_first.getDay() === 1){
    break;
  }
  space += "   "
}

const today = date.getDay();
console.log("    " + month_arr[day_first.getMonth() + 1] + " " + day_first.getFullYear())
console.log('Su Mo Tu We Th Fr Sa');
process.stdout.write(space);

for (let i = 1; i <= day_last.getDate(); i++){
  process.stdout.write(String(i).padStart(2) + ' ');

  if ((day_first.getDay() + i) % 7 === 0){
    process.stdout.write('\n');
  }
}