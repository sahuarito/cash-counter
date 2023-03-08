# react-native-cash-counter

A cash counter

## Installation

```sh
npm install react-native-cash-counter
```

## Usage

```js
import { Counter, useCounter } from "react-native-cash-counter"


function MyWrapComponent(){
    const [denominations, setDenominations, total] = useCounter()
    return  (
        <Text>Total: ${total}</Text>
        <Counter 
            denominations={denominations} 
            setDenominations={setDenominations}
        />
    )
}

```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
