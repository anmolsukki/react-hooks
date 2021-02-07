### REACT HOOKS

#### Update Title using document

```
document.title = "Update Document"
```

#### useEffect cleanup

```jsx
useEffect(() => {
  console.log('useEffect Called');

  return () => {
    console.log('Component Unmounting code');
  };
}, []);
```
