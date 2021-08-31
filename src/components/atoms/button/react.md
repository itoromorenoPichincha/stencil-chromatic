# Uso de pichincha-button en React

### Implementar en JSX
```html
<pichincha-button size="large" id="idButton" color="primary">
    Texto Boton
</pichincha-button>
```

### Manejo de eventos con querySelector
```javascript
useEffect(() => {
    const  handleClick  = (event) => {
        console.log(event);
    };
    document.querySelector('#idButton').addEventListener("clickbutton", handleClick);
    return () => {
        document.querySelector('#idButton').remove.eventListener("clickbutton", handleClick);
    };
}, []);
```

### Manejo de eventos por referencia
```javascript
const  button  =  useRef();

useEffect(() => {
    const  handleClick  = (event) => {
        console.log(event);
    };
    button.current.addEventListener("clickbutton", handleClick);
    return () => {
        button.remove.eventListener("clickbutton", handleClick);
    };
}, []);
```

Pasar la referencia dentro del web component.

```html
<pichincha-button  ref={button}  size="large"  id="button"  color="primary">
    Texto Boton
</pichincha-button>
```

