function Todoitem1(){
  let todoName = "Go College";
  let todoDate = "j4/22/2026";
    return (
        <div class="row">
          <div class="col-4">{todoName}</div>
          <div class="col-4">{todoDate}</div>
          <div class="col-2">
            <button type="button" class="btn btn-danger">
              delete
            </button>
          </div>
        </div>)
}

export default Todoitem1;