const users = [
  ["john","red",5,["ball", "book", "pen"]],
  ["becky","blue",10,["tape", "backpack", "pen"]],
  ["susy","red",55,["ball", "eraser", "pen"]],
  ["tyson","green",1,["book", "pen"]],
];

let copyUsers = JSON.parse(JSON.stringify(users));

const TABLE_THEAD = [`Name`, `Comand`, `Score`, `Data`];

copyUsers.forEach(
  function(element){
    let usersName = element[0] + `!`;
    console.log(usersName)
  }
)

let usersName = copyUsers.map(element => element[0] + `?`);
console.log(usersName)

let teamRed = copyUsers.filter(el => el[1] === `red`);
console.log(teamRed)

const renderThead = list => {
    return `<thead>
        <tr>
            ${list.map(item => `<th>${item}</th>`).join(``)}
        </tr>
    </thead>`;
};

const renderTbody = list => {
  return `<tbody>
    ${
      list
        .map(teamRed => `<tr>
          ${teamRed.map(item => `<td>${item}</td>`).join(``)}
        </tr>`)
        .join(``)
    }
  </tbody>`
}

const getSumOfArray = list => list.reduce((sum, item) => sum+item);

const usersTable = (thead, data) => {

  let scoreSum = getSumOfArray(data.map(teamRed => teamRed[2]))

  let table = `<table>
    ${renderThead(thead)}
    ${renderTbody(data)}
    <tfoot>
      <tr>
        <td colspan="4">Total score: ${scoreSum}</td>
      </tr>
    </tfoot>
  </table>`

  return table;
}

document.write(usersTable(TABLE_THEAD, teamRed))
