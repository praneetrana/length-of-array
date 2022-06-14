var salary=[10000,20000,40000,5500,];
var totalSalary=0;

totalSalary= salary[0] + salary[1] + salary[2] + salary[3];

//console.log(totalSalary);

average();
function average() 
{
    average=totalSalary/salary.length;
}
console.log(average);