function Todoitem2() {
    let todoDate = "04/01/2026";
    let todoName = "Buy Milk";
  return (
    <div class="row sn-row">
      <div class="col-4">{todoName}</div>
      <div class="col-4">{todoDate}</div>
      <div class="col-2">
        <button type="button " class="btn btn-danger sn-button">
          delete
        </button>
      </div>
    </div>
  );
}

export default Todoitem2;
