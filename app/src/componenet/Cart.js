import Checkout from "./Checkout";
export default function Cart() {
  return (
    <>
      <button
        type="button"
        className="btn btn-danger mt-1 btn-sm"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Cart()
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Cart
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">

                <Checkout />
             
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-sm btn-danger">
                Check Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
