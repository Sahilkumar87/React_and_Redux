function Todoitem2() {
    let todoDate = "04/01/2026";
    let todoName = "Buy Milk";
  return (
    <div class="row">
      <div class="col-4">{todoName} to College</div>
      <div class="col-4">{todoDate}</div>
      <div class="col-2">
        <button type="button" class="btn btn-danger">
          delete
        </button>
      </div>
    </div>
  );
}

export default Todoitem2;
