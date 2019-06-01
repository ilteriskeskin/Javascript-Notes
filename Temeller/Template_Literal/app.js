const name = "Ali İlteriş Keskin"
const department = "Web";
const salary = 4000;


// Eski Yöntem
const a = "İsim: " + name + "\n" + "Department: " + department + "\n" + "Maaş: " + salary;
console.log(a);
// Yeni Yöntem
const b = `İsim:${name}\nDepartment:${department}\nMaaş:${salary}`;
console.log(b);


// Eski Yötem
const html = "<ul>" +
             "<li>" + name + "</li>" +
             "<li>" + department + "</li>" +
             "<li>" + salary + "</li>" + 
             "</ul>";
document.body.innerHTML = html;
// Yeni Yöntem
const html2 = `
    <ul>
        <li>${name}</li>
        <li>${department}</li>
        <li>${salary}</li>
        <li>${10 / 4}</li>
    </ul>
`;
document.body.innerHTML = html2;