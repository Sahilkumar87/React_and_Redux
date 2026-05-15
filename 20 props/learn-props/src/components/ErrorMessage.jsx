const Error = ((items) => {
    //   let foodItems = [''];
      let emptyMessage = items.length === 0 ? <h3>No UI</h3> : null;

    return (<>
    {emptyMessage}
    </>)
})

export default Error;