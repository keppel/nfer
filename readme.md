## nfer
the easiest way to deploy a [keras] model.

### usage
```
npm install -g nfer
nfer <keras_model.h5>

# outputs: https://nfer.kep.io/models/fa291771204d3a4b4/
```

then POST there with a body like:
```js
{
  input: [
    [0, 0],
    [0, 1],
    [1, 0],
    [1, 1]
  ]
}
```

and get a response like:

```js
{
  output: [
    [0.000008271],
    [0.999998127],
    [0.999994382],
    [0.000001173]
  ]
}
```

doesn't get much simpler than that!

[keras]: https://keras.io
