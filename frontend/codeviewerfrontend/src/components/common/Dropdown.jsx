import { Dropdown } from "react-bootstrap";

export default function DropdownButton({
  options = [],
  id = "no-id",
  title = "no title",
  action = () => {},
}) {
  return (
    <Dropdown onSelect={action}>
      <Dropdown.Toggle variant="primary" id={id}>
        {title}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {options.map((option) => (
          <Dropdown.Item eventKey={option}>{option}</Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}
