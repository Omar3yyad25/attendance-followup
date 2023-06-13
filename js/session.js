import { get } from "./api_calls.js";
function create_student(params) {
  const item = `
                
                <td>
                  <div class="d-flex px-2 py-1">
                    <div class="d-flex flex-column justify-content-center">
                      <h6 class="mb-0 text-sm">${params.studentId}</h6>
                    </div>
                  </div>
                </td>
                <td>
                  <p class="text-xs font-weight-bold mb-0">${params.totalAttended}</p>
                </td>
                <td class="align-middle text-center text-sm">
                <span class="badge badge-sm ${params.Attended === 'YES' ? 'bg-gradient-success' : 'bg-gradient-secondary'}">${params.Attended}</span>

                </td>
                <td class="align-middle text-center">
                  <span class="text-secondary text-xs font-weight-bold">${params.updatedAt}</span>
                </td>
                <td class="align-middle">
                  <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                    Edit
                  </a>
                </td>
              
                                
`;
  return item;
}
function add_student(student) {
  const students = document.getElementById("students");
  
  const new_student = document.createElement("tr");
  
  new_student.innerHTML = create_student(student);
  students.appendChild(new_student);
}

const students = await get({ endpoint: "retriveallsessions" });
console.log(students)
students.forEach((student) => {
  add_student(student);
});
