let studentRecords = [ {name: 'John', id: 123, marks : 98 },
        {name: 'Baba', id: 101, marks : 23 },
        {name: 'yaga', id: 200, marks : 45 },
        {name: 'Wick', id: 115, marks : 75 } ]

    //Q1
    let cap = [];
    for (let i = 0; i < studentRecords.length; i++){
        cap.push(studentRecords[i].name.toUpperCase());
    }
    console.log(cap)
    //q2
    let high = studentRecords.filter(student => student.marks > 50)
    console.log(high)
    //q3
    let retrive = studentRecords.filter(student => student.marks > 50 && student.id>120 );
    console.log(retrive)
    //q4
    let total = studentRecords.reduce((sum, student) => sum + student.marks,0);
    console.log(total)
    //q5
    let names = studentRecords.filter(student => student.marks >50)
                .map(student => student.name);
   console.log(names); 
   //q6
   let idtotal = studentRecords
                .filter(student => student.id > 120)
                .reduce((sum, student) => sum + student.marks , 0);
    console.log(idtotal);
    //q7
    let add = studentRecords
              .map(student => {
                if(student.marks <= 50){
                    student.marks += 15;
                }
                return student.marks;
              })
              .reduce((sum , marks) => sum + marks, 0)
    console.log(add)
    //q8
    let student1 = { name: 'John', class: '10th', rollNo: 1 };
let student2 = { name: 'Jane', class: '9th', rollNo: 2 };
let student3 = { name: 'David', class: '12th', rollNo: 3 };
let student4 = { name: 'Emily', class: '11th', rollNo: 4 };
let student5 = { name: 'Michael', class: '10th', rollNo: 5 };
let student6 = { name: 'Sophia', class: '9th', rollNo: 6 };
 
let all = [student1, student2, student3, student4, student5, student6];
console.log(all);