// const para = <p>Hello world</p>;
// ReactDOM.render(para, document.getElementById("app"));

const student = {
    name: "Amith",
    class: "CS 319",
    year: 2020
}

const stud =(
    <div>
        <p>Student name: {student.name}</p>
        <p>Student class: {student.class}</p>
        <p>Student year: {student.year}</p>
    </div>
);

ReactDOM.render(stud,document.getElementById("app"));