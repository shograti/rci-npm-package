# rci-datepicker

## Minimal requirements

**This library requires node.js >= 13.2.0 and React >= 16.8.0**

## Get started

Install the component via npm.

```sh
npm install rci-datepicker
```

Import the component in your project

```jsx
import DatePicker from "rci-date-picker";
```

Use it like an input by using onChange() on it.

```jsx
function Component() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div>
      <h1>Date Picker Example</h1>
      <DatePicker onChange={(e) => setSelectedDate(e.target.value)} />
      <p>Selected Date: {selectedDate}</p>
    </div>
  );
}
```


