import { getRandomInt } from "./script.js";

export class Table extends React.Component {
  constructor(props) {
    super(props);

    const activeItems = setInterval(() => {
      let randomIndex = getRandomInt(0, this.state.listIndex.length);
      let randomItem = this.state.listIndex[randomIndex];

      if (
        this.state.listIndex.length === Math.floor(this.state.list.length / 2)
      ) {
        this.setState({
          borderWidth: `10px`,
        });
      }

      if (!this.state.listIndex.length) {
        clearInterval(activeItems);
        this.setState({
          borderWidth: `20px`,
        });
      }

      this.setState({
        list: this.state.list.map((item, index) => {
          if (index == randomItem) item.active = true;
          return item;
        }),
        listIndex: this.state.listIndex.filter(
          (item, index) => index != randomIndex
        ),
      });
    }, 2000);
  }

  render() {
    return (
      <table style={{ borderWidth: this.state.borderWidth }}>
        <tbody>
          {this.state.list.map((item, index) => (
            <tr
              style={item.active && { color: `green`, fontWeight: `bold` }}
              key={index}
            >
              <td>{item.type}</td>
              <td>{item.icon}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
